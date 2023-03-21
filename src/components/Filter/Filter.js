import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

import { FilterDiv, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(filterContacts(event.target.value));
  };
  
  return (
    <FilterDiv>
      <FilterLabel>Fined contacts by name</FilterLabel>
      <FilterInput type="text" value={filter} onChange={onChange} />
    </FilterDiv>
  );
};
export default Filter;
