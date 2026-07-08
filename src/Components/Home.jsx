import { Component } from "react";

function Home() {
  const projects = [
    {
      title: "Development of synthetic polymer based on magnesium-ion conducting solid electrolyte for energy application ",
      Components: " Polyvinyl Alcohol (PVA), Magnesium Nitrate (Mg(NO₃)₂), Solution Casting Technique, Electrochemical Impedance Spectroscopy (EIS), Solid Polymer Electrolyte Development ",
      desc: "Developed a PVA-based solid polymer electrolyte using the solution casting technique for energy storage applications. Magnesium Nitrate (Mg(NO₃)₂) was used as the ionic salt to enhance ion transport within the polymer matrix. The prepared electrolyte film was characterized using Electrochemical Impedance Spectroscopy (EIS) to evaluate its ionic conductivity and electrical properties. This project provided hands-on experience in polymer electrolyte synthesis, thin-film preparation, material characterization, and electrochemical analysis for solid-state energy storage research." ,
    },
    {
      title: "Structural and optical characterization analysis of lanthanum orthoferrite",
      Components: "X-Ray Diffraction (XRD) Data, JANA 2006, Rietveld Refinement MethodScanning Electron Microscope (SEM) Images, UV–Visible (UV–Vis) Spectroscopy Data",
      desc: "Performed structural and optical characterization analysis of Lanthanum Orthoferrite (LaFeO₃) using previously acquired experimental datasets. Refined X-Ray Diffraction (XRD) data using JANA2006 with the Rietveld refinement method to determine the crystal structure and lattice parameters. Analyzed SEM images to study the surface morphology and interpreted UV–Visible spectroscopy data to estimate the optical band gap and evaluate the optical properties of the material. This work focused on characterization, crystallographic refinement, and data interpretation rather than experimental synthesis.",}
  ];

  return (
    <>
      {/* Hero */}
      <section id="home" className="section min-h-screen flex items-center">
        <div className="container">
          <div className="glass-card hero-card">
            <div className="hero-left">
              <p className="badge">👋 Welcome</p>

              <h1>
                Hi, I'm <span className="gradient-text">SRI KANTH.M</span>
              </h1>

              <h3>FRESHER OR JOB SEEKER</h3>

              <p>
                Recent M.Sc. Physics graduate seeking an entry-level opportunity to apply my analytical thinking, problem-solving abilities, and academic knowledge in a professional environment. Eager to learn, contribute, and grow within a reputed organization.
              </p>

              <div className="hero-buttons">
                <button className="primary-btn">Hire Me  </button>
                <a href=" https://drive.google.com/file/d/1trNl8gPRzr1tH3p4NSkUdj-wWkOOEyoG/view" download>
               <button className="secondary-btn">
               Download CV
               </button>
             </a>
              </div>
            </div>

            <div className="hero-right">
              <img
                src="./Dhrogi.png"
                alt="Developer"
              />
            </div>
          </div>
        </div>
      </section>

    {/* About */}
<section id="about" className="section">
  <h2 className="section-title">About Me</h2>

  <div className="glass-card about-modern">

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

     <div className="info-box">
  <span>👤</span>

  <div>
    <h4>Full Name</h4>
    <p>Sri Kanth.M</p>
  </div>
</div>

      <div className="info-box">
        <span>📍</span>
        <div>
          <h4>Location</h4>
          <p>Madurai, Tamil Nadu</p>
        </div>
      </div>

      <div className="info-box">
        <span>🎓</span>
        <div>
          <h4>Education</h4>
          <p>B.Sc Physics</p>
          <p>M.Sc Physics</p>
        </div>
      </div>

      <div className="info-box">
        <span>💼</span>
        <div>
          <h4>Status</h4>
          <p>Fresher</p>
        </div>
      </div>

      <div className="info-box">
        <span>📧</span>
        <div>
          <h4>Email</h4>
          <p>murugansrikanth96@gmail.com</p>
        </div>
      </div>

      <div className="info-box">
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
<section id="skills" className="section">
  <h2 className="section-title">Skills</h2>

  <div className="skills-grid">

    <div className="skill-box">
      <span>💻</span>
      <p>MS Office (Word, Excel, PowerPoint)</p>
    </div>

    <div className="skill-box">
      <span>🧠</span>
      <p>Problem Solving</p>
    </div>

    <div className="skill-box">
      <span>📊</span>
      <p>Data Reporting</p>
    </div>

    <div className="skill-box">
      <span>📈</span>
      <p>Data Analysis</p>
    </div>

    <div className="skill-box">
      <span>📋</span>
      <p>Data Collection</p>
    </div>

    <div className="skill-box">
      <span>🎯</span>
      <p>Decision Making</p>
    </div>

    <div className="skill-box">
      <span>📣</span>
      <p>Digital Marketing</p>
    </div>

    <div className="skill-box">
      <span>🎨</span>
      <p>Poster Designing</p>
    </div>

    <div className="skill-box">
      <span>📱</span>
      <p>Social Media Handling</p>
    </div>

  </div>
</section>

      {/* Contact */}
<section id="contact" className="section">
  <h2 className="section-title">Contact</h2>

  <div className="glass-card contact-info-card">
    <h3>Let's Connect 🤝</h3>

    <p>
      I'm always open to discussing new opportunities, freelance projects,
      collaborations, or simply having a chat about technology.
    </p>

    <div className="contact-list">

      <a href="tel:+919788883776" className="contact-item">
        <span>📞</span>
        <p>+91 97888 83776</p>
      </a>

      <a
        href="https://wa.me/919788883776"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <span>💬</span>
        <p>WhatsApp: +91 97888 83776</p>
      </a>

      <a
        href="mailto:murugansrikanth96@gmail.com"
        className="contact-item"
      >
        <span>📧</span>
        <p>murugansrikanth96@gmail.com</p>
      </a>

      <a
        href="https://maps.google.com/?q=Madurai,Tamil Nadu,India"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
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