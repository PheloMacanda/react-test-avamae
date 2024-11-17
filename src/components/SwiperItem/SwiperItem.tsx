import { FC } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './SwiperItem.css';

export interface SwiperItemProps {
    ImageUrl: string;
    SubTitle: string;
    Title: string;
}

const SwiperItem: FC<SwiperItemProps> = (props) => {

    const {
        ImageUrl,
        SubTitle,
        Title
    } = props;

    const style = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0)), ${ImageUrl ? `url(${ImageUrl})` : 'url("../../../../assets/images/shutterstock_407632243.jpg")'}`,
        width: '100%',
    };

    return (
        <div style={style} className='swiper_item'>
            <div className='text_col'>
                <h1>{Title}</h1>
                <p>{SubTitle}</p>
                <Link to='/contact'>
                    <Button
                        title="Contact Us"
                        variant="secondary"
                    />
                </Link>
            </div>
        </div>
    );

};

export default SwiperItem;