/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResearchSpotlight } from './components/ResearchSpotlight';
import { ProjectsGallery } from './components/ProjectsGallery';
import { TechnicalSkills } from './components/TechnicalSkills';
import { TimelineSection } from './components/TimelineSection';
import { ContactAndResume } from './components/ContactAndResume';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { Animated3DBackground } from './components/Animated3DBackground';
import { RESUME_DATA, Project } from './data/resumeData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleSelectProjectId = (projectId: string) => {
    const proj = RESUME_DATA.projects.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Interactive 3D Semiconductor Wave & Particle Lattice Background */}
      <Animated3DBackground />

      {/* Top Bar Navigation */}
      <Navbar
        onContactClick={() => scrollToSection('contact')}
        onResumeClick={() => scrollToSection('contact')}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 w-full flex flex-col">
        {/* Hero Section */}
        <HeroSection
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* About Engineering Background */}
        <AboutSection />

        {/* Research & Publications Spotlight */}
        <ResearchSpotlight onSelectProject={handleSelectProjectId} />

        {/* Featured Projects Gallery */}
        <ProjectsGallery onSelectProject={(p) => setSelectedProject(p)} />

        {/* Technical Skills & EDA Suites */}
        <TechnicalSkills />

        {/* Education, Timeline & 10 Certifications */}
        <TimelineSection />

        {/* Contact & Verified Resume Download */}
        <ContactAndResume onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
