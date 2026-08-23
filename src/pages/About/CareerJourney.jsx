export const CareerJourney = () => {
  const education = [
    {
      date: "2022-2026",
      title: "Bachelor of Science in Information Technology",
      organization: "Polytechnic University of the Philippines - Sta. Mesa",
      description:
        "Built a strong foundation in software development, system analysis, databases, and project management through projects and collaborative work. Graduated Magna Cum Laude.",
    },
    {
      date: "2020-2022",
      title: "Senior High School",
      organization: "Cainta Catholic College",
      description:
        "Developed my early interest in technology through the STEM strand while building foundational skills in programming, problem-solving, and teamwork. Graduated with High Honors.",
    },
  ];

  const experience = [
    {
      date: "Feb – May 2026",
      title: "System Analyst Intern",
      organization: "Unilab, Inc.",
      description:
        "Worked on UAT, bug tracking, and enhancement reviews for internal business systems. Created test cases, functional documentation, trackers, and wireframes while working with developers to validate fixes and gather requirements.",
    },
    {
      date: "Apr - Aug 2026 ",
      title: "Creative Virtual Assistant",
      organization: "Independent Client",
      description:
        "Create posters, pubmats, and short-form content for social media and marketing. I also handle captions, copywriting, and supporting documents for day-to-day client needs.",
    },
    {
      date: "2025 – 2026",
      title: "Content Creation Co-Lead",
      organization: "Cisco NetConnect PUP - Manila",
      description:
        "Co-led the planning and production of digital content aligned with Cisco's branding, working with the team to create engaging content for student audiences.",
    },
    {
      date: "2023 – 2026",
      title: "Member, Cybersecurity Skill Builder Dept.",
      organization: "AWS Cloud Club - PUP Manila",
      description:
        "Participated in workshops and training focused on cloud computing, cybersecurity, and security fundamentals while continuously building my technical knowledge.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-8 animate-fade-in">

          {/* SECTION LABEL */}
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
            Career Journey
          </span>

          {/* TITLE */}
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Experience that{" "}
            <span className="font-serif font-normal italic text-primary">
              speaks volumes
            </span>
          </h2>

          {/* INTRO */}
          <p className="mt-4 text-lg leading-relaxed text-justify text-muted-foreground">
            A timeline of my journey from exploring technology as a student to
            building experience in the IT field through projects, collaboration,
            and continuous learning.
          </p>

          {/* EDUCATION */}
          <h3 className="mb-6 mt-12 text-2xl text-center font-serif font-normal italic text-primary">
            Education
          </h3>

          <div className="animate-fade-in space-y-8 rounded-2xl border border-primary/20 bg-background p-4 delay-200 sm:p-8">
            {education.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-[70px_16px_minmax(0,1fr)] gap-3 sm:grid-cols-[120px_24px_minmax(0,1fr)] sm:gap-6"
              >
                {/* DATE */}
                <div className="text-sm font-medium text-muted-foreground">
                  {item.date}
                </div>

                {/* TIMELINE */}
                <div className="relative flex justify-center">
                  {index < education.length - 1 && (
                    <div className="absolute left-1/2 top-3 h-[calc(100%+2rem)] w-px bg-primary/30" />
                  )}

                  <div className="relative h-3 w-3 rounded-full bg-primary" />
                </div>

                {/* CONTENT */}
                <div className="min-w-0">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mb-2 text-sm font-serif font-normal italic text-primary">
                    {item.organization}
                  </p>

                  <p className="text-sm leading-relaxed text-justify text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <h3 className="mb-6 mt-12 text-2xl text-center font-serif font-normal italic text-primary">
            Experience
          </h3>

          <div className="animate-fade-in space-y-8 rounded-2xl border border-primary/20 bg-background p-4 delay-200 sm:p-8">
            {experience.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-[70px_16px_minmax(0,1fr)] gap-3 sm:grid-cols-[120px_24px_minmax(0,1fr)] sm:gap-6"
              >
                {/* DATE */}
                <div className="text-sm font-medium text-muted-foreground">
                  {item.date}
                </div>

                {/* TIMELINE */}
                <div className="relative flex justify-center">
                  {index < experience.length - 1 && (
                    <div className="absolute left-1/2 top-3 h-[calc(100%+2rem)] w-px bg-primary/30" />
                  )}

                  <div className="relative h-3 w-3 rounded-full bg-primary" />
                </div>

                {/* CONTENT */}
                <div className="min-w-0">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mb-2 text-sm font-serif font-normal italic text-primary">
                    {item.organization}
                  </p>

                  <p className="text-sm leading-relaxed text-justify text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerJourney;