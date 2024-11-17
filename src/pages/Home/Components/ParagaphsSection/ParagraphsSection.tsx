import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import './ParagraphsSection.css';

export const ParagraphsSection = () => {
    return (
        <div className='content-section'>
            <h1>Sed libero justo, lobortis sit amet suscipit non</h1>
            <h3>taria duo ut vis semper abhorreant</h3>
            <div className='columns'>
                <div className='column'>
                    <p className='bold-text'>
                        Pellentesque ac condimentum felis. Suspendisse vel suscipit dolor, nec laoreet nulla.
                        Nam auctor ultricies dapibus. Donec ac interdum dui, quis finibus lectus. Cras in ultrices neque.
                        Curabitur eget turpis iaculis diam congue sagittis a vel ligula.
                        Mauris ut arcu ex. Nullam quis orci ante. Nunc felis massa, posuere non gravida in,
                        commodo in arcu. In feugiat magna non violutpat faucibus. Nam aliquam justo nec aliquam iaculis.
                        Integer laoreet pulvinar elit pulvinar fermentm. Morbi vehicula sodales nunc ac varius. Proin porttitor porttitor libero
                        vel pharetra.
                    </p>
                    <p>
                        Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                    </p>
                </div>
                <div className='column'>
                    <p>
                        Magnis dis parturient montes, nascetur ridiculus mus. Donec finibus nulla
                        quis lorem mollis licinia. Fusce ut arcu ligula. Pellentesque augue ex, pellentesque
                        ut maximus non, eleifend ut lorem. Vestibulum rutrum malesuada turpis, mostie mattis
                        velit maximus ac. Quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi
                        placerat fringilla in sed diam. Suspendisse tristique vel dui nec imperdiet. Cras mattis ligula
                        quis fermentum suscipit. Proin et elementum arcu, sit amet porttitor diam. curabitur euismod, erat
                        vitae tristique violutpat, augue lectus dignisim justo, at faucibus orci est a elit.
                    </p>
                    <p>
                        Sed sed sapien pretium, maximus felis vel, mollis elit. Sed libero justo, lobortis
                        sit amet suscipit non, auctor non libero. Maecenas
                    </p>
                </div>
                <div className='column'>
                    <p>
                        quis nisl eget enim porta blandit a nec sapien. Mauris porttitor
                        lorem ur egestas euismod. Donec molestie tempor nibh, nec venenatis
                        arcu ullamcorper sit amet. Nulla facilisi. Proin cursus neque ut tortor
                        scelerisque, at iaculis nunc ornare. Pellentesque non nunc nulla. Interdum
                        et malesuada fames ac ante ipsum primis in faucibus. Aenean et sodales diam. Lorem, ipsum
                        dolor sit amet consectetur adipisicing elit. Fusce porttitor magna augue, non auctor quam placerat
                        nec. Nulla sem urna, dictum sed nisi in, viverra rutrum neque. Aliquam ipsum nunc, porta a augue nec,
                        fringilla mollis arcu. In a vehicula odio. Praesent vulpupate turpis eleifend egestas ultrices. Proin
                        nec sagittis nibh. Curabitur fringilla felis a porttitor maximus. Vestibulum aliquet
                        ante nex leo malesuada porttitor sit amet et magna.
                    </p>
                </div>
            </div>
            <Link to='/contact' className='contact-button'>
                <Button
                    title='Contact us'
                    variant='secondary'
                />
            </Link>
        </div>
    )
};