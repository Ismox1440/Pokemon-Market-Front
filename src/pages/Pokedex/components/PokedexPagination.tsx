import { Pagination } from '@mantine/core';

const PokedexPagination = ({
  pages,
  currentPage,
  handleSelect,
}: {
  pages: number;
  currentPage: number;
  handleSelect: Function;
}) => {
  const handleChange = (e: number) => {
    handleSelect(e, 'page');
  };
  return <Pagination className='mt-6' onChange={handleChange} value={currentPage} total={pages} />;
};

export default PokedexPagination;
