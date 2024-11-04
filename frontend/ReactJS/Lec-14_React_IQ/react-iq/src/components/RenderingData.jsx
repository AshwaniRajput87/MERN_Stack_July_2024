import withFetchData from "../hoc/withFetchData";
import DataComponent from "./DataComponent";

const RenderingData = () => {
  const DataFetchedComp = withFetchData(
    DataComponent,
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <DataFetchedComp heading="UserDetails fetched" />
    </>
  );
};

export default RenderingData;
