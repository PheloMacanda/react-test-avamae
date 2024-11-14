import { Button } from '../../../../components/Button/Button';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h1>Lorem ipsum dolor</h1>
                <p>Quem vide tincidunt pri ei, id mea omnium denique.</p>
                <Button 
                    title="Contact us"
                    variant="secondary"
                />
            </div>
            <div className="hero-image">
            </div>
        </section>
    )
};

export default HeroSection;