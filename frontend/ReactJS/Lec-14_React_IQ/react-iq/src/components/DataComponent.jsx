const DataComponent = ({ data, error, isLoading, heading }) => {
  const headings = heading ? heading : <h1>Fetched details</h1>;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error && error.message}</div>;
  }

  return (
    <>
      {headings}
      <ul>
        {data &&
          data.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
      </ul>
    </>
  );
};

export default DataComponent;
