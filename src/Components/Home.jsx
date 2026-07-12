import { useEffect, useRef } from "react";

function Home() {
  const projects = [
    {
      title: "Development of synthetic polymer based on magnesium-ion conducting solid electrolyte for energy application ",
      Components: " Polyvinyl Alcohol (PVA), Magnesium Nitrate (Mg(NO₃)₂), Solution Casting Technique, Electrochemical Impedance Spectroscopy (EIS), Solid Polymer Electrolyte Development ",
      desc: "Developed a PVA-based solid polymer electrolyte using the solution casting technique for energy storage applications. Magnesium Nitrate (Mg(NO₃)₂) was used as the ionic salt to enhance ion transport within the polymer matrix. The prepared electrolyte film was characterized using Electrochemical Impedance Spectroscopy (EIS) to evaluate its ionic conductivity and electrical properties. This project provided hands-on experience in polymer electrolyte synthesis, thin-film preparation, material characterization, and electrochemical analysis for solid-state energy storage research.",
    },
    {
      title: "Structural and optical characterization analysis of lanthanum orthoferrite",
      Components: "X-Ray Diffraction (XRD) Data, JANA 2006, Rietveld Refinement MethodScanning Electron Microscope (SEM) Images, UV–Visible (UV–Vis) Spectroscopy Data",
      desc: "Performed structural and optical characterization analysis of Lanthanum Orthoferrite (LaFeO₃) using previously acquired experimental datasets. Refined X-Ray Diffraction (XRD) data using JANA2006 with the Rietveld refinement method to determine the crystal structure and lattice parameters. Analyzed SEM images to study the surface morphology and interpreted UV–Visible spectroscopy data to estimate the optical band gap and evaluate the optical properties of the material. This work focused on characterization, crystallographic refinement, and data interpretation rather than experimental synthesis.",
    }
  ];

  // Fire click effect removed


  // Helper to trigger fire reveal
  const triggerFireReveal = () => {
    const overlay = document.querySelector('.fire-reveal-overlay');
    if (!overlay) return;
    // Reset classes
    overlay.classList.remove('revealed');
    overlay.classList.add('reveal');
    setTimeout(() => {
      overlay.classList.remove('reveal');
      overlay.classList.add('revealed');
    }, 2000);
  };

  // Fire reveal on component mount (covers page load)
  useEffect(() => {
    triggerFireReveal();
  }, []);

  // Fire reveal on hash navigation to home (or empty hash)
  useEffect(() => {
    const handleHash = () => {
      if (!location.hash || location.hash === '#home') {
        triggerFireReveal();
      }
    };
    window.addEventListener('hashchange', handleHash);
    // also trigger on initial load if hash matches
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Trigger fire reveal when profile picture scrolls into view
  useEffect(() => {
    const profile = document.querySelector('.profile-ring');
    if (!profile) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerFireReveal();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(profile);
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for fade-in animations & scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxEls = document.querySelectorAll('.parallax-el');
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed')) || -0.15;
        // Negate so equations float OPPOSITE to scroll direction
        el.style.transform = `translateY(${scrolled * -speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial layout check

    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) {
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Classic Background handled in App.css body */}

      {/* Animated Fire Embers Rising from Bottom */}
      <div className="fire-embers-bg" aria-hidden="true">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="ember"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 6}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              opacity: 0.15 + Math.random() * 0.35,
            }}
          />
        ))}
      </div>

      {/* Physics equations background removed */}

      {/* Hero */}
      <section id="home" className="section min-h-screen flex items-center">
        <div className="container">
          <div className="glass-card hero-card fade-in visible parallax-el" data-speed="-0.1">
            <div className="hero-left">
              <div>
                <div className="mask-reveal">
                  <p className="badge mask-reveal__inner">👋 Welcome</p>
                </div>
              </div>

              <h1 className="mask-reveal">
                <span className="mask-reveal__inner">
                  Hi, I'm <span className="gradient-text">SRI KANTH.M</span>
                </span>
              </h1>

              <div className="mask-reveal">
                <h3 className="mask-reveal__inner">FRESHER OR JOB SEEKER</h3>
              </div>

              <p className="fade-in-desc">
                Recent M.Sc. Physics graduate seeking an entry-level opportunity to apply my analytical thinking, problem-solving abilities, and academic knowledge in a professional environment. Eager to learn, contribute, and grow within a reputed organization.
              </p>

              <div className="hero-buttons">
                <button className="primary-btn zoom-hover">Hire Me  </button>
                <a href=" https://drive.google.com/file/d/1trNl8gPRzr1tH3p4NSkUdj-wWkOOEyoG/view" download>
                  <button className="secondary-btn zoom-hover">
                    Download CV
                  </button>
                </a>
              </div>
            </div>

            <div className="hero-right">
              <div className="profile-ring parallax-el" data-speed="0.08">
                <div className="fire-reveal-wrapper">
                  <img
                    src="./Dhrogi.png"
                    alt="Developer"
                  />
                  {/* Fire overlay that burns away to reveal the image */}

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section fade-in visible">
        <h2 className="section-title mask-reveal"><span className="mask-reveal__inner">Projects</span></h2>
        <div className="projects-grid flex flex-wrap gap-6 justify-center">
          {projects.map((projects, idx) => (
            <div key={idx} className="glass-card project-card fade-in p-4 w-80">
              <h3 className="font-bold">{projects.title}</h3>
              <p className="mt-2 text-sm">{projects.desc}</p>
              <p className="mt-2 text-sm">Components: {projects.Components}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="section fade-in">
        <h2 className="section-title mask-reveal">
          <span className="mask-reveal__inner">About Me</span>
        </h2>

        <div className="glass-card about-modern zoom-hover">
          <div className="about-top">
            <div className="about-content">
              <h3>SRI KANTH.M</h3>
              <span className="about-role">M.Sc Physics Graduate</span>

              <p>
                Recent M.Sc. Physics graduate with strong analytical thinking and
                problem-solving skills. Passionate about learning new technologies,
                adapting to professional environments, and contributing effectively
                to organizational growth. Seeking an opportunity to start my career
                and continuously enhance my knowledge and skills.
              </p>
            </div>
          </div>

          <div className="about-info">
            <div className="info-box zoom-hover">
              <span>👤</span>
              <div>
                <h4>Full Name</h4>
                <p>Sri Kanth.M</p>
              </div>
            </div>

            <div className="info-box zoom-hover">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Madurai, Tamil Nadu</p>
              </div>
            </div>

            <div className="info-box zoom-hover">
              <span>🎓</span>
              <div>
                <h4>Education</h4>
                <p>B.Sc Physics</p>
                <p>M.Sc Physics</p>
              </div>
            </div>

            <div className="info-box zoom-hover">
              <span>💼</span>
              <div>
                <h4>Status</h4>
                <p>Fresher</p>
              </div>
            </div>

            <div className="info-box zoom-hover">
              <span>📧</span>
              <div>
                <h4>Email</h4>
                <p>murugansrikanth96@gmail.com</p>
              </div>
            </div>

            <div className="info-box zoom-hover">
              <span>🌐</span>
              <div>
                <h4>Languages</h4>
                <p>Tamil, English</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section fade-in">
        <h2 className="section-title mask-reveal">
          <span className="mask-reveal__inner">Skills</span>
        </h2>

        <div className="skills-grid">
          <div className="skill-box zoom-hover">
            <span>💻</span>
            <p>MS Office (Word, Excel, PowerPoint)</p>
          </div>

          <div className="skill-box zoom-hover">
            <span>🧠</span>
            <p>Problem Solving</p>
          </div>

          <div className="skill-box zoom-hover">
            <span>📊</span>
            <p>Data Reporting</p>
          </div>

          <div className="skill-box zoom-hover">
            <span>📈</span>
            <p>Data Analysis</p>
          </div>

          <div className="skill-box zoom-hover">
            <span>📋</span>
            <p>Data Collection</p>
          </div>

          <div className="skill-box zoom-hover">
            <span>🎯</span>
            <p>Decision Making</p>
          </div>

          <div className="skill-box zoom-hover">
            <span>📣</span>
            <p>Digital Marketing</p>
          </div>

          <div className="skill-box zoom-hover">
            <span>🎨</span>
            <p>Poster Designing</p>
          </div>

          <div className="skill-box zoom-hover">
            <span>📱</span>
            <p>Social Media Handling</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section fade-in">
        <h2 className="section-title mask-reveal">
          <span className="mask-reveal__inner">Contact</span>
        </h2>

        <div className="glass-card contact-info-card zoom-hover">
          <h3>Let's Connect 🤝</h3>

          <p>
            I'm always open to discussing new opportunities, freelance projects,
            collaborations, or simply having a chat about technology.
          </p>

          <div className="contact-list">
            <a href="tel:+919788883776" className="contact-item zoom-hover">
              <span>📞</span>
              <p>+91 97888 83776</p>
            </a>

            <a
              href="https://wa.me/919788883776"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item zoom-hover"
            >
              <span>💬</span>
              <p>WhatsApp: +91 97888 83776</p>
            </a>

            <a
              href="mailto:murugansrikanth96@gmail.com"
              className="contact-item zoom-hover"
            >
              <span>📧</span>
              <p>murugansrikanth96@gmail.com</p>
            </a>

            <a
              href="https://maps.google.com/?q=Madurai,Tamil Nadu,India"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item zoom-hover"
            >
              <span>📍</span>
              <p>Madurai, Tamil Nadu, India</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sri Kanth.M. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;