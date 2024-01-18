import { useState } from "react";
import Input from "../Input";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const changeHandler = (event) => {
    if (event.target.name === 'isAccepted') {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);
  };

  return (
    <div>
      <form>
        <h2>Sign Up</h2>
        <Input
          label="name"
          type="text"
          value={data.name}
          onChange={changeHandler}
        />
        <Input
          label="email"
          type="email"
          value={data.email}
          onChange={changeHandler}
        />
        <Input
          label="password"
          type="password"
          value={data.password}
          onChange={changeHandler}
        />
        <Input
          label="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={changeHandler}
        />
        <Input
          label="isAccepted"
          type="checkbox"
          value={data.isAccepted}
          name="isAccepted"
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default SignUp;
