import { FC, useState, FormEvent, useMemo } from 'react';
import ContactImg from '../../assets/images/Img_Contact.png';
import ConfirmationAlertBox from '../../components/ConfirmationAlert/ConfirmationAlertBox';
import Loader from '../../components/Loader/Loader';
import { useSubmitContactUsForm } from '../../services/api';
import { ReactComponent as SubmitIcon } from '../../assets/svg/Icon_Submit.svg';
import { ContactFormInput } from '../../services/types';
import './Contact.css';

export const Contact: FC = () => {

    const [showAddress, setShowAddress] = useState(false);

    const emailErrorMessage = useMemo(() => new Error('Please enter a valid e-mail address'), []);

    const handleCheckboxChange = () => {
        setShowAddress((prevState) => {
            if (prevState === false) {
                setFormData({
                    ...formData,
                    bIncludeAddressDetails: true
                });
            } else {
                setFormData({
                    ...formData,
                    bIncludeAddressDetails: false
                });
            }

            return !prevState;
        });

    };

    const [formData, setFormData] = useState<ContactFormInput>({
        FullName: '',
        EmailAddress: '',
        PhoneNumbers: [''],
        Message: '',
        bIncludeAddressDetails: false,
        AddressDetails: {
            AddressLine1: '',
            AddressLine2: '',
            CityTown: '',
            StateCounty: '',
            Postcode: '',
            Country: ''
        }
    });

    const handleAddPhoneNumber = () => {
        setFormData({
            ...formData,
            PhoneNumbers: [...formData.PhoneNumbers, '']
        });
    };

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const {
        submitForm,
        isLoading: isSubmitting,
        responseData
    } = useSubmitContactUsForm(formData);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.FullName) newErrors.FullName = 'Full Name is required';
        if (!formData.EmailAddress || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.EmailAddress)) {
            newErrors.EmailAddress = 'Valid email address is required';
        }

        if (!formData.Message) newErrors.Message = 'Message is required';

        if (formData.bIncludeAddressDetails && showAddress) {

            if (!formData.AddressDetails.AddressLine1) newErrors.AddressLine1 = 'Address Line 1 is required';

            if (!formData.AddressDetails.CityTown) newErrors.CityTown = 'City/Town is required';

            if (!formData.AddressDetails.Country) newErrors.Country = 'Country is required';

            if (!formData.AddressDetails.Postcode || !/^([A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2})$/.test(formData.AddressDetails.Postcode)) {
                newErrors.Postcode = 'Valid UK postal code is required (e.g., W1A 1AA)';
            }

        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            AddressDetails: {
                ...formData.AddressDetails,
                [name]: value
            }
        });
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newPhoneNumbers = [...formData.PhoneNumbers];
        newPhoneNumbers[index] = e.target.value;
        setFormData({
            ...formData,
            PhoneNumbers: newPhoneNumbers
        });
    };

    const resetForm = () => {
        setFormData({
            FullName: '',
            EmailAddress: '',
            PhoneNumbers: [''],
            Message: '',
            bIncludeAddressDetails: false,
            AddressDetails: {
                AddressLine1: '',
                AddressLine2: '',
                CityTown: '',
                StateCounty: '',
                Postcode: '',
                Country: ''
            }
        });
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        await submitForm(formData);

        resetForm();

    };

    return (
        <div className='outer-container' id='contact-page'>
            <div className='contact-form-container'>
                <h2>Contact us</h2>
                <p className='contact-description'>Populo facillisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.</p>
                {isSubmitting ?
                    <div className='loader-style'>
                        <Loader
                            size={80}
                            variant='secondary'
                            loaderText='Please wait while we submit your details..'
                        />
                    </div> :
                    (responseData ?
                        ((responseData.Status === "1" && responseData.Errors.length === 0) ?
                            <ConfirmationAlertBox
                                title='Your message has been sent'
                                subTitle='We will be in contact with you within 24 hours.'
                            /> :
                            (responseData.Errors?.map((errorResponseMessage, index) =>
                                <div className='contact-form-error' key={index}>{errorResponseMessage.FieldName + " " + errorResponseMessage.MessageCode}</div>
                            ))
                        )
                        :
                        <form onSubmit={onSubmit}>
                            <div className='group-row'>
                                <div className='form-group'>
                                    <label htmlFor='fullName'>Full name</label>
                                    <input
                                        type='text'
                                        id='FullName'
                                        name='FullName'
                                        value={formData.FullName}
                                        onChange={handleChange}
                                    />
                                    {errors.FullName && <p className="contact-form-error">{errors.FullName}</p>}
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email address</label>
                                    <input
                                        type='email'
                                        id='EmailAddress'
                                        name='EmailAddress'
                                        value={formData.EmailAddress}
                                        onChange={handleChange}
                                    />
                                    {errors.EmailAddress && <p className="contact-form-error">{emailErrorMessage.message}</p>}
                                </div>
                            </div>
                            {formData.PhoneNumbers.map((inputValue, index) => (
                                <div className='form-group' key={index}>
                                    <label htmlFor={`PhoneNumbers-${index}`}>Phone number 0{index + 1} - <span className='optional'>optional</span></label>
                                    <input
                                        type='tel'
                                        id={`PhoneNumber-${index}`}
                                        name={`PhoneNumber-${index}`}
                                        value={inputValue}
                                        onChange={(e) => handlePhoneChange(e, index)}
                                    />
                                </div>
                            ))}
                            <button type='button' className='add-phone-button' onClick={handleAddPhoneNumber}>Add new phone number</button>
                            <div className='form-group'>
                                <div className='message-box'>
                                    <label htmlFor='message'>Message</label>
                                    <small>Maximum text length is 500 characters</small>
                                </div>
                                <textarea
                                    id='Message'
                                    name='Message'
                                    maxLength={500}
                                    value={formData.Message}
                                    onChange={handleChange}
                                />
                                {errors.Message && <p className="contact-form-error">{errors.Message}</p>}
                            </div>
                            <div className='checkbox-group'>
                                <div className='check-container'
                                    onClick={handleCheckboxChange}
                                >
                                    <div className={showAddress ? 'check-inside' : ''} />
                                </div>
                                <label htmlFor='addAddress' className='add-address-label'>Add address details</label>
                            </div>
                            {showAddress &&
                                <div className='address-component'>
                                    <div className='address-line-group'>
                                        <div className='address-form-group'>
                                            <label htmlFor='AddressLine1'>Address Line 1</label>
                                            <input
                                                type='text'
                                                id='AddressLine1'
                                                name='AddressLine1'
                                                value={formData.AddressDetails?.AddressLine1 || ''}
                                                onChange={handleAddressChange}
                                            />
                                            {errors.AddressLine1 && <p className="contact-form-error">{errors.AddressLine1}</p>}
                                        </div>
                                        <div className='address-form-group'>
                                            <label htmlFor='addressLine2'>Address Line 2 -<span className='optional'> optional</span></label>
                                            <input
                                                type='text'
                                                id='AddressLine2'
                                                name='AddressLine2'
                                                value={formData.AddressDetails?.AddressLine2 || ''}
                                                onChange={handleAddressChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='address-form-row-container'>
                                        <div className='address-form-row'>
                                            <div className='address-form-group'>
                                                <label htmlFor='cityTown'>City/Town</label>
                                                <input
                                                    type='text'
                                                    id='CityTown'
                                                    name='CityTown'
                                                    value={formData.AddressDetails?.CityTown || ''}
                                                    onChange={handleAddressChange}
                                                />
                                                {errors.CityTown && <p className="contact-form-error">{errors.CityTown}</p>}
                                            </div>
                                            <div className='address-form-group'>
                                                <label htmlFor='stateCountry'>State/Country</label>
                                                <input
                                                    type='text'
                                                    id='StateCounty'
                                                    name='StateCounty'
                                                    value={formData.AddressDetails?.StateCounty || ''}
                                                    onChange={handleAddressChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='address-form-row'>
                                            <div className='address-form-group'>
                                                <label htmlFor='postcode'>Postcode</label>
                                                <input
                                                    type='text'
                                                    id='Postcode'
                                                    name='Postcode'
                                                    value={formData.AddressDetails?.Postcode || ''}
                                                    onChange={handleAddressChange}
                                                />
                                                {errors.Postcode && <p className="contact-form-error">{errors.Postcode}</p>}
                                            </div>
                                            <div className='address-form-group'>
                                                <label htmlFor='country'>Country</label>
                                                <input
                                                    type='text'
                                                    id='Country'
                                                    name='Country'
                                                    value={formData.AddressDetails?.Country || ''}
                                                    onChange={handleAddressChange}
                                                />
                                                {errors.Country && <p className="contact-form-error">{errors.Country}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            <button type='submit' className='submit-button'>
                                <span className='submit-icon'><SubmitIcon color='#ffffff' width={20} height={20} /></span>Submit
                            </button>
                        </form>)
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