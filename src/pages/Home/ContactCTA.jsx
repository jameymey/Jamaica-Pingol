import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";

export const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden py-28">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        <div className="mx-auto max-w-3xl text-center">
          
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
            Let's Connect
          </span>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Let's build something{" "}
            <span className="font-serif font-normal italic text-primary">
              meaningful
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Have an opportunity, project, or idea in mind? I'd love to connect
            and explore how we can work together.
          </p>

          <div className="mt-10 flex justify-center">
            <Link to="/contact">
              <Button size="lg">
                Get in touch
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;