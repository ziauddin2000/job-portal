import Lottie from "lottie-react";
import registerLottie from "../../../public/lottie/register.json";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../../AuthProvider/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  let navigate = useNavigate();

  let location = useLocation();
  let from = location.state ? location.state : "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then(() => {
        reset();
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-full max-w-md shrink-0 lg:text-left flex justify-center items-center">
          <Lottie
            animationData={registerLottie}
            loop={true}
            className="w-[300px]"
          />
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <p role="alert">{errors.email.message}</p>}

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password should be min 6 characters",
                    },
                  })}
                />

                {errors.password && (
                  <p role="alert">{errors.password.message}</p>
                )}

                <button type="submit" className="btn btn-neutral mt-4">
                  Sign In
                </button>
              </fieldset>
            </form>
          </div>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
