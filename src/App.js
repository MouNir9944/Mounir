import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    whatIDo: true,
    currentRoles: false,
    education: false,
    projects: false,
    contact: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <header>
        <h1 className="greeting">👋 Hi, I'm Mounir</h1>
        <button
          className="mode-toggle"
          onClick={() => setDarkMode((dm) => !dm)}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main>
        <Section
          title="🛠️ What I Do"
          isOpen={expandedSections.whatIDo}
          onToggle={() => toggleSection("whatIDo")}
          content={
            <ul>
              <li>🔌 Embedded Systems Development – STM32, ESP32, Arduino, Raspberry Pi, Embedded Linux</li>
              <li>🌐 IoT Solutions Design – SIM800L/SIM900/SIM7000G, Quectel EG95-EX, MQTT, Modbus</li>
              <li>💻 Programming Languages – C, C++, Python, Java, Shell scripting</li>
              <li>⚙️ Tools & Frameworks – Keil, STM32CubeIDE, PlatformIO, ESP-IDF, FreeRTOS, NI LabVIEW, Git</li>
              <li>🧩 PCB & Hardware Design – CAO tools, Altium Designer, SolidWorks</li>
            </ul>
          }
        />

        <Section
          title="👨‍💼 Current Roles"
          isOpen={expandedSections.currentRoles}
          onToggle={() => toggleSection("currentRoles")}
          content={
            <ul>
              <li>🔧 Embedded Systems Engineer at SFM Telecom – SFM Technologies</li>
              <li>🧪 Electronic CAO Engineer at SERMA International</li>
            </ul>
          }
        />

        <Section
          title="🎓 Education & Certifications"
          isOpen={expandedSections.education}
          onToggle={() => toggleSection("education")}
          content={
            <ul>
              <li>🎓 Mechatronics, Robotics & Automation Engineering – ESPRIT</li>
              <li>🏅 Certified in: C Programming for Embedded Applications, SolidWorks Design, Scrum Fundamentals</li>
            </ul>
          }
        />

        <Section
          title="🚀 What I'm Working On"
          isOpen={expandedSections.projects}
          onToggle={() => toggleSection("projects")}
          content={
            <ul>
              <li>🌡️ Predictive maintenance systems using IoT & AI</li>
              <li>📶 Smart industrial communication modules</li>
              <li>🔬 Custom embedded boards and PCB design projects</li>
            </ul>
          }
        />

        <Section
          title="📫 Get in Touch"
          isOpen={expandedSections.contact}
          onToggle={() => toggleSection("contact")}
          content={
            <ul>
              <li>
                📧{" "}
                <a href="mailto:mounir.mmahroug@gmail.com" target="_blank" rel="noopener noreferrer">
                  mounir.mmahroug@gmail.com
                </a>
              </li>
              <li>
                💼{" "}
                <a
                  href="https://www.linkedin.com/in/mounirmahroug"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          }
        />
      </main>
    </div>
  );
}

function Section({ title, isOpen, onToggle, content }) {
  return (
    <section className="section">
      <h2 className="section-title" onClick={onToggle}>
        {title} <span className="toggle-icon">{isOpen ? "▲" : "▼"}</span>
      </h2>
      {isOpen && <div className="section-content">{content}</div>}
    </section>
  );
}
