import User from "./user/User";
import UserList from "./userList/UserList";

const App = () => {
  const isUserLoggedIn = false;
  return (
    <>
      {/* <User username="Ashwani Rajput" age={20} />
      <User username="Astha" age={30} />
      <User username="Nidhi Kumari" age={32} />
      <User username="Arman" age={23} />
      <User username="Vikas" age={26} /> */}

      {/* {isUserLoggedIn ? <User username="Guest user" age={30} /> : <UserList />} */}
      <User username="Guest user" age={30} />
      <UserList />
    </>
  );
};

export default App;
