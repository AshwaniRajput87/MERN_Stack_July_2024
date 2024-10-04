import { useState, useEffect } from "react";

const User = () => {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(3);

  const fetchData = async (userId) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      const result = await res.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  return (
    <>
      <h1>A single user details</h1>
      <ul className="user-list-items">
        {data && (
          <li className="user-list-item" key={data.id}>
            {data.name} - {data.email}
          </li>
        )}
      </ul>
    </>
  );
};

export default User;
