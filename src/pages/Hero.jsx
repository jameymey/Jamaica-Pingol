import { Button } from "../components/Button";
import { ArrowRight, Download} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypingTitle } from "@/components/TypingTitle";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const Hero = () => <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0">
        {/* <img
    src="/Background.png"
    alt="Hero Img"
    className="w-full h-full object-over" /> */}

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background" />
    </div>

    {/* blue dots
     <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {[...Array(30)].map((_, i) => (
         <div
             className="absolute w-1.5 h-1.5 rounded-full opacity-60"
             style={{
             backgroundColor: "#20B2A6",
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animation: `slow-drift ${
                 15 + Math.random() * 20
             }s ease-in-out infinite`,
             animationDelay: `${Math.random() * 5}s`,
             }}
         />
         ))}
   </div> */}

    {/* Content */}
    <div className="container mx-auto px-6 pt-33 pb-20 relative z-10">
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100
                font-serif italic font-normal text-foreground">
                    Jamaica
                </h1>

                <TypingTitle className="animate-fade-in animation-delay-200" />

                <p className="text-lg text-foreground max-w-lg animate-fade-in  animation-delay-300">
                    Turning ideas into digital experiences
                </p>
                </div>

                {/* Call to Act */}
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
                    <Button size="lg">
                        Contact me<ArrowRight className="w-5 h-5" /> 
                    </Button>
                    <AnimatedBorderButton>
                        <Download className="w-5 h-5" />
                        Download CV
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
        </div>
    </div>

</section>