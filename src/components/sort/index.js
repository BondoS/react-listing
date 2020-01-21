import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Select from '../ui/select';
import FieldContain from '../ui/fieldContain';
import Label from '../ui/label';
import sortEnum from '../../utils/enums/sort';

const Sort = ({ change, currentSort }) => {
  const { t } = useTranslation();
  const [sort, setSort] = useState(Object.keys(sortEnum)[0]);
  const setSortEnhanced = newSort => {
    setSort(newSort);
    change(newSort);
  };

  useEffect(() => {
    setSort(currentSort);
  }, [currentSort]);

  return (
    <FieldContain>
      <Label htmlFor="sort">{t('sort')}</Label>
      <Select
        id="sort"
        name="sort"
        onChange={e => setSortEnhanced(e.target.value)}
        value={sort}
      >
        {Object.keys(sortEnum).map(key => (
          <option key={`sort-${sortEnum[key].name}`} value={key}>
            {t(sortEnum[key].name)}
          </option>
        ))}
      </Select>
    </FieldContain>
  );
};

Sort.propTypes = {
  change: PropTypes.func,
  currentSort: PropTypes.number
};
Sort.defaultProps = {
  change: () => {},
  currentSort: Object.keys(sortEnum)[0]
};

export default Sort;
