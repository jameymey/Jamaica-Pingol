export const CareerJourney = () => {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-8 animate-fade-in">
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
            Career Journey
          </span>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Experience that <span className="font-serif italic font-normal text-primary">speaks volumes</span>
          </h2>
          {/* <p className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            A timeline of my journey, from a curious student to a growing IT professional, <br />
            learning through experience and building things along the way.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;