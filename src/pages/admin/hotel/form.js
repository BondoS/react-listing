// to fix some chrome issue, will look into them later
/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import FieldContain from '../../../components/ui/fieldContain';
import Input from '../../../components/ui/input';
import Textarea from '../../../components/ui/textarea';
import priceEnum from '../../../utils/enums/price';
import amenitiesEnum from '../../../utils/enums/amenities';
import Label from '../../../components/ui/label';
import Button from '../../../components/ui/button';
import {
  initialHotel,
  hotelPropTypes
} from '../../../store/reducers/properties/types';
import Select from '../../../components/ui/select';
import Checkbox from '../../../components/ui/checkbox';

const EditForm = ({ hotel, handleSubmit, id, change }) => {
  const { t } = useTranslation();
  // #TODO split each field to separate component
  return (
    <form onSubmit={handleSubmit}>
      <FieldContain>
        <Label htmlFor="hotelId">{t('hotelId')}</Label>
        <Input id="hotelId" value={id} disabled name="id" />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="hotelNameEn">{t('hotelNameEn')}</Label>
        <Input
          id="hotelNameEn"
          value={hotel.name.en}
          onChange={change}
          name="name-en"
        />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="hotelNameDe">{t('hotelNameDe')}</Label>
        <Input
          id="hotelNameDe"
          value={hotel.name.de}
          onChange={change}
          name="name-de"
        />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="hotelDescEn">{t('hotelDescEn')}</Label>
        <Textarea
          id="hotelDescEn"
          value={hotel.description.en}
          onChange={change}
          name="description-en"
        />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="hotelDescDe">{t('hotelDescDe')}</Label>
        <Textarea
          id="hotelDescDe"
          value={hotel.description.de}
          onChange={change}
          name="description-de"
        />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="distance">{t('distance')}</Label>
        <Input
          type="text"
          id="distance"
          value={hotel.distance_to_venue}
          onChange={change}
          name="distance_to_venue"
        />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="rating">
          {t('rating')}
          {` `}
          <sub>{t('ratingTip')}</sub>
        </Label>
        {/* #TODO validate */}
        <Input
          id="rating"
          value={hotel.rating}
          onChange={change}
          name="rating"
        />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="priceCategory">{t('priceCategory')}</Label>
        <Select
          id="priceCategory"
          onChange={change}
          // Chrome bug here
          // onBlur={change}
          name="price_category"
          value={hotel.price_category}
        >
          {Object.keys(priceEnum).map(key => (
            <option key={`price-${key}`} value={key}>
              {priceEnum[key]}
            </option>
          ))}
        </Select>
      </FieldContain>
      <FieldContain>
        <Label htmlFor="amenities">{t('amenities')}</Label>
        {/** #TODO enhance UI */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Object.keys(amenitiesEnum).map((amenity, i) => (
            <Checkbox key={`amenity${i}`}>
              <label htmlFor={`amenity-${amenity}`}>
                {t(amenitiesEnum[amenity])}
              </label>
              <input
                id={`amenity${i}`}
                type="checkbox"
                value={amenity}
                checked={hotel.amenities.includes(+amenity)}
                onChange={change}
                name={`amenity-${amenity}`}
              />
            </Checkbox>
          ))}
        </div>
      </FieldContain>
      {new Array(3).fill(0).map((_, i) => (
        <FieldContain key={`hotel-image${i}`}>
          <Label htmlFor={`image${i}`}>
            {t('image')} {i + 1}
          </Label>
          <Input
            id={`image${i + 1}`}
            value={hotel.images[i] || ''}
            onChange={change}
            name={`images-${i}`}
          />
        </FieldContain>
      ))}
      <Button btnStyle="submit" type="submit">
        {t('save')}
      </Button>
    </form>
  );
};

EditForm.propTypes = {
  hotel: hotelPropTypes,
  handleSubmit: PropTypes.func,
  id: PropTypes.string,
  change: PropTypes.func
};

EditForm.defaultProps = {
  hotel: initialHotel,
  handleSubmit: () => {},
  id: '',
  change: () => {}
};

export default EditForm;
