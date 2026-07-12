import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 80 && rect.bottom >= 80) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after click
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">SRI KANTH. M</div>

      {/* Hamburger */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`navbar__menu ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#home"
            className={active === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("about");
            }}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("projects");
            }}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("skills");
            }}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;