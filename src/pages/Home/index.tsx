import HeroSection from "./Components/HeroSection/HeroSection";
import ContentSection from "./Components/ContentSection/ContentSection";
import LoginSection from "./Components/LoginSection/LoginSection";
import ParagraphsSection from "./Components/ParagaphsSection/ParagraphsSection";
import Footer from "./Components/Footer/Footer";

export const Home = () => {
    return (
        <>
            <HeroSection />
            <ContentSection />
            <LoginSection />
            <ParagraphsSection />
            <Footer />
        </>
    )
}