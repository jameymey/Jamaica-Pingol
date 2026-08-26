import { ProfileID } from "@/components/ProfileID";

export const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-hue-primary absolute -left-32 top-20 h-[450px] w-[450px] rounded-full bg-primary/15 blur-[140px]" />

        <div className="hero-hue-secondary absolute -right-32 top-40 h-[450px] w-[450px] rounded-full bg-secondary/15 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Left - ID */}
          <div className="animate-fade-in">
            <ProfileID />
          </div>

          {/* Right - About */}
          <div className="animate-fade-in animation-delay-200">

            <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
              Get to know me
            </span>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              A developer who turns
              <span className="font-serif italic font-normal text-primary">
                {" "}problems into possibilities.
              </span>
            </h1>

            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm Jamaica Pingol, a graduating BSIT student who enjoys building
                things, solving problems, and figuring out how technology
                can make ideas work. I'm interested in systems analysis,
                web development, and AI, and I learn best through hands-on
                experience and actually building things.
              </p>

              <p>
                I like to understand the bigger picture first, break
                problems down into smaller pieces, and turn them into
                something practical. Whether I'm analyzing a system,
                developing a web application, or testing a feature,
                I'm always looking for ways to learn, improve, and build
                something meaningful.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;