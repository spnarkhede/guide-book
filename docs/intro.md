---
sidebar_label: 'Introduction'
sidebar_position: 1
last_update:
  date: "2024-11-04"
  author: "spnarkhede"
---
# Introduction 



import { Github, Linkedin, Mail } from 'lucide-react';

<div className="about-container">
  <div className="hero-section">
    <img className="profile-picture" src={require('../static/img/profilesquare.png').default} alt="profile"/>
    
    <div className="profile-info">
      <h1>Shubham Narkhede</h1>
      <h2>DevOps Engineer @ Robert Bosch GmbH</h2>
      
      <div className="social-links">
        <a href="https://github.com/spnarkhede" className="social-link">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/spnarkhede" className="social-link">
          <Linkedin size={20} />
        </a>
        <a href="mailto:shubhampnarkhede@gmail.com" className="social-link">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </div>

  <div className="content-section">
    <div className="about-card">
      <p>
        My name is Shubham Narkhede. I currently work for Robert Bosch GmbH as a DevOps Engineer. I prefer more frontend or DevOps work, but I consider myself to be a full-stack developer. If you have ever heard the phrase <b>"A curious mind, constantly seeking knowledge and applying it to real-world challenges.,"</b> I think that phrase describes me pretty well. I like to learn new things and get my hands dirty with a little bit of everything if possible. While some people like to hyperfocus on one aspect of computing, I like to take a broader vision. I like to have a decent understanding of everything so I have a breadth of knowledge. This helps me understand the larger flow. If you understand all the little things, then the bigger picture becomes clear. I believe this is what has made me exceedingly good at debugging and solving problems over the years.
      </p>
    </div>

    <div className="about-card">
      <p>
      I have a personal interest in product designing and cloud technologies. I have created various applications from scratch with Brainstorming, UI/UX designing, Prototyping and wireframing. Lately, I have just been trying to apply neural networks to various tasks and experimenting with different architectures. I have even made a neural network visualization program. I hope to continue developing my knowledge and start implementing some of my own neural network algorithms I have brainstormed over the past few years. Long term, I would like to work on autonomous vehicles or autonomous manufacturing robots.
      </p>
    </div>

    <div className="about-card">
      <p>
        Aside from deep learning projects, I dabble in a little bit of everything. This portfolio site showcases a fraction of the projects I have done over the years. I have written my own shell in C. I have written my own assembler and accompanying simulator for that assembler. I have written my own digit recognition canvas application. I have written a data cache simulator. I have created personal automation tools for my desktop. I have written ability trackers for video games. You name it, and I have probably attempted to program it or read about it.
      </p>
    </div>
  </div>
</div>