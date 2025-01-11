import "./header.scss";
import Logo from "../Logo";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    {
      id: 0,
      text: "Главная",
      href: "#hero",
    },
    {
      id: 1,
      text: "Стек",
      href: "#skills",
    },
    {
      id: 2,
      text: "Работы",
      href: "#jobs",
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <nav className="header__nav">
            <Logo />
            <ul className={isOpen ? "nav__list nav__list--active" : "nav__list"}>
              {navList.map((item) => (
                <li key={item.id} className="list__item">
                  <a
                    className="list__link"
                    href={item.href}
                    onClick={() => setIsOpen(false)} // Закрытие меню при клике на ссылку
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={isOpen ? "burger burger--open" : "burger"}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;