import { useEffect, useRef } from "react";

const InputComp = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input type="text" placeholder="Enter a value" ref={inputRef} />
    </>
  );
};

export default InputComp;
