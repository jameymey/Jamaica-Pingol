import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen pt-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get in touch
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Let's work
            <br />
            <span className="text-primary">together.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Have a project in mind, an opportunity, or just want to say hello?
            Feel free to reach out. I'd love to hear from you.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:jamaicap08@gmail.com"
              className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:scale-105"
            >
              Send me an email
            </a>

            <a
              href="https://github.com/jameymey"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-6 py-3 font-medium transition-all hover:bg-muted"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jamaica-pingol-911253219/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-6 py-3 font-medium transition-all hover:bg-muted"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;