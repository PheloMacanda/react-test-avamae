import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './HeroSection.css';
import SwiperItem from '../../../../components/SwiperItem/SwiperItem';

interface SwiperElement {
    ImageUrl: string;
    Title: string;
    Subtitle: string;
}
interface APIResponse {
    Details: SwiperElement[];
}

export const HeroSection = () => {

    const [data, setData] = useState<APIResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details');
                if (!response.ok) {
                    throw new Error('Network response not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Carousel
            centerSlidePercentage={50}
            showArrows={false}
            showStatus={false}
        >
            {data?.Details.map((swiperItem, index) => (
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