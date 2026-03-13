import { Outlet } from 'react-router';
import { Header } from '../../../components/header';
import { Footer } from '../../../components/footer';

export const AppLayout = () => (
  <div className="wrapper">
    <Header />
    <main className="main">
      <Outlet />
    </main>
    <Footer />
  </div>
);
