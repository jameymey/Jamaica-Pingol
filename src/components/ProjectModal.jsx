import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";

export const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = project
    ? [
        project.image,
        ...(project.screenshots || []).filter(
          (screenshot) => screenshot !== project.image
        ),
      ]
    : [];

  // Reset carousel when opening a different project
  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  // Keyboard controls
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setCurrentImage(
          (prev) => (prev - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, images.length, onClose]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className="fixed inset-x-0 bottom-0 top-[88px] z-[100] flex items-center justify-center p-3 sm:p-6">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          relative
          max-h-[calc(100vh-112px)]
          w-full
          max-w-6xl
          overflow-y-auto
          rounded-2xl
          bg-background
          shadow-2xl
        "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            z-30
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-background/90
            text-muted-foreground
            shadow-lg
            backdrop-blur
            transition-all
            hover:bg-primary
            hover:text-white
          "
          aria-label="Close project details"
        >
          <X size={18} />
        </button>

        {/* IMAGE CAROUSEL */}

        <div className="relative w-full bg-muted/20">

          {/* IMAGE */}
          <img
            src={images[currentImage]}
            alt={`${project.title} screenshot ${currentImage + 1}`}
            className="block h-auto max-h-none w-full object-contain"
          />

          {/* LEFT ARROW */}
          {images.length > 1 && (
            <button
              onClick={previousImage}
              className="
                absolute
                left-4
                top-1/2
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white
                backdrop-blur-sm
                transition-all
                hover:bg-primary
              "
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* RIGHT ARROW */}
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="
                absolute
                right-4
                top-1/2
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white
                backdrop-blur-sm
                transition-all
                hover:bg-primary
              "
              aria-label="Next screenshot"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* IMAGE COUNTER */}
          {images.length > 1 && (
            <div
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-black/60
                px-4
                py-1.5
                text-xs
                font-medium
                text-white
                backdrop-blur-sm
              "
            >
              {currentImage + 1} / {images.length}
            </div>
          )}

        </div>

        {/* CONTENT */}

        <div className="p-6 sm:p-8 lg:p-10">

          {/* TITLE + LIVE PROJECT */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="min-w-0">

              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                {project.title}
              </h2>

              <p className="mt-2 text-sm text-primary">
                {project.role}
                <span className="mx-2 text-primary/40">·</span>
                {project.year}
                <span className="mx-2 text-primary/40">·</span>
                {project.type}
              </p>

            </div>

            {/* LIVE PROJECT */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-primary/90
                "
              >
                View Live Project
                <ExternalLink size={15} />
              </a>
            )}

          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-7">

            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">

              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-primary/20
                    bg-primary/5
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-primary
                  "
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

          {/* PROBLEM + SOLUTION */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">

            {/* PROBLEM */}
            <div
              className="
                rounded-xl
                border
                border-primary/10
                bg-primary/5
                p-5
              "
            >

              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Problem
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>

            </div>

            {/* SOLUTION */}
            <div
              className="
                rounded-xl
                border
                border-primary/10
                bg-primary/5
                p-5
              "
            >

              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Solution
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>

            </div>

          </div>

          {/* KEY FEATURES */}
          <div className="mt-8">

            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Key Features
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">

              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-lg
                    border
                    border-primary/10
                    bg-background
                    p-3
                  "
                >

                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {feature}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;