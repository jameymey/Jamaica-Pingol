import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="container relative z-10 mx-auto px-6">
        
        {/* A LITTLE MORE ABOUT ME */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div>
            <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
              A Little More About Me
            </span>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Always learning,{" "}
              <span className="font-serif font-normal italic text-primary">
                always building
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm a graduating Information Technology student with experience in
              software development, system analysis, and building digital
              solutions through academic projects and real world collaboration.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I'm particularly interested in understanding how technology can
              solve real problems from turning requirements into working
              systems to exploring practical AI-powered solutions.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              More about me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* RIGHT SIDE - QUICK INFO */}
          <div className="grid gap-4 sm:grid-cols-2">
            
            <div className="rounded-2xl border border-primary/20 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <GraduationCap className="mb-5 h-7 w-7 text-primary" />

              <p className="text-sm text-muted-foreground">
                Education
              </p>

              <h3 className="mt-2 text-lg font-semibold text-foreground">
                BS Information Technology
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Polytechnic University of the Philippines
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <MapPin className="mb-5 h-7 w-7 text-primary" />

              <p className="text-sm text-muted-foreground">
                Based in
              </p>

              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Cainta, Rizal
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Philippines
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:col-span-2">
              <p className="text-sm text-muted-foreground">
                Currently focused on
              </p>

              <h3 className="mt-2 text-xl font-semibold text-foreground">
                Building reliable systems and exploring practical AI solutions.
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {["System Analysis", "Web Development", "AI & RAG"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Info;