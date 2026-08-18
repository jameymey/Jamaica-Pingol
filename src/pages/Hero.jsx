import { Button } from "../components/Button";
import { ArrowRight, File, ChevronDown} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypingTitle } from "@/components/TypingTitle";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "PHP",
  "C",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "NeonDB",
  "Git",
  "GitHub",
  "Vite",
  "Vercel",
  "Google Gemini",
  "Vertex AI",
  "Postman",
];

export const Hero = () => <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-background overflow-hidden">
        <div className="absolute -right-20 bottom-0 w-[600px] h-[600px] rounded-full bg-highlight/50 blur-2xl" />
        <div className="absolute right-10 top-24 w-[420px] h-[420px] rounded-full border border-primary/30" />
        <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
        backgroundImage:
            "radial-gradient(circle, var(--color-foreground) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        }}
        />
 
    </div>
    {/* Content */}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-2 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                        <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />Hi I am
                    </span>
                </div>

                {/* Headline */}
                <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in animation-delay-100
                font-serif italic font-normal text-foreground">
                    Jamaica
                </h1>

                <TypingTitle className="animate-fade-in animation-delay-200" />

                <p className="text-xl md:text-2xl text-foreground max-w-lg animate-fade-in animation-delay-300">
                    Turning ideas into digital experiences
                </p>
                </div>

                {/* Call to Act */}
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
                    <Button size="lg">
                        Contact me<ArrowRight className="w-5 h-5" /> 
                    </Button>
                    <AnimatedBorderButton>
                        <File className="w-5 h-5" />
                        Portfolio
                </AnimatedBorderButton>
              </div>

              {/* Social Media */}
             <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/jameymey" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/jamaica-pingol-911253219" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>

            </div>
            {/* Right Column - Picture */}
            <div className="relative animate-fade-in animation-delay-400">
                {/* Profile Picture */}
                <div className="relative max-w-md mx-auto">
                    <div
                        className="absolute inset-0 
                        rounded-3xl bg-gradient-to-br 
                        from-primary/30 via-transparent 
                        to-primary/10 blur-2xl animate-pulse"
                    />
                   <div className="relative glass rounded-3xl p-2 glow-border">
                    <img 
                    src ="/Jamaica.jpeg" 
                    alt="Jamaica Pingol" 
                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                     />

                     {/* FLoating Badge */}
                     <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                        <div className ="flex items-center gap-2">
                            <div className ="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className = "text-sm font-medium">Available for work</span>
                        </div>
                     </div>

                     {/* Stat Badge
                     <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                        <div className="text-2xl font-bold text-primary">5+</div>
                        <div className="text-xs text-muted-foreground">
                            Kagagohan
                        </div>
                    </div> */}
                    
                   </div>
                </div>
            </div>
        </div>

        {/* Skills section */}
        <div className="mt-20 animatefade-in animation-delay-700">
            <p className ="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee gap-6 whitespace-nowrap">
                {[...skills, ...skills].map((skill, index) => (
                     <div key = {index} className="flex-shrink-0 px-8 py-4">
                        <span className="text=xl font-semibold text-muted-foreground/60 hover:text-primary transition-colors">{skill}</span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
    {/* Scroll */}
    <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
</section>