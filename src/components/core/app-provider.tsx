import { RouterProvider } from "@tanstack/react-router";
import type { router } from "../../main";

interface AppProviderProps {
  router: typeof router;
}

const AppProvider = ({ router }: AppProviderProps) => {
  return <RouterProvider router={router} />;
};

export default AppProvider;
