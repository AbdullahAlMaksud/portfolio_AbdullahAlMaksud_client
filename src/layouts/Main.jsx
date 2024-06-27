import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../Pages/home/Footer';

const Main = () => {
    return (

        <div className='flex z-50'>
            <div className='bg-purple-600 w-14 min-h-screen'>
                <Navigation />
            </div>
            <div className='w-[calc(100vw-64px)] md:w-full z-0'>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;