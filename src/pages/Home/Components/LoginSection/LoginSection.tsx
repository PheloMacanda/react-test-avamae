import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import './LoginSection.css';

export const LoginSection = () => {
    return (
        <div className="login-section">
            <div className="login-box">
                <h2>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</h2>
                <p>
                    Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Donec finibus nulla quis lorem mollis lacinia. Fusce ut arcu ligula.
                    Pellentesque augue ex, pellentesque ut maximus non, eleifend ut lorem.
                    Vestibulum rutrum malesuada turpis, molestie mattis velit maximus ac.
                    Quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat
                    fringilla in sed diam.
                </p>
                <Link to='/login'>
                    <Button
                        title='Log in'
                        variant='primary'
                    />
                </Link>
            </div>
        </div>
    )
};