import { TypingTitle } from "@/components/TypingTitle";

export const ProfileID = () => {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-white/70 p-6 shadow-xl backdrop-blur-md">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-primary/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Personal ID
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Developer Profile
            </p>
          </div>

          <span className="text-xs font-mono text-muted-foreground">
            01
          </span>
        </div>

        {/* Photo + Name */}
        <div className="mt-6 flex items-start gap-5">

          {/* Photo */}
          <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl border-2 border-primary/20">
            <img
              src="/Jamaica-ID.png"
              alt="Jamaica Pingol"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Name */}
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Name
            </p>

            <h2 className="mt-1 text-2xl font-bold leading-tight">
              Jamaica
              <br />
              <span className="font-serif italic font-normal text-primary">
                Pingol Pangilinan
              </span>
            </h2>
          </div>
        </div>

        {/* Information */}
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Location
            </p>

            <p className="mt-1 text-sm font-medium">
              Cainta, Rizal
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Status
            </p>

            <p className="mt-1 flex items-center gap-2 text-sm font-medium">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Available
            </p>
          </div>

          {/* Education */}
          <div className="col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Education
            </p>

            <p className="mt-1 text-sm font-medium">
              BS Information Technology
            </p>

            <p className="text-xs text-muted-foreground">
              Polytechnic University of the Philippines — Sta. Mesa
            </p>

            <p className="text-xs text-muted-foreground">
              Class of 2026
            </p>
          </div>
        </div>

        {/* Achievement */}
        <div className="mt-6 border-t border-primary/10 pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Academic Achievement
          </p>

          <p className="mt-1 font-semibold text-primary">
            Magna Cum Laude
          </p>
        </div>

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-secondary/10" />

      </div>
    </div>
  );
};

export default ProfileID;