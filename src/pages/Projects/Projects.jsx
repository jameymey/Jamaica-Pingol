import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
title: "AlignEDU",
role: "Full-Stack Developer & Project Manager",
year: "2025–2026",
type: "Web Application",

description:
  "A full-stack AI-powered educational platform designed to help Grade 10 students make more informed Senior High School track decisions. AlignEDU combines skills assessment, track matching, personalized skill building, and AI-powered career guidance aligned with the Strengthened SHS Curriculum.",

problem:
  "Grade 10 students may find it difficult to choose a Senior High School track because they may not fully understand how their interests, skills, and current abilities relate to available tracks and future career options. Existing guidance can also be difficult to personalize for each student's individual needs.",

solution:
  "AlignEDU provides a personalized track-matching experience based on students' assessment results, interests, and skills. The platform combines structured educational information with Retrieval-Augmented Generation (RAG) to provide context-aware AI guidance, while its skill builder identifies areas for improvement and recommends learning activities based on each student's needs.",

features: [
  "Personalized SHS Track Matching",
  "Student Skills Assessment",
  "AI-Powered Career Guidance",
  "RAG-Based Recommendations",
  "Personalized Skill Builder",
  "Career and Track Information",
  "Student Dashboard",
  "Admin Dashboard",
  "Authentication and User Management",
],

image: "/projects/alignedu/alignedu.png",

screenshots: [
  "/projects/alignedu/alignedu.png",
  "/projects/alignedu/1.png",
  "/projects/alignedu/2.png",
  "/projects/alignedu/3.png",
  "/projects/alignedu/4.png",
  "/projects/alignedu/5.png",
  "/projects/alignedu/6.png",
  "/projects/alignedu/7.png",
  "/projects/alignedu/8.png",
  "/projects/alignedu/9.png",
  "/projects/alignedu/10.png",
  "/projects/alignedu/11.png",
],

technologies: [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "NeonDB",
  "Clerk",
  "Google Gemini API",
  "RAG",
],

liveUrl: "https://www.alignedu.me",

},

{
title: "VerdePM",
role: "Frontend Developer",
year: "2025–2026",
type: "Web Application",

description:
  "A cloud-based project management platform developed to centralize project workflows, administrative activities, and organizational information. The platform also incorporates AI-powered assistance using Retrieval-Augmented Generation to help users access relevant project information.",

problem:
  "Project information, administrative activities, and organizational data can become difficult to manage when they are distributed across different tools and workflows. Teams may also spend unnecessary time searching through information to find the context they need.",

solution:
  "VerdePM brings project and administrative workflows into a centralized web platform while using AI and RAG to provide context-aware assistance based on available organizational data. As a frontend developer, I focused on translating the system requirements into responsive interfaces and functional user experiences.",

features: [
  "Project Management",
  "Administrative Dashboard",
  "User Authentication",
  "Centralized Project Data",
  "AI-Powered Assistance",
  "Retrieval-Augmented Generation (RAG)",
  "Context-Aware Information Retrieval",
  "Responsive Web Interface",
],

image: "/projects/verdepm/verdepm.png",

screenshots: [
  "/projects/verdepm/verdepm.png",
  "/projects/verdepm/1.png",
  "/projects/verdepm/2.png",
],

technologies: [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Prisma",
  "Google Gemini API",
  "RAG",
],

liveUrl: "https://verdepm-techno.vercel.app",

},

{
title: "Bluey Photobooth",
role: "Frontend Developer",
year: "2026",
type: "Web Application",

description:
  "An interactive browser-based photobooth created for event use, featuring a playful Bluey-inspired interface, camera interaction, photo capture, and responsive layouts. The project focuses on creating a simple and engaging user experience that can be accessed directly through a web browser.",

problem:
  "Event photo experiences often rely on dedicated equipment or software, which can make them less flexible to set up and customize. There is also an opportunity to make the experience more interactive and personalized through a themed digital interface.",

solution:
  "Bluey Photobooth provides a lightweight browser-based experience where users can interact with a themed interface, access their camera, capture photos, and create a personalized photo experience without requiring a traditional desktop photobooth application.",

features: [
  "Interactive Photobooth Interface",
  "Camera Access",
  "Photo Capture",
  "Themed User Interface",
  "Responsive Design",
  "Browser-Based Experience",
],

image: "/projects/photobooth/photobooth.png",

screenshots: [
  "/projects/photobooth/photobooth.png",
  "/projects/photobooth/1.png",
  "/projects/photobooth/2.png",
  "/projects/photobooth/3.png",
],

technologies: [
  "React",
  "JavaScript",
  "Vite",
  "CSS",
],

liveUrl: "https://bluey-photobooth.vercel.app",

},

{
title: "Stellar",
role: "Desktop Application Developer",
year: "2024",
type: "Desktop Application",

description:
  "STELLAR (Streamlined Book Borrowing and Returning System for Library) is a desktop-based library management application designed to digitize and simplify common library transactions. It provides a graphical interface for managing books and recording borrowing and returning activities.",

problem:
  "Manual library transactions can make it difficult to maintain organized records of books, borrowers, and borrowing activities. Searching and updating records manually can also make routine library operations more time-consuming.",

solution:
  "STELLAR provides a centralized desktop application connected to a MySQL database, allowing library records and transactions to be managed digitally. The system supports book management, transaction recording, and searching and retrieving stored library information through a graphical user interface.",

features: [
  "Book Management",
  "Book Availability Tracking",
  "Borrowing and Returning Transactions",
  "Transaction Records",
  "Library Database Management",
  "Search and Record Retrieval",
  "Desktop GUI",
],

image: "/projects/stellar/stellar.png",

screenshots: [
  "/projects/stellar/1.png",
  "/projects/stellar/2.png",
  "/projects/stellar/3.png",
  "/projects/stellar/4.png",
  "/projects/stellar/5.png",
],

technologies: [
  "Python",
  "Tkinter",
  "MySQL",
],

liveUrl: null,

},
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-background py-28">
      <div className="container relative z-10 mx-auto px-6">

        {/*PAGE HEADING */}

        <div>
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
            Projects
          </span>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Things I have{" "}
            <span className="font-serif font-normal italic text-primary">
              built
            </span>
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A collection of projects I've worked on through academic work,
            organizations, and personal development.
          </p>
        </div>

        {/*PROJECT CARDS */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-primary/20
                bg-background
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-lg
                focus:outline-none
                focus:ring-2
                focus:ring-primary/50
              "
            >

              {/* PROJECT IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-64
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.02]
                  "
                />
              </div>

              {/* PROJECT INFORMATION */}
              <div className="p-6">

                <h2 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h2>

                <p className="mt-1 text-sm text-primary">
                  {project.role} · {project.year}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {project.technologies.slice(0, 5).map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-primary/20
                        bg-primary/5
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-primary
                      "
                    >
                      {technology}
                    </span>
                  ))}

                  {project.technologies.length > 5 && (
                    <span
                      className="
                        rounded-full
                        border
                        border-primary/20
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-muted-foreground
                      "
                    >
                      +{project.technologies.length - 5}
                    </span>
                  )}

                </div>

                {/* VIEW DETAILS */}
                <p className="mt-5 text-sm font-medium text-primary">
                  View project details →
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* =========================
            PROJECT MODAL
        ========================== */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;