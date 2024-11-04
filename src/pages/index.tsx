import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Github, Facebook, Instagram, Globe, Linkedin, Mail, Code2, Briefcase, User } from 'lucide-react';

import styles from './index.module.css';

const socialLinks = [
  { icon: <Github />, label: "GitHub", link: "https://github.com/spnarkhede" },
  { icon: <Linkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/spnarkhede/" },
  { icon: <Facebook />, label: "Facebook", link: "https://www.facebook.com/spnarkhede" },
  { icon: <Instagram />, label: "Instagram", link: "https://www.instagram.com/lets.track.life/" },
  { icon: <Globe />, label: "Guide Book", link: "https://guide-book.vercel.app/" },
];

const whoAmI = [
  "🚀 5+ years of experience in full-stack development",
  "💡 Passionate about creating intuitive user experiences",
  "🎓 Master's in Computer Science",
  "🌟 Led multiple successful projects from concept to deployment",
  "🤝 Strong believer in team collaboration and agile methodologies"
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Built a full-stack e-commerce solution with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    tech: ["Vue.js", "Python", "PostgreSQL", "Docker"]
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses",
    tech: ["React", "OpenAI", "WebSocket", "Redis"]
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio creation tool for developers",
    tech: ["Next.js", "Tailwind", "Prisma", "Vercel"]
  }
];

const skills = [
  {
    category: "Frontend",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"]
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"]
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Figma", "Postman", "Jest"]
  }
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.profileSection}>
            <div className={styles.profilePicture}>
              <img
                src={require("./image/profilesquare.png").default}
                alt="Profile"
              />
            </div>
            <div className={styles.profileInfo}>
              <Heading as="h1" className={styles.title}>
                {siteConfig.title}
              </Heading>
              <p className={styles.subtitle}>{siteConfig.tagline}</p>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    to={social.link}
                    className={styles.socialLink}>
                    {social.icon}
                    <span>{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="intro">
              Read About Me ⏱️
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <div className={styles.mainContent}>
      {/* Who Am I Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <User />
          <Heading as="h2">Who Am I</Heading>
        </div>
        <div className={styles.whoAmIGrid}>
          {whoAmI.map((point, index) => (
            <div key={index} className={styles.infoCard}>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Code2 />
          <Heading as="h2">Projects</Heading>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Briefcase />
          <Heading as="h2">Skills</Heading>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((skillSet, index) => (
            <div key={index} className={styles.skillCard}>
              <h3>{skillSet.category}</h3>
              <div className={styles.skillsTags}>
                {skillSet.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Mail />
          <Heading as="h2">Get in Touch</Heading>
        </div>
        <div className={styles.contactFormContainer}>
          <form className={styles.contactForm}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Subject</label>
              <input type="text" placeholder="Project Inquiry" />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <MainContent />
      </main>
    </Layout>
  );
}