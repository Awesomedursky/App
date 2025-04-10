import { Outlet } from "react-router";

import { Link } from "react-router";

import logo from "@/assets/images/logo.svg";
import onboardingImage from "@/assets/images/onboarding.jpeg";
import stackIcon from "@/assets/images/icons/stack.svg";

const AuthLayout = () => {
  return (
    <div className="bg-white w-full">
      <div className="grid sm:grid-cols-2">
        <div className="pt-6 px-16">
          <div className="py-4">
            <img src={logo} alt="" loading="lazy" />
          </div>

          <div className="pt-8 pb-6">
            <header className="flex flex-col items-start mb-10">
              <div className="rounded-full p-1 inline-flex justify-center items-center bg-background-light size-12">
                <img src={stackIcon} className="size-7" />
              </div>
              <h2 className="text-2xl mt-3 font-bold text-text-primary">
                Create account
              </h2>
              <p className="text-text-secondary">
                Let’s get you started by creating your account
              </p>
            </header>

            <Outlet />

            <div className="inline-flex w-full items-center justify-center gap-2 py-2 font-medium text-sm">
              <p className="text-text-secondary">Already have an account?</p>
              <Link to="/login" className="text-primary ">
                Log in
              </Link>
            </div>
          </div>
        </div>
      
        <div className="relative hidden sm:flex flex-col overflow-hidden" style={{ height: "100%", background: `url(${onboardingImage}) no-repeat center center/cover` }}>
          {/* <img src={onboardingImage} className="h-full object-cover " /> */}
          <div className="absolute bottom-40 py-10 px-20 text-white z-10">
            <h1 className="text-[2.5rem] font-bold font-family-bricolage">Your one-stop app</h1>
            <p className="text-lg font-family-satoshi font-medium">Your one-stop app for all things vehicle-related.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
