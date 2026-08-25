import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectScreenshotCarousel = ({ project }) => {
  const screenshots =
    project.screenshots?.length > 0
      ? project.screenshots
      : [project.image];

  const [currentIndex, setCurrentIndex] = useState(0);

  /* =========================
     RESET WHEN PROJECT CHANGES
  ========================== */

  useEffect(() => {
    setCurrentIndex(0);
  }, [project.title]);

  /* =========================
     NEXT / PREVIOUS
  ========================== */

  const showNext = () => {
    setCurrentIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  const showPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  /* =========================
     KEYBOARD NAVIGATION
  ========================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [screenshots.length]);

  return (
    <div className="relative">

      {/* IMAGE VIEWER */}
      <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-muted/20">

        <img
          src={screenshots[currentIndex]}
          alt={`${project.title} screenshot ${currentIndex + 1}`}
          className="
            block
            h-auto
            max-h-[55vh]
            min-h-[220px]
            w-full
            object-contain
          "
        />

        {/* PREVIOUS BUTTON */}
        {screenshots.length > 1 && (
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous screenshot"
            className="
              absolute
              left-3
              top-1/2
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-background/90
              text-foreground
              shadow-lg
              backdrop-blur-sm
              transition-all
              hover:bg-primary
              hover:text-white
            "
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* NEXT BUTTON */}
        {screenshots.length > 1 && (
          <button
            type="button"
            onClick={showNext}
            aria-label="Next screenshot"
            className="
              absolute
              right-3
              top-1/2
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-background/90
              text-foreground
              shadow-lg
              backdrop-blur-sm
              transition-all
              hover:bg-primary
              hover:text-white
            "
          >
            <ChevronRight size={20} />
          </button>
        )}

      </div>

      {/* SCREENSHOT COUNTER*/}
      {screenshots.length > 1 && (
        <div className="mt-3 text-center text-xs text-muted-foreground">
          {currentIndex + 1} / {screenshots.length}
        </div>
      )}

    </div>
  );
};

export default ProjectScreenshotCarousel;