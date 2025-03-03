import { Outlet } from 'react-router-dom';
import logo from '../../assets/admin_logo.png';

const AdminLayout = () => {
  return (
    <>
      <header className="fixed top-0 left-0 px-5 sm:~px-8/[3.3rem] ~pt-8/10 w-full bg-white">
        <div className="max-w-[85rem] mx-auto ">
          <img
            className="block object-fit ~w-[5rem]/[6.25rem] blur-0"
            width={100}
            src={logo}
            alt="Orenda Psychiatry"
          />
        </div>
      </header>
      <main className="h-screen max-h-[64rem] grid pt-[4.8rem]">
        <Outlet />
      </main>
    </>
  );
};
export default AdminLayout;
