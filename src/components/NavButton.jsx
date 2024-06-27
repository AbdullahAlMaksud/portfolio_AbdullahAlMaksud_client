import { Button } from '@material-tailwind/react';
import { Link } from 'react-scroll';
import { Tooltip } from 'react-tooltip';

const NavButton = ({ to, icon: Icon, tooltip, tooltipId }) => {
    return (
        <div className='flex'>
            <Button className='bg-gray-300 border border-black rounded-md flex p-0 z-20' >
                <Link className='p-2' to={to} smooth={true} duration={500} data-tooltip-id={tooltipId}>
                    {Icon && <Icon className='text-black text-lg' />}
                </Link>
            </Button>
            <Tooltip id={tooltipId} style={{ backgroundColor: "rgb(10, 10, 10)", color: "white", borderRadius: "10px", zIndex: "100" }}

                content={tooltip}
                events={['hover']}
            >

            </Tooltip>


        </div>
    );
};

export default NavButton;