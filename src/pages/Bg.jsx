{/* BG */}
<div className="absolute inset-0 -z-10 overflow-hidden bg-background">

  <div
    className="absolute inset-0 opacity-[0.08]"
    style={{
      backgroundImage:
        "radial-gradient(circle, var(--color-foreground) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
    }}
  />
 
  {/* arc rings */}
  <svg
    className="absolute top-1/2 right-[-120px] -translate-y-1/2 
    w-[900px] h-[900px] pointer-events-none"
    viewBox="0 0 900 900"
    fill="none"
  >
    <circle cx="450" cy="450" r="200" stroke="var(--color-primary)" strokeOpacity="0.35" strokeWidth="1" />
    <circle cx="450" cy="450" r="320" stroke="var(--color-primary)" strokeOpacity="0.22" strokeWidth="1" />
    <circle cx="450" cy="450" r="430" stroke="var(--color-primary)" strokeOpacity="0.12" strokeWidth="1" />

    <line x1="450" y1="130" x2="450" y2="160" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" />
    <line x1="770" y1="450" x2="740" y2="450" stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="1.5" />
  </svg>
 

  <div
    className="absolute top-1/2 -right-24 -translate-y-1/2 
    w-[420px] h-[420px] rounded-full bg-primary/10"
  />
</div>