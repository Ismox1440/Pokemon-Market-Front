import { Input } from '@mantine/core';
import { FormEvent, useEffect, useState } from 'react';

const SearchInput = ({
  handleSelect,
  name,
}: {
  name?: string;
  handleSelect: Function;
}) => {
  const [search, setSearch] = useState(name);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSelect(search, 'name');
  };

  useEffect(() => {
    setSearch(name);
  }, [name]);
  
  return (
    <form className='flex items-center justify-center' onSubmit={handleSubmit}>
      <Input.Wrapper onSubmit={e => console.log(e)} id='search-input'>
        <Input
          onChange={e => setSearch(e.target.value)}
          value={search}
          placeholder='Search by name'
        />
      </Input.Wrapper>
    </form>
  );
};

export default SearchInput;
