export const CertificationsAwards = () => {
  const certifications = [
    {
      title: "Fortinet Certified Fundamentals in Cybersecurity",
      organization: "Fortinet Training Institute",
      date: "December 2025",
    },
    {
      title: "IT Bootcamp – Certificate of Completion",
      organization: "Cebuana Lhuillier Academy",
      date: "November 2025",
      description:
        "Completed a two-day IT bootcamp themed “Future-Ready: Powered by AI, Driven by You.”",
    },
    {
      title: "Build Python Web Apps with Flask",
      organization:
        "Republic of the Philippines – Department of Information and Communications Technology LMS",
      date: "October 2024",
    },
    {
      title: "Programming for Intermediate Users Using Python",
      organization:
        "Republic of the Philippines – Department of Information and Communications Technology LMS",
      date: "October 2024",
    },
    {
      title: "Programming for Beginners Using Python",
      organization:
        "Republic of the Philippines – Department of Information and Communications Technology LMS",
      date: "June 2024",
    },
    {
      title: "Introduction to Ethical Hacking: Beginner's Guide to Cyber Security",
      organization: "Simplilearn",
      date: "March 2024",
    },
    {
      title: "Introduction to Cybersecurity",
      organization: "Simplilearn",
      date: "March 2024",
    },
    {
      title:
        "Cyber Security 101: Beginner's Guide to Become a Penetration Tester",
      organization: "Simplilearn",
      date: "March 2024",
    },
  ];

  const recognition = [
    {  
    title: "Research Colloquium Presenter",
    organization:
      "Polytechnic University of the Philippines – College of Computer and Information Sciences",
    date: "December 2025",
    description:
      "Presented AlignEDU: A Web-Based Application with Track Matching and Personalized Skill Builder at the research colloquium, “CCIS at 39 Years of IT Excellence: Forging Global Futures.”",
     },
  ];

  const achievements = [
    {
      title: "President's Lister & Dean's Lister",
      organization: "Polytechnic University of the Philippines",
      date: "Multiple semesters, 2022–2026",
    },
    {
      title: "With High Honors",
      organization: "Cainta Catholic College",
      date: "AY 2019–2022",
    },
    {
      title: "One Cainta Scholar Awardee",
      organization: "One Cainta Scholarship Society",
      date: "2022-2026",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="container relative z-10 mx-auto px-6">

        {/* SECTION INTRO */}
        <div className="mb-12">
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
            Certifications & Achievements
          </span>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Milestones that{" "}
            <span className="font-serif font-normal italic text-primary">
              shaped my journey
            </span>
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Certifications, academic recognitions, and achievements that
            reflect my continuous learning and commitment to growth.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* CERTIFICATIONS */}
          <div className="rounded-2xl border border-primary/20 bg-background p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-semibold text-foreground">
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((certification) => (
                <div
                  key={certification.title}
                  className="border-l-2 border-primary/30 pl-4"
                >
                  <h4 className="text-base font-semibold leading-relaxed text-foreground">
                    {certification.title}
                  </h4>

                  <p className="mt-1 text-sm font-serif italic text-primary">
                    {certification.organization}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {certification.date}
                  </p>

                  {certification.description && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {certification.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            {/* RECOGNITION */}
            <div className="rounded-2xl border border-primary/20 bg-background p-6 sm:p-8">
              <h3 className="mb-6 text-2xl font-semibold text-foreground">
                Recognition
              </h3>

              <div className="space-y-6">
                {recognition.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-primary/30 pl-4"
                  >
                    <h4 className="text-base font-semibold leading-relaxed text-foreground">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm font-serif italic text-primary">
                      {item.organization}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.date}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div className="rounded-2xl border border-primary/20 bg-background p-6 sm:p-8">
              <h3 className="mb-6 text-2xl font-semibold text-foreground">
                Achievements
              </h3>

              <div className="space-y-6">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="border-l-2 border-primary/30 pl-4"
                  >
                    <h4 className="text-base font-semibold leading-relaxed text-foreground">
                      {achievement.title}
                    </h4>

                    <p className="mt-1 text-sm font-serif italic text-primary">
                      {achievement.organization}
                    </p>

                    {achievement.date && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {achievement.date}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAwards;