import { IRocket } from '../../../shared/api/types';
import {
  StyledBodyItem,
  StyledBodyRow,
  StyledHeaderItem,
  StyledHeaderRow,
} from './styles';

interface ITableProps {
  tableHeadValues: (string | number)[];
  tableData?: IRocket[] | null;
}

const Table = ({ tableHeadValues, tableData }: ITableProps) => {
  return (
    <div>
      <StyledHeaderRow>
        {tableHeadValues.map((value, index) => (
          <StyledHeaderItem key={index}>{value}</StyledHeaderItem>
        ))}
      </StyledHeaderRow>
      {tableData &&
        tableData.map((item) => (
          <StyledBodyRow key={item.id}>
            <StyledBodyItem>{item.rocket_name}</StyledBodyItem>
            <StyledBodyItem>{item.diameter.meters}m</StyledBodyItem>
            <StyledBodyItem>{item.height.meters}m</StyledBodyItem>
            <StyledBodyItem>{item.mass.kg}kg</StyledBodyItem>
            <StyledBodyItem>${item.cost_per_launch}</StyledBodyItem>
          </StyledBodyRow>
        ))}
    </div>
  );
};

export default Table;
