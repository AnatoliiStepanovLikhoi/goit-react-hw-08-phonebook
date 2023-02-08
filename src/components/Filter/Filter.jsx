import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { filterContact } from '../../redux/filter/filterSlice';
import debounce from 'lodash.debounce';

import { Label, Input } from '../ContactForm/ContactForm.styled';

export function Filter() {
  const dispatch = useDispatch();

  const onFilterInput = event => {
    const filterInputValue = event.target.value.toLocaleLowerCase();

    dispatch(filterContact(filterInputValue));
  };

  const debouncedFilterHandler = useMemo(
    () => debounce(onFilterInput, 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Label>
      Filter contacts by name
      <Input
        onInput={debouncedFilterHandler}
        name="search"
        placeholder="Search"
        // value={value}
      />
    </Label>
  );
}
