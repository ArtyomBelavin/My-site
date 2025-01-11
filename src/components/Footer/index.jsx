import "./footer.scss";
import vk from "../../assets/images/vectors/vk.svg";
import tg from "../../assets/images/vectors/tg.svg";
import github from "../../assets/images/vectors/github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__text">
          <h2 className="footer__title">Контакты</h2>

          <div className="footer__contacts">
            <a className="footer__contacts--link" href="#" target="_blank">
              email: artyombelavin@gmail.com
            </a>
            <a
              className="footer__contacts--link"
              href="https://t.me/ArtyomBelavin/"
              target="_blank"
            >
              telegram: @ArtyomBelavin
            </a>
            <a
              className="footer__contacts--link"
              href="https://github.com/ArtyomBelavin"
              target="_blank"
            >
              Github: github.com/ArtyomBelavin
            </a>
          </div>
          <div className="footer__social">
            <a href="https://vk.com/milkdd">
              <img src={vk} alt="Вконтакте" />
            </a>
            <a href="https://t.me/ArtyomBelavin/">
              <img src={tg} alt="Телеграм" />
            </a>
            <a href="https://github.com/ArtyomBelavin">
              <img src={github} alt="Гитхаб" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
