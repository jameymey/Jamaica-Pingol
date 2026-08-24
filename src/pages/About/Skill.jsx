const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend & Data",
      skills: [
        "Node.js",
        "Python",
        "PHP",
        "SQL",
        "PostgreSQL",
        "MySQL",
        "Prisma",
        "Supabase",
        "NeonDB",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "Vercel",
        "Postman",
        "Google Gemini",
        "Vertex AI",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Critical Thinking",
        "Communication",
        "Adaptability",
        "Teamwork",
        "Attention to Detail",
        "Continuous Learning",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-8 animate-fade-in">
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
            Skills
          </span>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            The{" "}
            <span className="font-serif italic font-normal text-primary">
              Stack
            </span>
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20 hover:shadow-sm animate-fade-in delay-100"
            >
              {/* Category Title */}
              <h3 className="mb-6 text-lg font-bold text-foreground">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border-2 border-primary/20 bg-gray-50 px-3 py-2 text-xs font-medium uppercase tracking-wide transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;