import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] md:grid-cols-[auto_1fr] md:grid-rows-[auto] w-screen  ">
      <NavBar />
      <main
        className="flex 
    py-[32px]
    justify-center
 bg-11 overflow-auto
 dark:bg-12
 "
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
