import { useEffect, useState } from "react";

import Axios from "axios";

const withFetchData = (WrappedComponent, dataSource) => {
  return function DataFetchingHOC(props) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await Axios.get(dataSource);
          setData(response.data);
          console.log(response.data);
          setError(null);
        } catch (error) {
          setData([]);
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);

    return (
      <WrappedComponent
        data={data}
        error={error}
        isLoading={isLoading}
        {...props}
      />
    );
  };
};

export default withFetchData;
