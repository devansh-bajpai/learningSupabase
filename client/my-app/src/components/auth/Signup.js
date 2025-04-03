import React from "react";
import { useForm } from "react-hook-form";


export default function Signup({ setPage }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)


  }

  return (
    <>
      <h2 className="text-3xl text-white m-2">Signup</h2>

      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
       

        <input
          className="bg-gray-500 text-white outline-none w-100 h-10 p-2 rounded-sm m-1"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "This field is required." },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-lg">{errors.email.message}</span>
        )}


        <input
          className="bg-gray-500 text-white outline-none w-100 h-10 p-2 rounded-sm m-1"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: { value: true, message: "This field is required." },
            minLength: {
              value: 8,
              message: "Password must be atleast 8 characters long.",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-lg">
            {errors.password.message}
          </span>
        )}

        <input
          className="bg-gray-500 text-white outline-none w-100 h-10 p-2 rounded-sm m-1"
          type="confirmPass"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: { value: true, message: "This field is required." },
            minLength: {
              value: 8,
              message: "Password must be atleast 8 characters long.",
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-lg">
            {errors.confirmPassword.message}
          </span>
        )}

        <input
          className="bg-slate-400 w-25 h-10 rounded-sm hover:bg-slate-500 duration-500 cursor-pointer"
          type="submit"
        />

        <span
          onClick={() => {
            setPage(0);
          }}
          className="text-white"
        >
          Already a user?{" "}
          <button className="text-blue-500 cursor-pointer hover:underline">
            Sign In
          </button>
        </span>
      </form>
    </>
  );
}
