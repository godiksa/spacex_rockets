import { useEffect, useState } from 'react';

import Input from '../../atoms/Input';
import searchIcon from '../../../assets/search-icon.svg';

import Table from '../../atoms/Table';
import { API } from '../../../shared/api';
import { IRocket } from '../../../shared/api/types';

const SearchTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const [tableData, setTableData] = useState<IRocket[]>([]);
  const [originalTableData, originalsetTableData] = useState<IRocket[]>([]);

  useEffect(() => {
    API.getRockets()
      .then((data) => {
        setTableData(data);
        originalsetTableData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (searchValue) {
      const itemsAfterSearch = originalTableData.filter(
        (item) =>
          item.rocket_name.toLowerCase().includes(searchValue.toLowerCase()) //CHANGE THE ROCKET.NAME
      );
      setTableData(itemsAfterSearch);
    } else {
      setTableData(originalTableData);
    }
  }, [originalTableData, searchValue]);

  return (
    <div>
      <div>
        <h2>SpaceX rockets</h2>
        <p>{tableData.length} Results</p>
        <Input
          type='text'
          value={searchValue}
          setValue={setSearchValue}
          placeholder='Search'
          icon={searchIcon}
        />
      </div>
      <div>
        <Table
          tableHeadValues={[
            'Rocket name',
            'Diameter',
            'Height',
            'Mass',
            'Cost per launch',
          ]}
          tableData={tableData}
        />
      </div>
    </div>
  );
};

export default SearchTable;
