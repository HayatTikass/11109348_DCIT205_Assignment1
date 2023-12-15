import { useState } from "react";
import { Link } from "react-router-dom";

const loginImg =
  "data:image/png;base64,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";

const Login = () => {
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const isAuthenticated = true;

    if (isAuthenticated) {
      return <Link to="/home" />;
    } else {
      console.error("Authentication failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0"
    >
      <div className="md:w-1/3 max-w-sm">
        <img src={loginImg} alt="Login image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left"></div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Sign in with
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="number"
          placeholder="Student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          required
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          min={5}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
        </div>
        <div className="text-center md:text-left">
          {/* Use Link to navigate to the home page */}
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
            <Link to="/home">Login</Link>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
