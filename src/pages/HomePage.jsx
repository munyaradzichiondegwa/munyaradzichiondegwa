// src/pages/HomePage.jsx (Full Updated File)

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer'; // New Import for Footer

export default function HomePage() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <Navbar dark={dark} setDark={setDark} />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-6 py-20 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-4">Munyaradzi Chiondegwa</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Software Development Student • Full-Stack Web Developer • Financial Automation Enthusiast
          </p>
          <p className="max-w-3xl mx-auto mb-8">
            BYU–Idaho Software Development student from Harare, Zimbabwe, with an MBA and accounting background. Passionate about building full‑stack web applications, automation systems, and inclusive technology solutions, particularly for the Deaf community.
          </p>
          <p className="max-w-3xl mx-auto mb-8">
            Building scalable software systems, enterprise platforms, and automation solutions for African businesses and global markets.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <a href="https://github.com/munyaradzichiondegwa" className="btn-outline">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/munyaradzi-chiondegwa" className="btn-outline">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="/Munyaradzi Chiondegwa.pdf" download className="btn">
              <Download size={18} /> Resume
            </a>
          </div>
        </motion.section>

        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="section-title">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["HTML","CSS","JavaScript","React","Node.js","Express","MongoDB","Python","SQL","Power BI","SAP","Docker"].map(skill => (
              <motion.div key={skill} whileHover={{ scale: 1.05 }} className="card">
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="section-title">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Vision 2030 Platform" 
              desc="Full‑stack web platform tracking Zimbabwe’s national development goals with KPI dashboards and progress trackers." 
              live="https://vision-2030.netlify.app/" 
              repo="https://github.com/munyaradzichiondegwa/vision-2030-platform" 
            />
            <ProjectCard 
              title="Chicken Candy Website" 
              desc="MERN stack e‑commerce website for online meal ordering, demonstrating full-stack development skills." 
              live="https://chicken-candy-website.onrender.com/" 
              repo="https://github.com/munyaradzichiondegwa/chicken-candy-website" 
            />
            <ProjectCard 
              title="Digital Bookstore API" 
              desc="RESTful API with Swagger documentation for online bookstore services, including authentication and structured routes." 
              live="https://digital-bookstore-api.onrender.com/api-docs/" 
              repo="https://github.com/munyaradzichiondegwa/digital-bookstore-api" 
            />
            <ProjectCard 
              title="Revival Apostolic Faith Mission Website" 
              desc="Community-focused church website showcasing services, programs, events, and announcements." 
              live="https://revival-apostolic-faith-mission.netlify.app/" 
              repo="https://github.com/munyaradzichiondegwa/revival-apostolic-faith-mission" 
            />
            <ProjectCard 
              title="Garden Community Hub Platform" 
              desc="Community engagement and information platform for local development initiatives, promoting sustainable living and collaborative gardening." 
              live="https://munyaradzichiondegwa.github.io/wdd131/project/" 
              repo="https://github.com/munyaradzichiondegwa/wdd131/tree/main/project" 
            />
            <ProjectCard 
              title="My Finance Tracker" 
              desc="Client-side web application for personal finance management using HTML, CSS, JavaScript, and Vite to track accounts, transactions, budgets, and savings goals." 
              live="https://munyaradzichiondegwa.github.io/my-finance-tracker/"
              repo="https://github.com/munyaradzichiondegwa/my-finance-tracker" 
            />
            <ProjectCard 
              title="Harare Chamber of Commerce" 
              desc="Dynamic website for the Harare Chamber of Commerce, featuring weather data integration, events, and member information." 
              live="https://munyaradzichiondegwa.github.io/wdd231/chamber/" 
              repo="https://github.com/munyaradzichiondegwa/wdd231/tree/main/chamber" 
            />
            <ProjectCard 
              title="Tugwi White Water Rafting" 
              desc="Responsive website for a white water rafting company, showcasing core HTML and CSS techniques with engaging visuals and trip information." 
              live="https://munyaradzichiondegwa.github.io/wdd130/wwr/"
              repo="https://github.com/munyaradzichiondegwa/wdd130/tree/main/wwr" 
            />
            <ProjectCard 
              title="EduSync API (Contributor)" 
              desc="Collaborative RESTful API for managing a school's student information system using Node.js, Express, MongoDB, and Swagger." 
              live="https://edusync-api-7p52.onrender.com/" 
              repo="https://github.com/sylamarie/eduSync_api" 
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="section-title">Contact</h2>
          <ContactForm />
        </section>

        {/* Footer Integration */}
        <Footer />
      </div>
    </div>
  );
}