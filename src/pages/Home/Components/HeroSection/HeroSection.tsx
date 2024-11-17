import { Carousel } from 'react-responsive-carousel';
import Loader from '../../../../components/Loader/Loader';
import './HeroSection.css';
import SwiperItem from '../../../../components/SwiperItem/SwiperItem';
import { useCarouselData } from '../../../../services/api';

export const HeroSection = () => {

    const {
        isLoading: isLoadingCarouselData,
        data: carouselData,
        error: carouselError,
    } = useCarouselData();

    if (isLoadingCarouselData) return <div className='loader-component'><Loader variant='secondary' size={80} /></div>;
    if (carouselError) return <p>Error: {carouselError}</p>;

    return (
        <Carousel
            centerSlidePercentage={50}
            showArrows={false}
            showStatus={false}
            swipeable
        >
            {carouselData?.Details.map((swiperItem, index) => (
                <SwiperItem
                    key={index}
                    ImageUrl={swiperItem.ImageUrl}
                    SubTitle={swiperItem.Subtitle}
                    Title={swiperItem.Title}
                />
            ))}
        </Carousel>
    )
};