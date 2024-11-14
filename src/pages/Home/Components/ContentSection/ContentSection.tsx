import { FC } from 'react';
import OfficeImage from '../../../../assets/images/shutterstock_696636415.jpg';
import './ContentSection.css';
import { Button } from '../../../../components/Button/Button';

const ContentSection: FC = () => {
    return (
        <section className='content-section'>
            <div className='content-text'>
                <h2 className='content-text-large'>Justo petentium te vix, scripta regione urbanitas</h2>
                <p>
                    Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi
                    aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at
                    vix. Ad vix legere impetus, nam consequat reformidans ut. No sit consul
                    integre voluptatibus, omnium lucilius ne mel. Et ancillae recteque
                    deterruisset sed, ea nec odio optin, ferri assum eum et.
                </p>
                <ul>
                    <li>
                        <p className='list-item-text'>Te pri efficiendi assueverit, id molestie suavitate per</p>
                    </li>
                    <li>
                        <p className='list-item-text'>Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur</p>
                    </li>
                    <li>
                        <p className='list-item-text'>Ut qui dicant copiosae interpretaris</p>
                    </li>
                    <li>
                        <p className='list-item-text'>Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant</p>
                    </li>
                </ul>
                <Button 
                    title='Learn more'
                    variant='secondary'
                />
            </div>
            <div className='content-image'>
                <img
                    src={OfficeImage}
                    width={400}
                    height={310}
                />
            </div>
        </section>
    )
};

export default ContentSection;