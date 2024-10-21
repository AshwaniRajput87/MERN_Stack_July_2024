import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { fetchMiddleware } from "../../redux/middlewares/fetchMiddleware";

const User = () => {
  const dispatch = useDispatch();
  // const user = useSelector((store) => {
  //   console.log("user data from store", store);
  //   console.log("user data from store", store.userSlice);
  //   return store.userSlice.userData;
  // });

  // const userLoading = useSelector((store) => {
  //   console.log("user loading from store", store.userSlice.userLoading);
  //   return store.userSlice.userLoading;
  // });

  // Improving above code to destructure the variables

  const { userLoading, userData, error } = useSelector((store) => {
    return store.userSlice;
  });

  console.log(userData, userLoading, error);

  useEffect(() => {
    dispatch(fetchMiddleware());
  }, [dispatch]);

  return (
    <>
      <h2>User details with Redux</h2>

      {userLoading && <div>Loading...</div>}

      {error && <div>Error: {error}</div>}

      {userData && (
        <ul>
          <li>{userData.name}</li>
        </ul>
      )}
    </>
  );
};
export default User;
