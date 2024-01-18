import { useEffect, useState } from "react";
import Input from "../Input";
import { validate } from "./validate";
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);
  };
  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      console.log(data);
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>Sign Up</h2>
        <Input
          label="name"
          type="text"
          value={data.name}
          onChange={changeHandler}
          onfocus={focusHandler}
          error={errors.name}
          focus={touched.name}
        />
        <Input
          label="email"
          type="email"
          value={data.email}
          onChange={changeHandler}
          onfocus={focusHandler}
          focus={touched.email}
          error={errors.email}
        />
        <Input
          label="password"
          type="password"
          value={data.password}
          onChange={changeHandler}
          onfocus={focusHandler}
          focus={touched.password}
          error={errors.password}
        />
        <Input
          label="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={changeHandler}
          onfocus={focusHandler}
          focus={touched.confirmPassword}
          error={errors.confirmPassword}
        />
        <Input
          label="isAccepted"
          type="checkbox"
          value={data.isAccepted}
          name="isAccepted"
          onChange={changeHandler}
          onfocus={focusHandler}
          focus={touched.isAccepted}
          error={errors.isAccepted}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUp;
