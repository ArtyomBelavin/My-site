import "./petProjectsSection.scss";
import petOneImg from "../../../assets/images/pet-1.png";
import petTwoImg from "../../../assets/images/pet-2.png";
import petThreeImg from "../../../assets/images/pet-3.png";
import petFourImg from "../../../assets/images/pet-4.png";
import projectBg from "../../../assets/images/project-bg.png";
import Card from "./Card";

const PetProjectsSection = () => {
  return (
    <section className="pet-project">
      <div className="container">
        <div className="pet-project__inner">
          <h3 className="pet-project__title">Pet-projects</h3>
          <div className="pet-project__projects">
            <Card
              img={petOneImg}
              title="To Do List"
              description="Составляй свои задачи, которые потом можешь удалять или помечать
          выполнеными."
              href="https://github.com/ArtyomBelavin/Todo-List"
            />
            <Card
              img={petTwoImg}
              title="DeepSushi"
              description="Копия ресторана “Якитория” с доставкой еды."
              href="https://github.com/0xWEBMILK/DeepSushi"
            />
            <Card
              img={petThreeImg}
              title="Hotels"
              description="Исследуйте мир вместе с нами — начните планировать своё идеальное путешествие уже сегодня!"
              href="https://github.com/ArtyomBelavin/Hotels"
            />
            <Card
              img={petFourImg}
              title="Healas"
              description="Игровое пространств о для детей и взрослых с VR-очками и консолями PlayStation, Xbox, Nintendo Switch."
              href="https://artyombelavin.github.io/Healas/"
            />

            <img
              className="pet-project__bg--img"
              src={projectBg}
              alt="задний фон"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetProjectsSection;
