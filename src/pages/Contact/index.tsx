import { FC, useState } from 'react';
import ContactImg from '../../assets/images/Img_Contact.png';
import ConfirmationAlertBox from '../../components/ConfirmationAlert/ConfirmationAlertBox';
import { ReactComponent as SubmitIcon } from '../../assets/svg/Icon_Submit.svg';
import './Contact.css';

export const Contact: FC = () => {

    const [showConfirmationBox, setShowConfirmationBox] = useState(false);

    const toggleSetShow = () => {
        setShowConfirmationBox(!showConfirmationBox);
    };

    return (
        <div className='outer-container'>
            <div className='contact-form-container'>
                <h2>Contact us</h2>
                <p className='contact-description'>Populo facillisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.</p>
                {showConfirmationBox ?
                    <ConfirmationAlertBox
                        title='Your message has been sent'
                        subTitle='We will be in contact with you within 24 hours.'
                    /> :
                    <form onSubmit={toggleSetShow}>
                        <div className='group-row'>
                            <div className='form-group'>
                                <label htmlFor='fullName'>Full name</label>
                                <input
                                    type='text'
                                    id='fullName'
                                    name='fullName'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email address</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone'>Phone number 01 - <span className='optional'>optional</span></label>
                            <input type='tel' id='phone' name='phone' />
                        </div>
                        <button type='button' className='add-phone-button'>Add new phone number</button>
                        <div className='form-group'>
                            <label htmlFor='message'>Message</label>
                            <textarea
                                id='message'
                                name='message'
                                maxLength={500}
                            />
                            <small>Maximum text length is 500 characters</small>
                        </div>
                        <div className='checkbox-group'>
                            <input
                                type='checkbox'
                                id='addAddress'
                                name='addAddress'
                            />
                            <label htmlFor='addAddress'>Add address details</label>
                        </div>
                        <div className='address-component'>
                            <div className='group-row'>
                                <div className='form-group'>
                                    <label htmlFor='addressLine1'>Address Line 1</label>
                                    <input
                                        type='text'
                                        id='addressLine1'
                                        name='addressLine1'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='addressLine2'>Address Line 2 -<span className='optional'> optional</span></label>
                                    <input
                                        type='text'
                                        id='addressLine2'
                                        name='addressLine2'
                                    />
                                </div>
                            </div>
                            <div className='group-row'>
                                <div className='form-group'>
                                    <label htmlFor='cityTown'>City/Town</label>
                                    <input
                                        type='text'
                                        id='cityTown'
                                        name='cityTown'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='stateCountry'>State/Country</label>
                                    <input
                                        type='text'
                                        id='stateCountry'
                                        name='stateCountry'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='postcode'>Postcode</label>
                                    <input
                                        type='text'
                                        id='postcode'
                                        name='postcode'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='country'>Country</label>
                                    <input
                                        type='text'
                                        id='country'
                                        name='country'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='submit-button'>
                            <span className='submit-icon'><SubmitIcon color='#ffffff' width={20} height={20} /></span>Submit
                        </button>
                    </form>
                }
            </div>
            <div className='contact-image'>
                <img
                    src={ContactImg}
                    alt='Contact Logo'
                    height={100}
                    width={100}
                />
            </div>
        </div>
    )
};