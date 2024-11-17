import { FC } from 'react';
import { ReactComponent as ValidIcon } from '../../assets/svg/Icon_Valid.svg';
import './ConfirmationAlertBox.css';

interface ConfirmationAlertBoxProps {
    title: string;
    subTitle: string
}

const ConfirmationAlertBox:FC<ConfirmationAlertBoxProps> = ({
    title,
    subTitle
}) => {
    return (
        <div className="alert-container">
            <div className="alert-icon">
                <ValidIcon 
                    width={30}
                    height={30}
                />
            </div>
            <div className='alert-content'>
                <h1 className='alert-title'>{title}</h1>
                <p className='alert-subTitle'>{subTitle}</p>
            </div>
        </div>
    )
};

export default ConfirmationAlertBox;