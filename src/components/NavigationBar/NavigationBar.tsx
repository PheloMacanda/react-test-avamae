import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { Button } from '../Button/Button';
import './NavigationBarStyles.css';

const NavigationBar: FC = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const smallerScreen = window.innerWidth < 920;

    const toggleMenuBar = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav id='navigation-bar'>
            {smallerScreen ?
                <div className='logo' onClick={toggleMenuBar}>
                    <Logo
                        width={140}
                        height={30}
                    />
                </div> :
                <Link to='/' className='logo'>
                    <Logo
                        width={140}
                        height={30}
                    />
                </Link>
            }
            <ul className={openMenu ? 'open' : ''}>
                <li id='link'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li id='link'>
                    <NavLink to='/about'>About Us</NavLink>
                </li>
                <li id='link'>
                    <NavLink to='/contact'>Contact Us</NavLink>
                </li>
                <li id='link'>
                    <Link to='/login'>
                        <Button
                            title='Log in'
                            variant='primary'
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavigationBar;