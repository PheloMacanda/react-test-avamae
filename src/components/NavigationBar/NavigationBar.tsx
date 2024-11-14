import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { Button } from '../Button/Button';
import './NavigationBarStyles.css';

const NavigationBar: FC = () => {
    return (
        <header className='bar-container'>
            <div className='logo'>
                <Logo
                    width={140}
                    height={90}
                />
            </div>
            <nav className='nav-container'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/login' className='login'>
                    <Button 
                        title="Log in"
                        variant="primary"
                    />
                </Link>
            </nav>
        </header>
    )
};

export default NavigationBar;