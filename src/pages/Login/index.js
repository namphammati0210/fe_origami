import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "features/auth/loggedInSlice";

import { login } from "services/auth";

import TextField from "components/TextField/TextField";

const schemaValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  console.log("🚀 ~ file: index.js ~ line 25 ~ Login ~ errors", errors);

  const handleLogin = async (data) => {
    console.log("🚀 ~ file: index.js ~ line 18 ~ handleLogin ~ data", data);
    try {
      const { email, password } = data;
      const payload = {
        email,
        password,
      };
      const response = await login(payload);
      const { token, payload: loggedInUser } = response.data;

      dispatch(setLoggedInUser(loggedInUser));

      if (!token) return;
      localStorage.setItem("access_token", token);

      navigate("/");
    } catch (error) {
      setError("Something went wrong, please try again or contact us");
    }
  };

  return (
    <div className="bg-[#F9FAFB] h-[100vh]">
      <p className="text-center text-3xl font-bold py-6">
        Sign in to your Account
      </p>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="max-w-2xl mx-auto my-10 bg-white shadow-xl rounded-lg">
          {error && (
            <div className="text-[#EC4899] text-center pt-5">{error}</div>
          )}
          <div className="p-10 flex flex-col gap-5 ">
            <TextField
              label="Email"
              type="email"
              errors={errors.email}
              {...register("email")}
            />

            <TextField
              label="Password"
              type="password"
              errors={errors.password}
              {...register("password")}
            />

            <button
              className="bg-[#4F46E5] text-white rounded-md p-2"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
