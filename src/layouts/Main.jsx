import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Main = () => {
    return (

        <div className='flex z-50'>
            <div className='bg-purple-600 min-w-16 max-w-16 min-h-screen'>
                <Navigation />
            </div>
            <div className='w-full z-0'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;