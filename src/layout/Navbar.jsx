import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-stronger py-3 border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto flex px-6 items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          JP<span className="text-primary">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-2">
          <div className="bg-black/60 backdrop-blur-md backdrop-saturate-150 border border-white/10 rounded-full p-1.5 px-2 items-center justify-center">

            {navLinks.map((link) => (
              <NavLink
                to={link.href}
                key={link.href}
                className={({ isActive }) =>
                  `inline-block px-4 py-2 text-sm rounded-full transition-colors ${
                    isActive
                      ? "text-primary bg-surface"
                      : "text-white hover:text-primary hover:bg-surface"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

          </div>
        </div>

        {/* CTA button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button size="sm">
              Contact Me
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() =>
            setIsMobileMenuOpen((prev) => !prev)
          }
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-stronger animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

            {navLinks.map((link) => (
              <NavLink
                to={link.href}
                key={link.href}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `text-lg py-2 transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link to="/contact" onClick={closeMobileMenu}>
              <Button className="w-full">
                Contact Me
              </Button>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};