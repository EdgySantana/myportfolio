// fonts
import { Roboto } from 'next/font/google';

// fonts settings
const roboto = Roboto({
  subsets: ['latin'],
  variable:'--font-roboto',
  weight: ['100','300','400','500','700','900'],
});

//components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({children}) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${roboto.variable} font-roboto relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
