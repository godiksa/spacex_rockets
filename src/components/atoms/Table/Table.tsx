import { IItem } from '../../molecules/SearchTable/SearchTable';
import {
  StyledBodyItem,
  StyledBodyRow,
  StyledHeaderItem,
  StyledHeaderRow,
} from './styles';

interface ITableProps {
  tableHeadValues: (string | number)[];
  tableData?: IItem[] | null;
}

const Table = ({ tableHeadValues, tableData }: ITableProps) => {
  return (
    <div>
      <StyledHeaderRow numHeadColumns={tableHeadValues.length}>
        {tableHeadValues.map((value, index) => (
          <StyledHeaderItem key={index}>{value}</StyledHeaderItem>
        ))}
      </StyledHeaderRow>
      {tableData &&
        tableData.map((item) => (
          <StyledBodyRow
            key={item.id}
            numBodyColumns={item.valuesToDisplay.length}
          >
            {Object.values(item.valuesToDisplay).map((value, index) => (
              <StyledBodyItem key={index}>{value.toString()}</StyledBodyItem>
            ))}
          </StyledBodyRow>
        ))}
    </div>
  );
};

export default Table;
