import GrandChildComp from "./GrandChildComp";

const ChildComp = ({ data }) => {
  return (
    <>
      <GrandChildComp data={data} />
    </>
  );
};

export default ChildComp;
