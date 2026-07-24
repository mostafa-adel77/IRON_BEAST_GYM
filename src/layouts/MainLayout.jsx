import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-full flex justify-center h-dvh overflow-auto py-6 px-3 bg-dark">
      <div className="container">
        <MainHeader />
        <Outlet />
        <MainFooter />
      </div>
    </div>
  );
}
