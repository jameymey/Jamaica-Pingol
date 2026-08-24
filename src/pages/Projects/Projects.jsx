import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AlignEDU",
      role: "Full-Stack Developer & Project Manager",
      year: "2025–2026",

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
        "Authentication and User Management",
      ],

      image: "/projects/alignedu.png",

      screenshots: [],

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

      liveUrl: null,
    },

    {
      title: "VerdePM",
      role: "Frontend Developer",
      year: "2025",

      description:
        "A cloud-based project management platform designed to centralize project workflows, administrative tasks, and organizational data while integrating AI-powered assistance through Retrieval-Augmented Generation.",

      problem:
        "Managing projects, tasks, and organizational information across different workflows can make it difficult for teams to keep information organized and quickly access the data they need.",

      solution:
        "VerdePM centralizes project and administrative information into a single cloud-based platform. Its AI and RAG capabilities allow users to interact with project-related information and receive context-aware responses based on available organizational data.",

      features: [
        "Project Management",
        "Task Management",
        "Administrative Dashboard",
        "User Authentication",
        "Role-Based Access",
        "Centralized Project Data",
        "AI-Powered Assistance",
        "Retrieval-Augmented Generation (RAG)",
        "Context-Aware Information Retrieval",
      ],

      image: "/projects/verdepm.png",

      screenshots: [],

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

      liveUrl: null,
    },

    {
      title: "Bluey Photobooth",
      role: "Frontend Developer",
      year: "2026",

      description:
        "An interactive web-based photobooth application designed for events, featuring a playful Bluey-inspired interface and an engaging photo capture experience.",

      problem:
        "Traditional event photobooths can require dedicated software or equipment, while guests may also have limited opportunities to personalize and interact with their photo experience.",

      solution:
        "Bluey Photobooth provides a browser-based interactive experience where users can capture and personalize photos through a fun, themed interface designed for event use.",

      features: [
        "Interactive Photobooth Interface",
        "Photo Capture",
        "Photo Preview",
        "Themed User Interface",
        "Responsive Design",
        "Event-Friendly User Flow",
      ],

      image: "/projects/photobooth.png",

      screenshots: [],

      technologies: [
        "React",
        "JavaScript",
        "Vite",
        "CSS",
      ],

      liveUrl: null,
    },

    {
      title: "Stellar",
      role: "Desktop Application Developer",
      year: "2024",

      description:
        "STELLAR: Streamlined Book Borrowing and Returning System for Library is a desktop-based library management application designed to streamline book borrowing and returning transactions.",

      problem:
        "Manual library borrowing and returning processes can be time-consuming and make it difficult to efficiently maintain accurate records of books, borrowers, and transactions.",

      solution:
        "STELLAR digitizes the library's borrowing and returning workflow through a desktop application with a graphical user interface connected to a MySQL database, allowing library records and transactions to be managed more efficiently.",

      features: [
        "Book Management",
        "Borrower Management",
        "Book Borrowing",
        "Book Returning",
        "Transaction Records",
        "Library Database Management",
        "Search and Record Retrieval",
        "Desktop GUI",
      ],

      image: "/projects/stellar.png",

      screenshots: [],

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

        {/* Heading */}
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

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A collection of projects I've worked on through academic work, organizations, and personal development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedProject(project);
                }
              }}
              className="cursor-pointer overflow-hidden rounded-2xl border border-primary/20 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              {/* Project Information */}
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

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {technology}
                    </span>
                  ))}

                  {project.technologies.length > 5 && (
                    <span className="rounded-full border border-primary/20 px-3 py-1 text-xs font-medium text-muted-foreground">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                <p className="mt-5 text-sm font-medium text-primary">
                  View project →
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;