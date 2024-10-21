import ChildComp from "./ChildComp";

const ParentComp = () => {
  const data = "Pritam";
  return (
    <>
      <ChildComp data={data} />
    </>
  );
};

export default ParentComp;
