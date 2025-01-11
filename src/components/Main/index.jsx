import HeroSection from "./HeroSection";
import PetProjectSection from "./PetProjectsSection";
import RecommendationSection from "./RecommendationSection";
import SkillSection from "./SkillSection";

const Main = () => {
  return (
    <main>
      <div className="container">
        <HeroSection />
        <PetProjectSection />
        <SkillSection />
        <RecommendationSection />
      </div>
    </main>
  );
};

export default Main;
