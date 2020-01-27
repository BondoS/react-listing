import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import Header from '../../../components/header';
import Main from '../../../components/main';
import { filterHotels } from '../../../store/reducers/filter';
import Filter from '../../../components/filter';
import Sort from '../../../components/sort';
import HotelPaginate from '../../../components/paginate';
import Hotels from '../../../components/hotels';
import { stringToNumber } from '../../../utils/normalize';

const HomePg = () => {
  const dispatch = useDispatch();
  const query = useLocation().search.slice(1);
  const history = useHistory();
  const { t } = useTranslation();
  const params = new URLSearchParams(query);
  const { page = 1, filter = {}, sort = 1 } = qs.parse(query);
  const {
    hotels,
    rooms,
    filter: { result, pageCount, loading }
  } = useSelector(state => state);

  const currentHotels = result.map(id => ({
    ...hotels.list[id],
    rooms: rooms.ids
      .filter(roomId => rooms.list[roomId].hotelId === id)
      .map(roomId => rooms.list[roomId])
  }));
  console.log(
    'filter result from home page',
    result,
    'currentHotels',
    currentHotels
  );
  const handleFilter = filters => {
    history.replace(
      `/?${qs.stringify({ filter: filters })}&page=${1}&sort=${sort}`
    );
  };

  const handleSort = sortBy => {
    params.set('sort', sortBy);
    history.replace(`/?${params.toString()}`);
  };

  const handlePagination = nextPage => {
    params.set('page', nextPage);
    history.replace(`/?${params.toString()}`);
  };

  useEffect(() => {
    dispatch(filterHotels(query));
  }, [dispatch, query]);

  let renderResult;
  if (loading) {
    renderResult = (
      <div style={{ textAlign: 'center', padding: '10px' }}>{t('loading')}</div>
    );
  } else if (currentHotels.length === 0) {
    renderResult = (
      <div style={{ textAlign: 'center', padding: '10px' }}>
        {t('sorryNoResultChangeFilter')}
      </div>
    );
  } else {
    renderResult = (
      <>
        <Sort currentSort={+sort} change={handleSort} />
        <Hotels hotels={currentHotels} />
        <HotelPaginate
          currentPage={page - 1}
          pageCount={pageCount}
          onPageChange={handlePagination}
        />
      </>
    );
  }

  return (
    <div>
      <Header />
      <Main>
        <Filter handleSubmit={handleFilter} selected={stringToNumber(filter)} />
        {renderResult}
      </Main>
    </div>
  );
};

export default HomePg;
