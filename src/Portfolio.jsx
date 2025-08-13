import { useMemo, useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiRedux, SiNextdotjs } from "react-icons/si";

export default function Portfolio() {
  const data = useMemo(() => ({
    name: "Manasvi Vaghela",
    role: "Front-End Developer · Full-Stack Learner",
    location: "Ahmedabad, India",
    email: "vaghelamanasvi1@gmail.com",
    resumeUrl: "/Manasvi_Vaghela_Resume.pdf",
    socials: [
      { icon: <FaGithub />, href: "https://github.com/Manasvi3107", label: "GitHub" },
      { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/manasvivaghela/", label: "LinkedIn" },
    ],
    techStack: [
      { name: "React", icon: <FaReact color="#61DBFB"/> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs color="#3C873A"/> },
      { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8"/> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248"/> },
      { name: "MySQL", icon: <SiMysql color="#4479A1"/> },
      { name: "Redux", icon: <SiRedux color="#764ABC"/> },
    ],
    experience: [
      {
        role: "Full-Stack Intern",
        company: "Cipher Byte",
        period: "May 2025 — Present",
        points: [
          "Building ConnectSphere: JWT auth, protected routes, and dashboard.",
          "Implemented profile edit/upload via Cloudinary/Multer and feed UI in React.",
          "Working on real-time chat with Socket.IO and notifications."
        ],
      },
      {
        role: "BCA Internship — Web Developer",
        company: "Infomax Digital LLP",
        period: "2023 — 2024",
        points: [
          "Developed Trackonize (Laravel): leave workflows, roles/permissions, and reports.",
          "Collaborated with designers and QA to improve UX and reduce UI bugs by 30%."
        ],
      },
    ],
    projects: [
      {
        title: "ConnectSphere – Social App",
        desc: "Full-stack social platform with auth, profiles, posts, likes, comments, and real-time chat (Socket.IO).",
        tags: ["React","Node","MongoDB","Socket.IO"],
        links: { live:"#", code:"https://github.com/Manasvi3107/connectsphere-frontend" },
        image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Trackonize – Employee Tracker",
        desc: "Laravel-based HR module: attendance, leave management, salary generation, and performance snapshot.",
        tags: ["Laravel","PHP","MySQL","Blade"],
        links: { live:"#", code:"https://github.com/vaghelamanasvi1/trackonize" },
        image: "https://images.unsplash.com/photo-1551281044-8ca8fca6a579?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  }), []);

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen text-glassText selection:bg-neonPink/20 scroll-smooth relative overflow-x-hidden bg-animated-gradient">
      <Header name={data.name} resumeUrl={data.resumeUrl} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-20">
        <Hero data={data} />
        <TechStack stack={data.techStack} />
        <ExperienceSection items={data.experience} />
        <ProjectsSection projects={data.projects} />
        <ContactSection data={data} />
      </main>
      {showTopBtn && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 glass-btn"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
      <Footer />
    </div>
  );
}

/* ===== HEADER ===== */
function Header({ name, resumeUrl }) {
  const navLinks = ["About","Tech Stack","Experience","Projects","Contact"];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-glassBg border border-glassBorder">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-bold text-2xl text-neonCyan">{name}</a>
        <nav className="hidden md:flex gap-6 text-sm text-glassText/70">
          {navLinks.map(label => (
            <a key={label} href={`#${label.toLowerCase().replace(/\s+/g,'')}`} className="hover:text-neonYellow transition">{label}</a>
          ))}
        </nav>
        <a href={resumeUrl} download className="glass-btn">Resume</a>
      </div>
    </header>
  );
}

/* ===== HERO ===== */
/* ===== HERO ===== */
function Hero({ data }) {
  const lines = [
    `Hey, I'm Manasvi Vaghela`,
    "Hey, I'm Front-End Developer",
    "Hey, I'm Full-Stack Learner",
    "Futuristic Web Builder",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedText.length < lines[currentLine].length) {
        timeout = setTimeout(() => setDisplayedText(lines[currentLine].slice(0, displayedText.length + 1)), 100);
      } else timeout = setTimeout(() => setTyping(false), 1500);
    } else {
      if (displayedText.length > 0) timeout = setTimeout(() => setDisplayedText(lines[currentLine].slice(0, displayedText.length - 1)), 50);
      else {
        setTyping(true);
        setCurrentLine((currentLine + 1) % lines.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentLine]);

  return (
    <section id="home" className="py-16 relative glass-card overflow-hidden flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 md:gap-16">
      
      {/* Profile Photo */}
      <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-neonCyan shadow-neonGlow mx-auto md:mx-0">
        <img src="/manu.jpg" alt={data.name} className="w-full h-full object-cover"/>
      </div>

      {/* Text Section */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-neonYellow via-neonPink to-neonCyan bg-clip-text text-transparent">
          {displayedText}<span className="blinking-cursor">|</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-glassText/70">{data.role}</p>

        <div className="flex flex-wrap gap-3 mt-4">
          {data.socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="glass-btn flex items-center gap-1 px-3 py-1">
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Neon Blobs */}
      <div className="absolute top-5 left-5 w-20 h-20 bg-neonPink neon-blob opacity-50"></div>
      <div className="absolute top-32 right-20 w-28 h-28 bg-neonYellow neon-blob opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-36 h-36 bg-neonCyan neon-blob opacity-30"></div>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1em;
          color: #00ffff;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}


/* ===== TECH STACK ===== */
/* ===== TECH STACK ===== */
function TechStack({ stack }) {
  return (
    <section id="techstack" className="py-14">
      <h2 className="text-3xl font-bold mb-8 text-neonYellow">Tech Stack</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {stack.map(t => (
          <div 
            key={t.name} 
            className="glass-card flex flex-col items-center gap-2 cursor-pointer transform transition hover:scale-110 p-4"
          >
            <div className="text-5xl">{t.icon}</div> {/* Bigger icon */}
            <span className="text-xl font-semibold">{t.name}</span> {/* Bigger text */}
          </div>
        ))}
      </div>
    </section>
  );
}


/* ===== EXPERIENCE ===== */
function ExperienceSection({ items }) {
  return (
    <section id="experience" className="py-14">
      <h2 className="text-2xl font-bold mb-6 text-neonYellow">Experience</h2>
      <div className="space-y-6">
        {items.map(e => (
          <div key={e.role} className="glass-card">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-neonYellow">{e.role}</h3>
              <span className="text-glassText/70">{e.period}</span>
            </div>
            <p className="text-glassText/70 mb-2">{e.company}</p>
            <ul className="list-disc list-inside text-glassText/60 space-y-1">
              {e.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== PROJECTS ===== */
function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="py-14">
      <h2 className="text-2xl font-bold mb-6 text-neonYellow">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <div key={p.title} className="glass-card overflow-hidden hover:shadow-neonGlow transition-transform transform hover:scale-105">
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover"/>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-neonYellow">{p.title}</h3>
              <p className="text-glassText/70 text-sm">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="px-2 py-1 rounded-full bg-neonYellow text-darkbg text-xs">{t}</span>)}
              </div>
              <div className="flex gap-2 mt-2">
                {p.links.live && <a href={p.links.live} target="_blank" rel="noreferrer" className="glass-btn text-sm text-neonCyan hover:text-neonPink">Live</a>}
                {p.links.code && <a href={p.links.code} target="_blank" rel="noreferrer" className="glass-btn text-sm text-neonCyan hover:text-neonPink">Code</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== CONTACT ===== */
function ContactSection({ data }) {
  return (
    <section id="contact" className="py-14">
      <h2 className="text-2xl font-bold mb-6 text-neonYellow">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card">
          <p>Email: <a href={`mailto:${data.email}`} className="text-neonYellow hover:underline">{data.email}</a></p>
          <p>Location: {data.location}</p>
          <div className="flex gap-2 mt-2">
            {data.socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="glass-btn flex items-center gap-1">{s.icon} {s.label}</a>
            ))}
          </div>
        </div>
        <div className="p-6 text-glassText/70">
          <p>Feel free to reach out for collaborations, internships, freelance work, or just to say hi! 🚀</p>
        </div>
      </div>
    </section>
  );
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer className="py-6 text-center text-glassText/60 text-sm border-t border-glassBorder mt-20">
      © {new Date().getFullYear()} Manasvi Vaghela. All rights reserved. | <span className="text-neonYellow">Futuristic Web Dev</span>
    </footer>
  );
}
