import { FC, useState, useEffect } from 'react';
import SwiperItem, { SwiperItemProps } from '../SwiperItem/SwiperItem';
import './Carousel.css';

interface CarouselProps {
    items: Array<SwiperItemProps>;
}

const Carousel: FC<CarouselProps> = ({
    items
}) => {

    let cards = items.map((t, index) =>
        <SwiperItem 
            key={index}
            ImageUrl={t.ImageUrl}
            Title={t.Title}
            SubTitle={t.SubTitle}
        />
    );

    useEffect(() => {
        document.documentElement.style.setProperty('--num', items.length.toString());
    }, [items])

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    const carouselStyle = {
        transform: `translateX(-${currentIndex * 50}%)`,
    };

    return (
        <div className="carouselwrapper module-wrapper">
            <div className="ui">
                <button onClick={handlePrevClick} className="carousel-button carousel-prev">
                    <span className="material-icons">&lsaquo;</span>
                </button>
                <button onClick={handleNextClick} className="carousel-button carousel-next">
                    <span className="material-icons">&#8250;</span>
                </button>
            </div>
            <ul className="carousel" style={carouselStyle}>
                {cards}
            </ul>
        </div>
    )
}

export default Carousel;