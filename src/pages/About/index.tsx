import Office from '../../assets/images/shutterstock_696636415.jpg';
import './About.css';

export const About = () => {
    return (
        <section className="about-us" id="about-page">
            <div className="content">
                <h2>About us</h2>
                <p className="highlight">
                    Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar enim sed quam efficitur finibus. Fusce efficitur condimentum orci in hendrerit. Etiam aliquam vitae ante et scelerisque. Pellentesque commodo felis metus, nec congue nisi facilisis quis. Aenean maximus bibendum congue. Nulla pretium elit non facilisis imperdiet. Curabitur auctor lacus turpis, quis fringilla quam faucibus sed. Sed consequat magna enim, eu efficitur purus viverra sit amet. 
                    <a href="/">Praesent varius porta blandit</a> mollis, felis ut convallis convallis.
                </p>
                <p>
                    Quisque non lectus dolor. In id dictum ex. Aenean laoreet velit sem, in dictum orci cursus sit amet. Duis ex est, aliquam quis tincidunt ut, imperdiet a lacus. Vestibulum condimentum vehicula nisl, at vestibulum velit varius sit amet. Cras lacinia facilisis tempus. Fusce nec tempus mauris. Sed vitae diam porta, tincidunt orci ac, maximus enim. Integer sodales sodales turpis, sit amet ultricies arcu lacinia id. Pellentesque volutpat in massa sit amet venenatis. Aliquam erat volutpat. Sed mollis, felis ut convallis convallis, nibh quam fringilla metus, a tempus metus nunc a sem. Morbi ut metus tincidunt, mollis orci quis, efficitur nibh.
                </p>
                <div className="image-container">
                    <img src={Office} alt="Office" />
                </div>
                <p>
                    Integer ullamcorper nisi non ultricies consequat. Mauris at ipsum vel erat fringilla placerat ut eget nibh. Mauris vehicula a lectus dignissim ultrices. Sed congue nec libero sit amet vestibulum. Donec dignissim nec ligula quis placerat. Vivamus porttitor sed urna nec semper. Cras bibendum, est vitae placerat ultricies, diam massa congue magna, quis blandit nibh ante vitae nibh. Aliquam eu lobortis augue, eu vestibulum lacus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a ligula vitae nisl blandit tempus ut sit amet urna. Mauris convallis nisl a interdum semper. Fusce interdum ullamcorper purus sed aliquam. Fusce ut mollis nisi, quis lacinia quam. Donec ligula metus, volutpat a odio euismod, dapibus iaculis arcu. Ut lobortis magna vehicula laoreet feugiat.
                </p>
                <div className="last-section">
                    <h3>Taria duo ut vis semper abhorrent:</h3>
                    <ul>
                        <li>Te pri efficiendi assueverit, id molestie suavitate per</li>
                        <li>Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur</li>
                        <li>Ut qui dicant copiosae interpretaris</li>
                        <li>Ut indoctum patrioque voluptaria duo, ut vis semper abhorrent</li>
                    </ul>
                    <p>
                        Suspendisse vel nisi id odio consequat aliquam quis ac nisl. Vestibulum orci enim, porta viverra egestas laoreet, sollicitudin et orci. Ut id lacinia tortor. Sed et sollicitudin diam, sed facilisis eros. Donec sit amet consequat neque. Donec tristique tincidunt mi sed tincidunt. Suspendisse quis augue eget quam ullamcorper ultricies sed non justo.
                    </p>
                    <p>
                        Maecenas eu mauris felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum suscipit sem at venenatis vulputate. Integer blandit est ut nunc dignissim malesuada. Sed gravida quis turpis ut blandit. In hac habitasse platea dictumst. In facilisis tellus ipsum, vitae finibus eros condimentum a. Sed non iaculis magna. Donec molestie congue tellus, nec lacinia leo finibus non. Mauris ut nibh pharetra, placerat mauris vel, semper sapien. Proin aliquet quis nibh sit amet hendrerit. Ut sit amet mollis ligula. Sed auctor accumsan nisi vel luctus. Curabitur eget nisl hendrerit, tempus purus vel, rhoncus lectus. Nullam diam velit, porta id nisl ac, suscipit sagittis neque. Quisque eu luctus diam.
                    </p>
                </div>
            </div>
        </section>
    )
};