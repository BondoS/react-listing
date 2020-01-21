import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/button';

const Lang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button
        btnStyle="normal"
        type="button"
        onClick={() => changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
      >
        {i18n.language === 'en' ? 'de' : 'en'}
      </Button>
    </div>
  );
};

export default Lang;
