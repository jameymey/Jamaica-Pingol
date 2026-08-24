export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center  px-4 pb-4 pt-24 sm:px-6 sm:pt-28">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative max-h-[75vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-background shadow-2xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-lg text-muted-foreground shadow-md transition-colors hover:bg-primary hover:text-white"
          aria-label="Close project details"
        >
          ×
        </button>

        {/* HERO IMAGE */}
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-8">

          {/* TITLE */}
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {project.title}
            </h2>

            <p className="mt-1 text-sm text-primary">
              {project.role} · {project.year}
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {/* PROBLEM */}
            <div className="rounded-xl border border-primary/10 bg-primary/5 p-5">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Problem
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </div>

            {/* SOLUTION */}
            <div className="rounded-xl border border-primary/10 bg-primary/5 p-5">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Solution
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>

          </div>

          {/* FEATURES */}
          <div className="mt-8">

            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Key Features
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">

              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-lg border border-primary/10 bg-background p-3"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />

                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* ADDITIONAL SCREENSHOTS */}
          {project.screenshots.length > 0 && (
            <div className="mt-8">

              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Screenshots
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">

                {project.screenshots.map((screenshot, index) => (
                  <img
                    key={screenshot}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full rounded-xl border border-primary/10 object-cover"
                  />
                ))}

              </div>

            </div>
          )}

          {/* LIVE PROJECT */}
          {project.liveUrl && (
            <div className="mt-8">

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:-translate-y-0.5"
              >
                View Live Project ↗
              </a>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;