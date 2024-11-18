import {
    HeroSection,
    ContentSection,
    LoginSection,
    ParagraphsSection,
    Footer
} from "./Components";

export const Home = () => {
    return (
        <div id="home-page">
            <HeroSection />
            <ContentSection />
            <LoginSection />
            <ParagraphsSection />
            <Footer />
        </div>
    )
}