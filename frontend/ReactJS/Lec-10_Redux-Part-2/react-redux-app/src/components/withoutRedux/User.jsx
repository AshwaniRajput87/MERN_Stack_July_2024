import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState({ name: "Ashwani Rajput" });

  const [error, setError] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  const userDetails = async () => {
    try {
      setUserLoading(true);
      const resp = await fetch("https://jsonplaceholder.typicode.com/users/2");

      const res = await resp.json();

      setUser(res);
    } catch (error) {
      setError(error);
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <>
      <h2>User Details</h2>

      {userLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          <li>{user.name}</li>
        </ul>
      )}
    </>
  );
};

export default User;
