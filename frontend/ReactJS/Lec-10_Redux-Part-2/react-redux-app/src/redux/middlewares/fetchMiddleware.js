import UserSlice from "../slices/UserSlice";

const actions = UserSlice.actions;

export const fetchMiddleware = () => {
  // end point: https://jsonplaceholder.typicode.com/users/1

  return async function (dispatch) {
    try {
      dispatch(actions.isUserLoading(true));

      const resp = await fetch("https://jsonplaceholder.typicode.com/users/3");

      const res = await resp.json();

      console.log(res);

      dispatch(actions.userData(res));
    } catch (error) {
      dispatch(actions.userError(error));
    } finally {
      dispatch(actions.isUserLoading(false));
    }
  };
};
