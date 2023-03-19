import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

import { FilterDiv, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
    const dispatch = useDispatch();

  return (
    <FilterDiv>
      <FilterLabel>Fined contacts by name</FilterLabel>
      <FilterInput type="text" value={filter} onChange={onChange} />
    </FilterDiv>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
