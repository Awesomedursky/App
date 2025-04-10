import { useState } from "react";

import reactLogo from "../assets/react.svg";
// import viteLogo from "../vite.svg";

const Homepage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="/create-account">Create Account</a>
      </div>
    </>
  );
};

export default Homepage;
