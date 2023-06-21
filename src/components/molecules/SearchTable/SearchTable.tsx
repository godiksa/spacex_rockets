import { useEffect, useState } from 'react';

import Input from '../../atoms/Input';
import searchIcon from '../../../assets/search-icon.svg';

import Table from '../../atoms/Table';
import { StyledSearchBarWrapper, StyledSearchTableWrapper } from './styles';

export interface IItem {
  id: string | number;
  itemTitle: string;
  valuesToDisplay: (string | number | boolean)[];
}

export interface ISearchTableData {
  title: string;
  tableHeadValues: (string | number)[];
  items: IItem[];
}

interface ISearchTableProps {
  data: ISearchTableData;
}

const SearchTable = ({ data }: ISearchTableProps) => {
  const { title, tableHeadValues, items } = data;

  const [searchValue, setSearchValue] = useState('');
  const [tableDataToDisplay, setTableDataToDisplay] = useState<IItem[]>([]);

  useEffect(() => {
    if (searchValue) {
      const itemsAfterSearch = items.filter((item) =>
        item.itemTitle.toLowerCase().includes(searchValue.toLowerCase())
      );
      setTableDataToDisplay(itemsAfterSearch);
    } else {
      setTableDataToDisplay(items);
    }
  }, [data, searchValue]);

  return (
    <StyledSearchTableWrapper>
      <StyledSearchBarWrapper>
        <h2>{title}</h2>
        <p>{tableDataToDisplay.length} Results</p>
        <Input
          type='text'
          value={searchValue}
          setValue={setSearchValue}
          placeholder='Search'
          icon={searchIcon}
        />
      </StyledSearchBarWrapper>
      <div>
        <Table
          tableHeadValues={tableHeadValues}
          tableData={tableDataToDisplay}
        />
      </div>
    </StyledSearchTableWrapper>
  );
};

export default SearchTable;
