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
  tableData?: IItem[] | null;
}

const Table = ({ tableHeadValues, tableData }: ITableProps) => {
  const sorting = () => {
    console.log('clicked');
  };

  return (
    <StyledTableWrapper>
      <StyledHeaderRow numheadcolumns={tableHeadValues.length}>
        {tableHeadValues.map((value, index) => (
          <StyledHeaderItem key={index} onClick={() => sorting()}>
            {value}
          </StyledHeaderItem>
        ))}
      </StyledHeaderRow>
      {tableData &&
        tableData.map((item) => (
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
