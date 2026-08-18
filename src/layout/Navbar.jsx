    import { Button } from "@/components/Button";
    import {Menu, X } from "lucide-react";
    import { useState, useEffect } from "react";

    const navLinks = [
        {   href: "/", label: "Home"   },
        {   href: "/about", label: "About"   },
        {   href: "/projects", label: "Projects"   },
    ];

    export const Navbar = () => {
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
        const [isScrolled, setIsScrolled] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            };

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }, []);


        return <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? "glass-stronger py-3 border-b border-primary/20 shadow-lg shadow-primary/5"
                        : "bg-transparent py-5 border-b border-transparent"
                }`}
            >
            <nav className="container mx-auto flex px-6 items-center justify-between">
                <a  href = "/" className="text-1xl font-bold tracking-tight hover:text-primary">
                    JP<span className= "text-primary">.</span>
                </a>
                {/* desktop navigation */}
                <div className= "hidden md:flex items-center gap-2">
                    <div className ="glass rounded-full px-2 py-1 flex items-center gap-2">
                        {navLinks.map((link, index) => (
                            <a href = {link.href} key = {index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}</a>
                        ))}
                    </div>
                </div>

                {/* CTA button */}
                <div className="hidden md:block">
                    <Button size = "sm">
                        Contact Me
                    </Button>
                </div>

                {/* Mobile menu button */}

                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? 
                    <X size = "24" /> : <Menu size = "24" />}
                </button>
            </nav>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
            <div className="md:hidden glass-stronger animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                            <a href = {link.href} key = {index} className="text-lg text-muted-foreground hover:text-foreground py-2">
                                {link.label}</a>
                        ))}
                    
                    <Button>
                        Contact Me
                    </Button>
                </div>

            </div>
            )}
        </header>
        }