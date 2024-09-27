import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  //   const [lastname, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const { firstname, lastname, email, password } = formData;

    if (!firstname && !lastname && !email && !password) {
      return;
    }

    console.log("Firstname:", firstname);
    console.log("Lastname:", lastname);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleChange = (e) => {
    //console.log(e.target.value);

    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /* initially {
  
  ...{
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  },

  {
    firstname: Ashwani,
    lastname: "Rajput",
    email: "ashwin@gmail.com",
    password: "Hello",
    confirmPassword: "Hello"
  }
   => 
  {
    firstname: Ashwani,
    lastname: "Rajput",
    email: "ashwin.rajput87@gmail.com ",
    password: "Hello",
  }

  
  } */

  //   const handleFistNameChange = (e) => {
  //     setFirstName(e.target.value);
  //   };

  //   const handleChange = (e) => {
  //     setLastName(e.target.value);
  //   };

  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First name:</label>
          <input
            name="firstname"
            type="text"
            id="firstname"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last name:</label>
          <input
            name="lastname"
            type="text"
            id="lastname"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" id="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
