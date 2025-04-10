import { createBrowserRouter } from "react-router";
import AuthLayout from "@/components/_layout/auth.layout";

import Homepage from "../pages/Homepage";
import { CreateAccount } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "",
    Component: AuthLayout,
    children: [
      {
        path: "create-account",
        Component: CreateAccount,
      },
    ],
  },
]);

export default router;
