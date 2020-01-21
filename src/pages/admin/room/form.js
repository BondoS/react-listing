// to fix some chrome issue, will look into them later
/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import FieldContain from '../../../components/ui/fieldContain';
import Input from '../../../components/ui/input';
import Textarea from '../../../components/ui/textarea';
import Label from '../../../components/ui/label';
import Button from '../../../components/ui/button';
import {
  initialRoom,
  initialHotel,
  hotelPropTypes,
  roomPropTypes
} from '../../../store/reducers/properties/types';
import Select from '../../../components/ui/select';

const EditForm = ({ room, handleSubmit, id, change, hotels, lng }) => {
  const { t } = useTranslation();
  // #TODO split each field to separate component
  return (
    <form onSubmit={handleSubmit}>
      <FieldContain>
        <Label htmlFor="roomId">{t('roomId')}</Label>
        <Input id="roomId" value={id} disabled name="id" />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="hotelId">{t('hotel')}</Label>
        <Select
          type="text"
          id="hotelId"
          name="hotelId"
          onChange={change}
          value={room.hotelId}
          defaultValue="select"
        >
          <option key="please-select" value="select">
            Please select
          </option>
          {Object.keys(hotels.list).map(key => (
            <option key={key} value={key}>
              {hotels.list[key].name[lng]}
            </option>
          ))}
        </Select>
      </FieldContain>
      <FieldContain>
        <Label htmlFor="roomNameEn">{t('roomNameEn')}</Label>
        <Input
          id="roomNameEn"
          value={room.name.en}
          onChange={change}
          name="name-en"
        />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="roomNameDe">{t('roomNameDe')}</Label>
        <Input
          id="roomNameDe"
          value={room.name.de}
          onChange={change}
          name="name-de"
        />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="roomDescEn">{t('roomDescEn')}</Label>
        <Textarea
          id="roomDescEn"
          value={room.description.en}
          onChange={change}
          name="description-en"
        />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="roomDescDe">{t('roomDescDe')}</Label>
        <Textarea
          id="roomDescDe"
          value={room.description.de}
          onChange={change}
          name="description-de"
        />
      </FieldContain>
      <FieldContain>
        <Label htmlFor="max_occupancy">{t('max_occupancy')}</Label>
        <Select
          type="text"
          id="max_occupancy"
          value={room.max_occupancy}
          onChange={change}
          name="max_occupancy"
        >
          {new Array(6).fill(0).map((_, i) => (
            <option key={`max_occupancy-${i + 1}`} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Select>
      </FieldContain>
      <FieldContain>
        <Label htmlFor="price_in_usd">{t('price_in_usd')}</Label>
        {/* #TODO validate */}
        <Input
          id="price_in_usd"
          value={room.price_in_usd}
          onChange={change}
          name="price_in_usd"
        />
      </FieldContain>
      <Button btnStyle="submit" type="submit">
        {t('save')}
      </Button>
    </form>
  );
};

EditForm.propTypes = {
  room: roomPropTypes,
  handleSubmit: PropTypes.func,
  id: PropTypes.string,
  change: PropTypes.func,
  hotels: PropTypes.shape({ list: PropTypes.shape({ hotelPropTypes }) }),
  lng: PropTypes.string
};

EditForm.defaultProps = {
  room: initialRoom,
  handleSubmit: () => {},
  id: '',
  change: () => {},
  hotels: { list: [initialHotel] },
  lng: 'en'
};

export default EditForm;
