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
        "An AI-powered career guidance platform for Grade 10 students that provides personalized Senior High School track recommendations, skill assessment, and career guidance aligned with the Strengthened SHS Curriculum.",

      problem:
        "Grade 10 students often struggle to choose an appropriate Senior High School track because of limited career guidance, difficulty understanding their strengths and interests, and the lack of personalized recommendations.",

      solution:
        "AlignEDU provides personalized track matching and skill-building recommendations based on students' interests, skills, and assessment results. Its AI-powered guidance uses RAG to provide context-aware career information aligned with the Strengthened SHS Curriculum.",

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
        "Clerk",
        "Gemini API",
        "RAG",
      ],

      liveUrl: "https://www.alignedu.me",
    },

    {
      title: "VerdePM",
      role: "Frontend Developer",
      year: "2025",
      type: "Web Application",

      description:
        "A cloud-based project management platform designed to centralize project workflows, administrative tasks, and organizational data while integrating AI-powered assistance through Retrieval-Augmented Generation.",

      problem:
        "Managing projects, tasks, and organizational information across different workflows can make it difficult for teams to keep information organized and quickly access the data they need.",

      solution:
        "VerdePM centralizes project and administrative information into a single cloud-based platform. Its AI and RAG capabilities allow users to interact with project-related information and receive context-aware responses based on available organizational data.",

      features: [
        "Project Management",
        "Administrative Dashboard",
        "User Authentication",
        "Centralized Project Data",
        "AI-Powered Assistance",
        "Retrieval-Augmented Generation (RAG)",
        "Context-Aware Information Retrieval",
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
        "Gemini API",
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
        "An interactive web-based photobooth application designed for events, featuring a playful Bluey-inspired interface, camera capture, photo composition, and a responsive user experience.",

      problem:
        "Traditional event photobooths can require dedicated software or equipment, while guests may also have limited opportunities to personalize and interact with their photo experience.",

      solution:
        "Bluey Photobooth provides a browser-based interactive experience where users can capture and personalize photos through a fun, themed interface designed for event use.",

      features: [
        "Interactive Photobooth Interface",
        "Photo Capture",
        "Themed User Interface",
        "Responsive Design",
      ],

      image: "/projects/photobooth/photobooth.png",

      screenshots: [
        "/projects/photobooth/photobooth.png",
        "projects/photobooth/1.png",
        "projects/photobooth/2.png",
        "projects/photobooth/3.png",
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
        "STELLAR: Streamlined Book Borrowing and Returning System for Library is a desktop-based library management application designed to streamline book borrowing and returning transactions.",

      problem:
        "Manual library borrowing and returning processes can be time-consuming and make it difficult to efficiently maintain accurate records of books, borrowers, and transactions.",

      solution:
        "STELLAR digitizes the library's borrowing and returning workflow through a desktop application with a graphical user interface connected to a MySQL database, allowing library records and transactions to be managed more efficiently.",

      features: [
        "Book Management",
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