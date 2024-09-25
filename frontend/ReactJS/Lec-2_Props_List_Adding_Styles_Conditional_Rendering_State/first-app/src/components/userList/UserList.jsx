import "./userList.css";
// import styles from "./userList.module.css";

const UserList = () => {
  const users = [
    { id: 1, name: "Ashwani Rajput", age: 30 },
    { id: 2, name: "Sahil", age: 20 },
    { id: 3, name: "Jency", age: 23 },
    { id: 4, name: "Nidhi", age: 24 },
    { id: 5, name: "Aryan", age: 25 },
    // { id: 6, name: "Ajay", age: 24 },
  ];

  return (
    <>
      <ul>
        {users.map((item) => {
          return (
            <li
              key={item.id}
              className="list-item"
              style={{ color: "red", fontSize: "50px" }}
            >
              Welcome, {item.name} and your age is {item.age}
            </li>
          );
        })}
      </ul>

      {/* <ul className={styles.items}>
        {users.map((item) => {
          return (
            <li key={item.id} className={styles.listItem}>
              Welcome, {item.name} and your name is {item.age}
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default UserList;
