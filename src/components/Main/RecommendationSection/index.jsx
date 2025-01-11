import "./recommendationSection.scss";
import healasTwoImg from "../../../assets/images/healas-2.png";
import healasThreeImg from "../../../assets/images/healas-3.png";
import todoOneImg from "../../../assets/images/todo-1.png";
import todoTwoImg from "../../../assets/images/todo-2.png";

const RecommendationSection = () => {
  return (
    <section id="jobs" className="recommendation-section">
      <div className="container">
        <div className="recommendation-section__inner">
          <div className="recommendation-section__healas">
            <div className="healas__text">
              <h3 className="recommendation__title">Рекомендуемый проект</h3>
              <a
                href=" https://artyombelavin.github.io/Healas/"
                target="_blank"
                className="healas__title"
              >
                Healas
              </a>
              <div className="healas__description__wrapper">
                <p className="healas__description">
                  Сайт выполнен на чистом HTML/CSS. Вы можете ознакомиться с
                  моей версткой. Также на сайте есть анимации и адаптивный
                  дизайн
                </p>
              </div>
            </div>

            <img className="healas__bg" src={healasThreeImg} alt="задний-фон" />
            <div className="healas__images__main--img">
              <img src={healasTwoImg} alt="Healas" />
            </div>
          </div>

          <div className="recommendation-section__todo">
            <div className="todo__text">
              <h3 className="recommendation__title">Рекомендуемый проект</h3>
              <a
                href="https://github.com/ArtyomBelavin/Todo-List"
                target="_blank"
                className="todo__title"
              >
                To Do List
              </a>
              <div className="todo__description__wrapper">
                <p className="todo__description">
                  Сайт выполнен на React.JS с использованием Vite, SCSS-modules.
                  В качестве стейт-менеджера был выбран Zustand
                </p>
              </div>
            </div>
            <img className="todo__bg" src={todoOneImg} alt="задний-фон" />
            <div className="todo__images__main--img">
              <img src={todoTwoImg} alt="Todo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
