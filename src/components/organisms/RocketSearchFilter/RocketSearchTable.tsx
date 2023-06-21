import { useQuery } from '@tanstack/react-query';
import { API } from '../../../shared/api';
import FullScreenLoader from '../../atoms/FullScreenLoader';
import { IRocket } from '../../../shared/api/types';
import SearchTable from '../../molecules/SearchTable';
import { ISearchTableData } from '../../molecules/SearchTable/SearchTable';

const RocketSearchTable = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['rockets'],
    queryFn: () => API.getRockets(),
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  const mappedRocketList: ISearchTableData = {
    title: 'SpaceX rockets',
    tableHeadValues: [
      'Rocket name',
      'Diameter',
      'Height',
      'Mass',
      'Cost per launch',
    ],
    items: data.map((rocket: IRocket) => ({
      id: rocket.id,
      itemTitle: rocket.rocket_name,
      valuesToDisplay: [
        rocket.rocket_name,
        `${rocket.diameter.meters}m`,
        `${rocket.height.meters}m`,
        `${rocket.mass.kg}kg`,
        `$${rocket.cost_per_launch}`,
      ],
    })),
  };

  return <SearchTable data={mappedRocketList} />;
};

export default RocketSearchTable;
