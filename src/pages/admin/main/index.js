import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../../components/header';
import Main from '../../../components/main';
import Li from '../../../components/ui/li';
import Ul from '../../../components/ui/ul';
import ListStyled from './listStyled';
import LinksStyled from './linksStyled';
import {
  deletePropertyById,
  loadAllProperties
} from '../../../store/reducers/properties';
import Delete from './confirmBtn';

function Admin() {
  const { hotels, rooms } = useSelector(state => state);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllProperties());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main>
        {/** #TODO show first three items, then show more button to redirect to a new page with full list  */}
        {/** #TODO convert this style to separate ui component */}
        <LinksStyled>
          <Link to="/admin/hotel">{t('addNewHotel')}</Link>
          <Link to="/admin/room">{t('addNewRoom')}</Link>
        </LinksStyled>
        <ListStyled>
          <h3>{t('hotels')}</h3>
          <Ul>
            {Object.keys(hotels.list).map(hotel => (
              <Li key={hotel}>
                <Link
                  className="name"
                  to={`/admin/hotel/?id=${hotels.list[hotel].id}`}
                >
                  {hotels.list[hotel].name[i18n.language]}
                </Link>
                <span>
                  <Link
                    className="editProperty"
                    to={`/admin/hotel/?id=${hotels.list[hotel].id}`}
                  >
                    {t('editHotel')}
                  </Link>
                  <Delete
                    type="hotel"
                    name={hotels.list[hotel].name[i18n.language]}
                    t={t}
                    confirm={() => {
                      dispatch(
                        deletePropertyById('hotels', hotels.list[hotel].id)
                      );
                    }}
                  />
                </span>
              </Li>
            ))}
          </Ul>
        </ListStyled>
        <ListStyled>
          <h3>{t('rooms')}</h3>
          <Ul>
            {Object.keys(rooms.list).map(room => (
              <Li key={room}>
                <Link
                  className="name"
                  to={`/admin/room/?id=${rooms.list[room].id}`}
                >
                  {rooms.list[room].name[i18n.language]}
                </Link>
                <span>
                  <Link
                    className="editProperty"
                    to={`/admin/room/?id=${rooms.list[room].id}`}
                  >
                    {t('editRoom')}
                  </Link>
                  <Delete
                    type="room"
                    name={rooms.list[room].name[i18n.language]}
                    t={t}
                    confirm={() => {
                      dispatch(
                        deletePropertyById('rooms', rooms.list[room].id)
                      );
                    }}
                  />
                </span>
              </Li>
            ))}
          </Ul>
        </ListStyled>
      </Main>
    </div>
  );
}

export default Admin;
