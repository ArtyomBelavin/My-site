import "./skillSection.scss";
import skillsOneImg from "../../../assets/images/vectors/skills.svg";

const SkillSection = () => {
  return (
    <section id="skills" className="skill-section">
      <div className="container">
        <div className="skill-section__inner">
          <div className="skill-section__text">
            <h2 className="skill-section__title">
              В настоящее время я ищу свою первую работу на позиции
              <span> Frontend-разработчика</span> в команде, которая ценит
              создание доступных и удобных решений для улучшения жизни людей
            </h2>
          </div>
          <div>
            <img className="skills--img" src={skillsOneImg} alt="Скиллы" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
