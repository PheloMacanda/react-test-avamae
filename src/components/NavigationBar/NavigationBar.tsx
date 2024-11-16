import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { Button } from '../Button/Button';
import './NavigationBarStyles.css';

const NavigationBar: FC = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenuBar = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav>
            <Link to='/' className='logo'>
                <Logo
                    width={140}
                    height={30}
                />
            </Link>
            <div className='menu' onClick={toggleMenuBar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={openMenu ? 'open' : ''}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About Us</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact Us</NavLink>
                </li>
                <li>
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