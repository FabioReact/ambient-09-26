import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
  import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <>
      <header>Header</header>
      <Navbar />
      <main className="mx-auto min-h-[calc(100vh-4.5rem)] w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
        <ToastContainer />
      </main>
      <footer>Created with React - 2026</footer>
    </>
  );
};

export default MainLayout;
