import { useState } from 'react';
import { IItem } from '../../molecules/SearchTable/SearchTable';
import {
  StyledBodyItem,
  StyledBodyRow,
  StyledHeaderItem,
  StyledHeaderRow,
  StyledTableWrapper,
} from './styles';

interface ITableProps {
  tableHeadValues: (string | number)[];
  tableData?: IItem[] | undefined;
}

const Table = ({ tableHeadValues, tableData }: ITableProps) => {
  const [sortColumn, setSortColumn] = useState<string | number>('');
  const [sortDirection, setSortDirection] = useState('asc');

  const sorting = (column: string | number) => {
    if (sortColumn === column) {
      setSortDirection((prevDirection) =>
        prevDirection === 'asc' ? 'desc' : 'asc'
      );
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  let sortedTableData: IItem[] = tableData || [];

  if (sortColumn && tableData) {
    sortedTableData = [...tableData].sort((a, b) => {
      const valueA = a.valuesToDisplay[tableHeadValues.indexOf(sortColumn)];
      const valueB = b.valuesToDisplay[tableHeadValues.indexOf(sortColumn)];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        const numValueA = parseFloat(valueA.replace(/[^\d.-]/g, ''));
        const numValueB = parseFloat(valueB.replace(/[^\d.-]/g, ''));

        if (!isNaN(numValueA) && !isNaN(numValueB)) {
          if (sortDirection === 'asc') {
            return numValueA - numValueB;
          } else {
            return numValueB - numValueA;
          }
        }
      }
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        if (sortDirection === 'asc') {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      }
      return 0;
    });
  }

  return (
    <StyledTableWrapper>
      <StyledHeaderRow numheadcolumns={tableHeadValues.length}>
        {tableHeadValues.map((value, index) => (
          <StyledHeaderItem key={index} onClick={() => sorting(value)}>
            {value}
          </StyledHeaderItem>
        ))}
      </StyledHeaderRow>
      {sortedTableData &&
        sortedTableData.map((item) => (
          <StyledBodyRow
            key={item.id}
            numbodycolumns={item.valuesToDisplay.length}
          >
            {Object.values(item.valuesToDisplay).map((value, index) => (
              <StyledBodyItem key={index}>{value.toString()}</StyledBodyItem>
            ))}
          </StyledBodyRow>
        ))}
    </StyledTableWrapper>
  );
};

export default Table;
