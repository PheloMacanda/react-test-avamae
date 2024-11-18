import {
    HeroSection,
    ContentSection,
    LoginSection,
    ParagraphsSection
} from "./Components";

export const Home = () => {
    return (
        <div id="home-page">
            <HeroSection />
            <ContentSection />
            <LoginSection />
            <ParagraphsSection />
        </div>
    )
}