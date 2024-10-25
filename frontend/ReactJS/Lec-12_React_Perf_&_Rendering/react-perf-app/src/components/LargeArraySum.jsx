import { useState, useMemo } from "react";

const LargeArraySum = () => {
  const [count, setCount] = useState(0);

  const generateLargeArray = () => {
    const largeArr = [];
    for (let i = 0; i < 10000; i++) {
      largeArr.push(i);
    }

    return largeArr;
  };

  const sumArray = (arr) => {
    console.log(arr);

    return arr.reduce((acc, curr) => acc + curr, 0);
  };

  const largeArray = useMemo(() => {
    return generateLargeArray();
  }, []);

  console.log("Large array", largeArray);

  const sum = useMemo(() => {
    return sumArray(largeArray);
  }, [largeArray]);

  console.log(sum);

  return (
    <>
      <h3>Sum: {sum}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
};

export default LargeArraySum;
