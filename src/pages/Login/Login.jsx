import LoginImage from "../../../public/Left.png";
import Input from "../../components/Input";
import Logo from "../../../public/Logo.png";
import googleIcon from "../../../public/google-icon.png";
import appleIcon from "../../../public/apple-icon.png";
const Login = () => {
  return (
    <div className="container py-8 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-8 lg:px-16">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <img src={Logo} className="mb-8" alt="" />
            <h1 className="text-4xl font-medium mb-2">Get Started</h1>
            <p className="text-gray-600 text-sm">
              Welcome to ClientBase! Login to access client
            </p>
          </div>

          <form className="space-y-6">
            <Input
              label="Email"
              type="email"
              id="email"
              placeholder="type email here, example@gmail.com"
            />

            <Input
              label="Password"
              label2="Forget?"
              type="password"
              id="password"
              placeholder="Type Password Here"
            />

            <button
              type="submit"
              className="w-full bg-[#3E79EF] text-white py-4 rounded-4xl hover:bg-blue-700 transition-colors"
            >
              Log In
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

      <div className="hidden lg:block">
        <img
          src={LoginImage}
          alt="login image"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Login;
