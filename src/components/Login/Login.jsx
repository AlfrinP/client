import React, { useState } from "react";
import si from "../../assets/Login/student_icon.png";
import fi from "../../assets/Login/faculty_icon.png";
import book from "../../assets/Login/book.png";
import PasswordInput from "./PasswordInput";

function Login() {
  const [data, setData] = useState("Student Login");

  const handleStudentLogin = () => {
    setData("Student Login");
  };

  const handleFacultyLogin = () => {
    setData("Faculty Login");
  };

  return (
    <div className="w-full h-screen background-main center flex">
      <div className="w-1/2 h-full center flex-col gap-10">
        <div className="w-full center flex-col gap-2">
          <div className="w-full text-center text-2xl text-white">
            Welcome to
          </div>
          <div className="w-full text-center text-4xl text-white font-bold">
            CCE Portal
          </div>
        </div>
        <div>
          <ul className="center gap-5">
            <li
              className={`rounded-lg border center flex-col gap-2 p-5 px-8 border-[#F9F8FD] bg-opacity-0 hover:bg-[#41208B] hover:border-purple-900 ${
                data === "Student Login" ? "cursor-pointer" : ""
              }`}
              onClick={handleStudentLogin}
            >
              <img src={si} alt="student_img" />
              <div className="text-lg text-white">Student</div>
            </li>
            <li
              className={`rounded-lg border center flex-col gap-2 p-5 px-8 border-[#F9F8FD] bg-opacity-0 hover:bg-[#41208B] hover:border-purple-900 ${
                data === "Faculty Login" ? "cursor-pointer" : ""
              }`}
              onClick={handleFacultyLogin}
            >
              <img src={fi} alt="faculty_img" />
              <div className="text-lg text-white">Faculty</div>
            </li>
          </ul>
        </div>
        <div>
          <img src={book} alt="Main Hero" width={400} />
        </div>
      </div>
      <div className="w-1/2 h-full py-16 px-28">
        <div className="w-full h-full border py-10 px-20 rounded-xl background-form">
          <form className="w-full h-full center flex-col gap-10">
            <div className="text-center w-full text-white text-4xl">{data}</div>
            <input
              className="px-8 py-4 rounded-lg border w-full border-white outline-none bg-transparent placeholder:text-white text-white placeholder:text-lg focus:ring-purple-900 focus:border-purple-900 focus:ring-1"
              placeholder="Username"
            />
            <div className="w-full center flex-col items-start gap-1">
              <PasswordInput name={"Password"} />
              <span className="text-white">Forgot password ?</span>
            </div>
            <button className="py-3 text-center text-white font-semibold text-lg w-full background-login">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
