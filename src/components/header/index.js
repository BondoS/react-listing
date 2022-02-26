import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ChangeLang from '../lang/lang';
import HeaderStyled from './styledHeader';
import InnerHeader from './innerHeader';
import Ul from '../ui/ul';
import Li from '../ui/li';

function Header() {
  const { t } = useTranslation();

  return (
    <HeaderStyled className="App-header">
      <InnerHeader>
        <Ul>
          <Li header>
            <Link to="/">Home</Link>
          </Li>
          <Li header>
            <Link to="/admin">Admin</Link>
          </Li>
        </Ul>
        <h3>{t('title')}</h3>
        <ChangeLang />
      </InnerHeader>
    </HeaderStyled>
  );
}

export default Header;
