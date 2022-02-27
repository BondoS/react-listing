import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Collapse } from 'react-collapse';
import StyledCollapse from '../ui/collapse';
import Select from '../ui/select';
import FieldContain from '../ui/fieldContain';
import Label from '../ui/label';
import Checkbox from '../ui/checkbox';
import Button from '../ui/button';
import priceEnum from '../../utils/enums/price';
import ratingEnum from '../../utils/enums/rating';
import distanceEnum from '../../utils/enums/distance';
import amenitiesEnum, {
  getAmenityKeyByName,
} from '../../utils/enums/amenities';

function Filter({ handleSubmit, selected }) {
  const { t } = useTranslation();
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [distance, setDistance] = useState(0);
  const [amenities, setAmenities] = useState([]);
  const isDesktop = window.innerWidth > 768;
  const [accordion, setAccordion] = useState({
    isOpened: isDesktop,
    height: isDesktop ? 'auto' : 0,
  });

  const amenityChange = (currAmenity) => {
    setAmenities(
      amenities.includes(currAmenity)
        ? amenities.filter((amenity) => amenity !== currAmenity)
        : [...amenities, currAmenity]
    );
  };

  useEffect(() => {
    setPrice(+selected.price || 0);
    setRating(+selected.rating || 0);
    setDistance(+selected.distance || 0);
    setAmenities(selected.amenities || []);
  }, [selected.amenities, selected.distance, selected.price, selected.rating]);

  return (
    <StyledCollapse className={`${accordion.isOpened ? 'open' : 'closed'}`}>
      <button
        className='collapseHeader'
        type='button'
        onClick={() => {
          setAccordion({
            isOpened: !accordion.isOpened,
            height: accordion.isOpened ? 0 : 'auto',
          });
        }}
      >
        <h3 data-testid='filter-header'>{t('filter')}</h3>
      </button>
      <Collapse
        isOpened={accordion.isOpened}
        initialStyle={{ transition: 'height 500ms', height: accordion.height }}
      >
        <form>
          <FieldContain>
            <Label htmlFor='distance'>{t('distance')}</Label>
            <Select
              id='distance'
              name='distance'
              onChange={(e) => setDistance(e.target.value)}
              value={distance}
            >
              <option key='all' value={0}>
                {t('all')}
              </option>
              {Object.keys(distanceEnum).map((key) => (
                <option key={`distance-${key}`} value={+key}>
                  {t(distanceEnum[key].text)}
                </option>
              ))}
            </Select>
          </FieldContain>
          <FieldContain>
            <Label htmlFor='price_category'>{t('priceCategory')}</Label>
            <Select
              id='price_category'
              name='price_category'
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            >
              <option key='all' value={0}>
                {t('all')}
              </option>
              {Object.keys(priceEnum).map((key) => (
                <option key={`price-${key}`} value={key}>
                  {t(priceEnum[key])}
                </option>
              ))}
            </Select>
          </FieldContain>
          <FieldContain>
            <Label htmlFor='rating'>{t('rating')}</Label>
            <Select
              id='rating'
              name='rating'
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            >
              <option key='all' value={0}>
                {t('all')}
              </option>
              {Object.keys(ratingEnum).map((key) => (
                <option key={`rating-${key}`} value={key}>
                  {t(ratingEnum[key].text)}
                </option>
              ))}
            </Select>
          </FieldContain>
          <FieldContain>
            <Label htmlFor='amenities'>{t('amenities')}</Label>
            {/** #TODO enhance UI */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {Object.keys(amenitiesEnum).map((amenity) => (
                <Checkbox key={`amenity-${amenity}`}>
                  <label htmlFor={amenitiesEnum[amenity]}>
                    {t(amenitiesEnum[amenity])}
                  </label>
                  <input
                    id={amenitiesEnum[amenity]}
                    type='checkbox'
                    value={getAmenityKeyByName(amenity)}
                    checked={amenities.includes(amenity)}
                    onChange={(e) => amenityChange(e.target.value)}
                    name={`amenity-${amenity}`}
                  />
                </Checkbox>
              ))}
            </div>
          </FieldContain>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              btnStyle='basic'
              type='button'
              onClick={() => {
                setAccordion({
                  isOpened: false,
                  height: 0,
                });
                handleSubmit({ distance, price, rating, amenities });
              }}
              data-testid='submit-filter'
            >
              {t('filter')}
            </Button>
          </div>
        </form>
      </Collapse>
    </StyledCollapse>
  );
}

Filter.propTypes = {
  handleSubmit: PropTypes.func,
  selected: PropTypes.shape({
    distance: PropTypes.number,
    price: PropTypes.number,
    rating: PropTypes.number,
    amenities: PropTypes.array,
  }),
};

Filter.defaultProps = {
  handleSubmit: () => {},
  selected: {
    distance: 0,
    price: 0,
    rating: 0,
    amenities: [],
  },
};

export default Filter;
