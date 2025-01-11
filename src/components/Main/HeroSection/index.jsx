import "./heroSection.scss";
import MeImg from "../../../assets/images/Me.png";
import arrow from "../../../assets/images/vectors/arrow.svg";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <div className="hero__me">
          <div className="hero__name">
            <img className="hero__name--img" src={arrow} alt="Стрелка" />
            <p className="hero__name__title">
              Hello! I Am <span>Artyom Belavin</span>
            </p>
          </div>

          <div className="hero__bg__images"></div>
          <img src={MeImg} alt="я" />
          <p className="hero__title">Fronted-developer</p>
        </div>
        <div className="hero__info">
          <h3 className="hero__info__title">
            Фронтенд-разработчик, <br />
            создаю качественные и интуитивно понятные пользовательские
            интерфейсы
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
