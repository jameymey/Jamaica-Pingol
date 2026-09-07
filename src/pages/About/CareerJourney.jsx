
"use client";

import { useState } from "react";

export const CareerJourney = () => {
  const [activeTab, setActiveTab] = useState("experience");

 const education = [
{
date: "2022–2026",
title: "Bachelor of Science in Information Technology",
organization: "Polytechnic University of the Philippines – Sta. Mesa",
description:
"My four years at PUP gave me hands-on experience across software development, system analysis, databases, project management, and emerging technologies. Through academic and team-based projects, I worked across different stages of the software development life cycle—from gathering requirements and designing solutions to development, testing, documentation, and presentation. My capstone project also allowed me to explore full-stack development and Generative AI while working with a real-world educational use case. Graduated Magna Cum Laude.",
},
];

const experience = [
{
date: "Feb – May 2026",
title: "System Analyst Intern",
organization: "Unilab, Inc.",
description:
"Completed a 500-hour internship under Unilab's Business Intelligence and Data Analytics division, where I supported the development and improvement of internal business systems. I worked primarily on User Acceptance Testing (UAT), defect tracking, enhancement reviews, requirements validation, and functional documentation. I created test cases, maintained trackers, prepared wireframes, and worked closely with developers and stakeholders to validate fixes and clarify requirements. This experience gave me a practical understanding of how system analysis, testing, documentation, and collaboration fit together throughout the software development life cycle.",
},
{
date: "Apr – Aug 2026",
title: "Creative Virtual Assistant (Part-Time)",
organization: "Independent Client",
description:
"Supported day-to-day creative and digital operations by producing visual content for social media and marketing initiatives. My work included creating posters, promotional materials, and short-form video content, as well as writing captions and marketing copy. I also prepared supporting documents and handled multiple creative requests based on client requirements, helping me strengthen my communication, organization, attention to detail, and ability to work independently.",
},
{
date: "2025 – 2026",
title: "Content Creation Co-Lead",
organization: "Cisco NetConnect PUP – Manila",
description:
"Co-led the organization's content creation efforts, from planning and brainstorming concepts to producing and preparing digital content for publication. I worked with the creative team to develop materials aligned with Cisco's branding while keeping the content relevant and engaging for a student audience. The role strengthened my experience in creative collaboration, content planning, communication, and leadership.",
},
{
date: "2023 – 2026",
title: "Member, Cybersecurity Skill Builder Department",
organization: "AWS Cloud Club – PUP Manila",
description:
"Participated in technical workshops, learning sessions, and training activities focused on cloud computing, cybersecurity, and security fundamentals. Being part of the organization allowed me to continuously explore areas outside my core development work while building a broader understanding of cloud and cybersecurity concepts.",
},
];

  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="container relative z-10 mx-auto px-6">
        <div className="animate-fade-in">
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
          <p className="mt-4 text-justify text-lg leading-relaxed text-muted-foreground">
            A timeline of my journey from exploring technology as a student to
            building experience in the IT field through projects, collaboration,
            and continuous learning.
          </p>

          {/* TAB BUTTONS */}
          <div className="mt-10 flex justify-center gap-3">
            <button
              onClick={() => setActiveTab("education")}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-primary/20 bg-background text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              Education
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-primary/20 bg-background text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              Experience
            </button>
          </div>

          {/* EDUCATION TAB */}
          {activeTab === "education" && (
            <div className="animate-fade-in mt-10">
              <h3 className="mb-6 text-center text-3xl font-bold uppercase tracking-wider">
                Education
              </h3>

              <div className="space-y-8 rounded-2xl border border-primary/20 bg-background p-4 sm:p-8">
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

                      <p className="text-justify text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === "experience" && (
            <div className="animate-fade-in mt-10">
              <h3 className="mb-6 text-center text-3xl font-bold uppercase tracking-wider">
                Experience
              </h3>

              <div className="space-y-8 rounded-2xl border border-primary/20 bg-background p-4 sm:p-8">
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

                      <p className="text-justify text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;