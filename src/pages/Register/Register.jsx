import RegisterImage from "../../../public/register-img.png";
import Input from "../../components/Input";
import Logo from "../../../public/Logo.png";
import googleIcon from "../../../public/google-icon.png";
import appleIcon from "../../../public/apple-icon.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="container py-8 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block">
        <img
          src={RegisterImage}
          alt="login image"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col justify-center px-8 lg:px-16">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <img src={Logo} className="mb-8" alt="" />
            <h1 className="text-4xl font-medium mb-2">Create an account</h1>
            <p>
              Already have account?{" "}
              <Link to="/login" className="text-[#3E79EF]">
                Login
              </Link>
            </p>
          </div>

          <form className="space-y-6">
            <div className="flex justify-between">
              <Input
                label="First Name"
                id="first-name"
                placeholder="First Name"
              />
              <Input
                label="Last Name"
                id="last-name"
                placeholder="First Name"
              />
            </div>

            <Input
              label="Email"
              type="email"
              id="email"
              placeholder="type email here, example@gmail.com"
            />

            <Input
              label="Password"
              type="password"
              id="password"
              placeholder="Type Password Here"
            />

            <Input
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
            />

            <button
              type="submit"
              className="w-full bg-[#3E79EF] text-white py-4 rounded-4xl hover:bg-blue-700 transition-colors"
            >
              Create Account
            </button>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <div className="px-4 text-[#DCDCDC] text-sm">
                or register with
              </div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-4 border border-[#DCDCDC] rounded-3xl hover:bg-gray-50 transition-colors"
              >
                <img src={googleIcon} alt="Google" className="w-5 h-5" />
                Register with Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-4 border border-[#DCDCDC] rounded-3xl hover:bg-gray-50 transition-colors"
              >
                <img src={appleIcon} alt="Apple" className="w-5 h-5" />
                Register with Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
