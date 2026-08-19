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
          ? "bg-primary/20 backdrop-blur-2xl backdrop-saturate-150 py-3 border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto flex px-6 items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
        >
          <img
              src="/Jamaica-Logo.png"
              alt="JP Logo"
              className="h-15 w-auto object-contain"
            />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <div className="bg-black/60 backdrop-blur-md backdrop-saturate-150 border border-white/10 rounded-full p-1.5 px-2 flex items-center justify-center">

            {navLinks.map((link) => (
              <NavLink
                to={link.href}
                key={link.href}
                className="relative inline-block px-4 py-2 text-sm rounded-full"
              >
                {({ isActive }) => (
                  <>
                    {/* Active Pill */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-primary shadow-sm" />
                    )}

                    {/* Link Text */}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-white hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}

          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="relative overflow-hidden rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-secondary bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25">
              Contact Me
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() =>
            setIsMobileMenuOpen((prev) => !prev)
          }
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden min-h-screen bg-white text-black shadow-xl animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">

            {navLinks.map((link) => (
              <NavLink
                to={link.href}
                key={link.href}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block py-3 text-lg font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-4">
              <Link to="/contact" onClick={closeMobileMenu}>
                <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                  Contact Me
                </Button>
              </Link>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};