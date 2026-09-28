import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <header>Header</header>
      <Navbar />
      <main><Outlet /></main>
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
