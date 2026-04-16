import { useState, useEffect, useRef, useCallback } from "react";

// ─── DATA ───────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "betPawa",
    subtitle: "Design Systems & Branding",
    year: "2019–2023",
    tags: ["Branding", "Design Systems", "Figma", "15+ Markets"],
    description: "Built and maintained evolving component libraries and brand foundations in Figma across 15+ African countries.",
    color: "#C8FF00",
    image: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/22839be6-a272-460f-8fc1-ed2305e1b629/Cover-43.png?format=1500w",
  },
  {
    id: 2,
    title: "betPawa",
    subtitle: "Branding OOH",
    year: "2019–2023",
    tags: ["Out of Home", "Campaign", "Art Direction"],
    description: "Large-format brand campaigns spanning billboards, transit, and stadium wraps across multiple African markets.",
    color: "#ffffff",
    image: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/89ed1e82-68e2-43f5-9e3e-464674e2e823/Cover-4b3.png?format=1500w",
  },
  {
    id: 3,
    title: "betPawa",
    subtitle: "AI Integration",
    year: "2022–2023",
    tags: ["AI Imagery", "Midjourney", "Production"],
    description: "Pioneering AI-generated imagery workflows for a pan-African betting brand at scale.",
    color: "#8BF0A7",
    image: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/74875fe8-21ea-4956-b0b2-77930878359c/Cover-4b3.png?format=1500w",
  },
  {
    id: 4,
    title: "ARTRPRNR",
    subtitle: "Magazine Design",
    year: "2021",
    tags: ["Editorial", "Print", "Typography"],
    description: "Bold typographic editorial design for an art and entrepreneurship publication.",
    color: "#F0EDE6",
    image: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/fef514e9-dff2-41f6-a91d-c9f35888dfdd/500.png?format=1500w",
  },
  {
    id: 5,
    title: "The Room",
    subtitle: "Brand Identity",
    year: "2018–2019",
    tags: ["Branding", "Digital", "Identity"],
    description: "Two full brand revamps for an influencer marketing platform. Geometric, bold, unapologetically pink.",
    color: "#FF2D7B",
    image: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/bcd8a065-4055-4625-b490-394ca06dc849/Cover-4b3.png?format=1500w",
  },
  {
    id: 6,
    title: "Apart of Me",
    subtitle: "Visual Design — Charity",
    year: "Ongoing",
    tags: ["Volunteer", "Visual Design", "NGO"],
    description: "Senior Visual Designer for a grief support app helping young people process loss.",
    color: "#FFD166",
    image: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/16b3f2e0-a3e0-4cba-ae15-b2740b76af1e/Cover-4b3.png?format=1500w",
  },
  {
    id: 7,
    title: "Pen Pal",
    subtitle: "App Branding",
    year: "2022",
    tags: ["App Design", "Branding", "Product"],
    description: "Brand identity and product design for a note-taking app focused on organisation.",
    color: "#F5F0E8",
    image: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/d4e1f508-6fe8-4b81-bc1e-ca66fdb2dd96/Cover-4b3.png?format=1500w",
  },
  {
    id: 8,
    title: "Paul Read",
    subtitle: "Photography Identity",
    year: "2021",
    tags: ["Identity", "Print", "Typography"],
    description: "Bold, geometric identity system for a creative photographer. Bauhaus-inspired.",
    color: "#00C9B7",
    image: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/39b6a3e7-eb47-4dd3-a85e-c21ebc8e2ba9/Cover-4b3.png?format=1500w",
  },
];

const AI_GEN_IMAGES = [
  { src: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/3c9b9d74-0e6d-4ddd-bdb2-a5496ab7b815/danbnvt_full_body_shot_of_a_dynamic_pose_of_an_african_football_0b7caa34-6dab-4912-a990-ca345bfbd350.png?format=1500w", category: "Sports", tool: "Midjourney" },
  { src: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/dcc41e6e-bc3f-440b-ad35-894a75fd3446/danbnvt_all_black_highly_fashionable_outfits_and_on_a_couple_of_250323cf-2a93-4a99-89c5-308a49447c61.png?format=1500w", category: "Fashion", tool: "Midjourney" },
  { src: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/82a7b1a9-4511-4b04-a0cb-747276869fd0/danbnvt_letter_D_made_of_3D_abstract_composition_with_watermelo_f01454e2-361f-4352-9ea9-1e39f868ae97.png?format=1500w", category: "Typography", tool: "Midjourney" },
  { src: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/8a5e212e-5aae-4e9e-a438-657343de22f7/danbnvt_a_gramophone_made_of_organic_floating_morphing_objects_2b28d6e5-a3b3-47d5-9cd1-e67a84e9f9e1.png?format=1500w", category: "Objects", tool: "Midjourney" },
  { src: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/a9b460b1-f65d-4dac-9805-2536df3f62e5/danbnvt_a_large_brutalist_concrete_residential_high_rise_apart_c5f26a71-1d9b-4917-8ee2-83f9cd498d7b.png?format=1500w", category: "Architecture", tool: "Midjourney" },
  { src: "https://images.squarespace-cdn.com/content/v1/68850db5d79bee1692c883e0/0e3b2e0f-f8b1-44e4-a3d4-3b94f444b2cd/danbnvt_dark_mode._large_cinematic_shot_of_a_delorean_DMC-12_pa_72d4e53e-5ef2-4f3c-b9b3-ef36eafc3e3e.png?format=1500w", category: "Automotive", tool: "Midjourney" },
];

// ─── HOOKS ──────────────────────────────────────────────────────────
function useInView(ref, threshold = 0.12) {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return isInView;
}

// ─── DISPLAY FONT CHARACTER SWAP ────────────────────────────────────
// Swaps specific characters with a display/serif italic for that editorial touch
function StyledTitle({ children, accentIndices = [], accentFont = "'Playfair Display', serif", className = "", style = {} }) {
  if (typeof children !== "string") return <span style={style} className={className}>{children}</span>;
  
  return (
    <span style={style} className={className}>
      {children.split("").map((char, i) => {
        if (accentIndices.includes(i)) {
          return (
            <span
              key={i}
              style={{
                fontFamily: accentFont,
                fontStyle: "italic",
                display: "inline",
              }}
            >
              {char}
            </span>
          );
        }
        return <span key={i}>{char}</span>;
      })}
    </span>
  );
}

// ─── ANIMATED WRAPPER ───────────────────────────────────────────────
function AnimatedText({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── NAVIGATION ─────────────────────────────────────────────────────
function Nav({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["Work", "AI Gen", "About"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "20px 48px" : "36px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
        backgroundColor: scrolled ? "rgba(10,10,10,0.82)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Logo / Name — bigger */}
      <div
        style={{ display: "flex", alignItems: "baseline", gap: "12px", cursor: "pointer" }}
        onClick={() => onNavigate("work")}
      >
        <span style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "28px",
          color: "#F0EDE6",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}>
          D
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>a</span>
          niel Bon
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>a</span>
          vita
        </span>
      </div>

      {/* Nav links — bigger touch targets */}
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        {sections.map((item) => {
          const key = item.toLowerCase().replace(" ", "-");
          const isActive = activeSection === key;
          return (
            <button
              key={item}
              onClick={() => onNavigate(key)}
              style={{
                background: "none",
                border: "none",
                fontFamily: "'DM Mono', monospace",
                fontSize: "13px",
                color: isActive ? "#F0EDE6" : "rgba(240,237,230,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                cursor: "pointer",
                padding: "8px 4px",
                position: "relative",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => e.target.style.color = "#F0EDE6"}
              onMouseLeave={(e) => {
                if (!isActive) e.target.style.color = "rgba(240,237,230,0.4)";
              }}
            >
              {item}
              {isActive && (
                <div style={{
                  position: "absolute",
                  bottom: "2px",
                  left: "4px",
                  right: "4px",
                  height: "1px",
                  background: "#C8FF00",
                }} />
              )}
            </button>
          );
        })}

        {/* Social icons */}
        <div style={{ display: "flex", gap: "16px", marginLeft: "24px", borderLeft: "1px solid rgba(240,237,230,0.08)", paddingLeft: "28px" }}>
          {["in", "ig", "be"].map((icon) => (
            <a
              key={icon}
              href="#"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid rgba(240,237,230,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                color: "rgba(240,237,230,0.3)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#C8FF00";
                e.currentTarget.style.color = "#C8FF00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(240,237,230,0.1)";
                e.currentTarget.style.color = "rgba(240,237,230,0.3)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────
function Hero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/London" }));
    };
    update();
    const i = setInterval(update, 60000);
    return () => clearInterval(i);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 48px 80px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(rgba(240,237,230,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(240,237,230,0.025) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px" }}>
        <AnimatedText delay={0.1}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "rgba(240,237,230,0.35)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "28px",
          }}>
            London, UK — {time}
          </div>
        </AnimatedText>

        <AnimatedText delay={0.25}>
          <h1 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(52px, 7.5vw, 112px)",
            fontWeight: 400,
            color: "#F0EDE6",
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
            margin: "0 0 36px",
          }}>
            V<span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>i</span>sual, Br
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>a</span>nding
            <br />
            <span style={{ color: "rgba(240,237,230,0.2)" }}>&</span>{" "}
            Pr<span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>o</span>duct D
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>e</span>sign
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <p style={{
            fontFamily: "'DM Sans', Helvetica, sans-serif",
            fontSize: "17px",
            lineHeight: 1.7,
            color: "rgba(240,237,230,0.45)",
            maxWidth: "520px",
            margin: "0 0 48px",
          }}>
            Senior Designer with 15+ years shaping brands, systems,
            and digital products — from startups to scale-ups,
            NGOs to iGaming. Always with a digital-first mindset.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.55}>
          <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            {["Branding", "Design Systems", "Figma", "AI"].map((tag, i) => (
              <span key={tag} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                color: i === 3 ? "#C8FF00" : "rgba(240,237,230,0.28)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </AnimatedText>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", right: "48px",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
      }}>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: "9px",
          color: "rgba(240,237,230,0.2)", textTransform: "uppercase",
          letterSpacing: "0.2em", writingMode: "vertical-rl",
        }}>Scroll</span>
        <div style={{
          width: "1px", height: "40px",
          background: "linear-gradient(180deg, rgba(240,237,230,0.25), transparent)",
          animation: "pulse 2s ease-in-out infinite",
        }} />
      </div>
    </section>
  );
}

// ─── PROJECT CARD ───────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, 0.08);
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: isEven ? "1.3fr 1fr" : "1fr 1.3fr",
        gap: "48px",
        padding: "48px",
        cursor: "pointer",
        borderBottom: "1px solid rgba(240,237,230,0.05)",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s`,
      }}
    >
      {/* Image */}
      <div style={{
        borderRadius: "6px",
        overflow: "hidden",
        position: "relative",
        order: isEven ? 0 : 1,
        transform: hovered ? "scale(1.015)" : "scale(1)",
        transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            aspectRatio: "16/10",
            filter: hovered ? "brightness(1.05)" : "brightness(0.92)",
            transition: "filter 0.5s",
          }}
        />
        {/* Overlay gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, ${project.color}10, transparent 60%)`,
          pointerEvents: "none",
        }} />
      </div>

      {/* Content */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        order: isEven ? 1 : 0,
        paddingLeft: isEven ? "16px" : 0,
        paddingRight: isEven ? 0 : "16px",
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: "10px",
          color: project.color, textTransform: "uppercase",
          letterSpacing: "0.2em", marginBottom: "12px", opacity: 0.6,
        }}>{project.year}</div>

        <h2 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(28px, 3.2vw, 40px)",
          fontWeight: 400, color: "#F0EDE6",
          letterSpacing: "-0.02em", margin: "0 0 4px", lineHeight: 1.1,
        }}>{project.title}</h2>

        <h3 style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
          fontWeight: 400, color: "rgba(240,237,230,0.4)", margin: "0 0 16px",
        }}>{project.subtitle}</h3>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
          lineHeight: 1.7, color: "rgba(240,237,230,0.3)",
          margin: "0 0 20px", maxWidth: "400px",
        }}>{project.description}</p>

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: "'DM Mono', monospace", fontSize: "9px",
              color: "rgba(240,237,230,0.25)", textTransform: "uppercase",
              letterSpacing: "0.1em", padding: "4px 8px",
              border: "1px solid rgba(240,237,230,0.07)", borderRadius: "2px",
            }}>{tag}</span>
          ))}
        </div>

        <div style={{
          marginTop: "24px", display: "flex", alignItems: "center", gap: "8px",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: "10px",
            color: project.color, textTransform: "uppercase", letterSpacing: "0.15em",
          }}>View project</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke={project.color} strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── AI GEN SECTION ─────────────────────────────────────────────────
function AIGenSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, 0.05);
  const categories = ["All", ...new Set(AI_GEN_IMAGES.map(i => i.category))];

  const filtered = activeFilter === "All"
    ? AI_GEN_IMAGES
    : AI_GEN_IMAGES.filter(i => i.category === activeFilter);

  return (
    <section ref={ref} id="ai-gen" style={{ padding: "120px 48px 80px" }}>
      {/* Section header */}
      <div style={{
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        marginBottom: "60px",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(32px)",
        transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "10px",
            color: "rgba(240,237,230,0.3)", textTransform: "uppercase",
            letterSpacing: "0.2em", marginBottom: "16px",
          }}>AI Exploration</div>
          <h2 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 400, color: "#F0EDE6",
            letterSpacing: "-0.03em", margin: 0, lineHeight: 1,
          }}>
            A
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>I</span>
            {" "}G
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>e</span>
            n
          </h2>
        </div>

        <div style={{ maxWidth: "380px" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
            lineHeight: 1.7, color: "rgba(240,237,230,0.35)", margin: 0,
            textAlign: "right",
          }}>
            All visuals are AI-generated — no post-processing.
            A raw look at what's possible when strong prompting meets the right tools.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div style={{
        display: "flex", gap: "8px", marginBottom: "40px", flexWrap: "wrap",
        opacity: isInView ? 1 : 0,
        transition: "opacity 0.7s 0.2s",
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              background: activeFilter === cat ? "rgba(200,255,0,0.1)" : "transparent",
              border: `1px solid ${activeFilter === cat ? "rgba(200,255,0,0.3)" : "rgba(240,237,230,0.08)"}`,
              borderRadius: "20px",
              padding: "7px 16px",
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: activeFilter === cat ? "#C8FF00" : "rgba(240,237,230,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div style={{
        columns: "3",
        columnGap: "16px",
      }}>
        {filtered.map((img, idx) => (
          <div
            key={img.src}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              breakInside: "avoid",
              marginBottom: "16px",
              borderRadius: "6px",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <img
              src={img.src}
              alt={img.category}
              style={{
                width: "100%",
                display: "block",
                filter: hoveredIdx === idx ? "brightness(1.08)" : "brightness(0.88)",
                transform: hoveredIdx === idx ? "scale(1.02)" : "scale(1)",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            {/* Hover overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.85) 100%)",
              opacity: hoveredIdx === idx ? 1 : 0,
              transition: "opacity 0.4s",
              display: "flex", flexDirection: "column",
              justifyContent: "flex-end", padding: "20px",
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "10px",
                color: "#C8FF00", textTransform: "uppercase",
                letterSpacing: "0.15em", marginBottom: "4px",
              }}>{img.category}</div>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "9px",
                color: "rgba(240,237,230,0.4)", letterSpacing: "0.1em",
              }}>{img.tool} • No post-processing</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, 0.15);

  return (
    <section ref={ref} id="about" style={{ padding: "120px 48px", borderTop: "1px solid rgba(240,237,230,0.05)" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px",
        maxWidth: "1100px", margin: "0 auto",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(36px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "10px",
            color: "rgba(240,237,230,0.3)", textTransform: "uppercase",
            letterSpacing: "0.2em", marginBottom: "24px",
          }}>About</div>
          <div style={{
            width: "100%", aspectRatio: "3/4", borderRadius: "6px",
            background: "linear-gradient(135deg, rgba(240,237,230,0.05), rgba(240,237,230,0.02))",
            border: "1px solid rgba(240,237,230,0.05)",
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "80px", fontStyle: "italic",
              color: "rgba(240,237,230,0.05)",
            }}>DB</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 400, color: "#F0EDE6",
            letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 28px",
          }}>
            Braz<span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>i</span>lian-It
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>a</span>lian designer,
            <br />
            <span style={{ color: "rgba(240,237,230,0.25)" }}>based in London.</span>
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "15px",
            lineHeight: 1.75, color: "rgba(240,237,230,0.4)",
            margin: "0 0 16px", maxWidth: "480px",
          }}>
            I care about clarity, craft, and helping teams move faster
            without losing soul. I've built design systems, led rebrands,
            mentored juniors, and worked closely with stakeholders to bring
            ideas to life with purpose and precision.
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "15px",
            lineHeight: 1.75, color: "rgba(240,237,230,0.28)",
            margin: "0 0 40px", maxWidth: "480px",
          }}>
            Outside of work, I co-run a Jiu-Jitsu gym, drink way too much
            coffee, and enjoy making good brands look even better.
          </p>

          <div style={{ display: "flex", gap: "56px" }}>
            {[
              { label: "Experience", value: "15+" },
              { label: "Markets", value: "15+" },
              { label: "BJJ", value: "Brown" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "32px", fontStyle: "italic",
                  color: "#C8FF00", letterSpacing: "-0.02em",
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "9px",
                  color: "rgba(240,237,230,0.25)", textTransform: "uppercase",
                  letterSpacing: "0.15em", marginTop: "4px",
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div style={{ marginTop: "48px", borderTop: "1px solid rgba(240,237,230,0.06)", paddingTop: "28px" }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: "10px",
              color: "rgba(240,237,230,0.25)", textTransform: "uppercase",
              letterSpacing: "0.15em", marginBottom: "16px",
            }}>Services</div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["Digital Design", "Branding Identity", "Art Direction", "Design Systems", "AI Consultancy", "Photo Retouching"].map(s => (
                <span key={s} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                  color: "rgba(240,237,230,0.35)",
                  padding: "6px 14px",
                  border: "1px solid rgba(240,237,230,0.07)",
                  borderRadius: "20px",
                }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      padding: "32px 48px",
      borderTop: "1px solid rgba(240,237,230,0.05)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: "10px",
        color: "rgba(240,237,230,0.18)", textTransform: "uppercase", letterSpacing: "0.15em",
      }}>© 2026 Daniel Bonavita</span>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: "9px",
        color: "rgba(240,237,230,0.12)", letterSpacing: "0.1em",
      }}>Built as a design experiment with Claude</span>
    </footer>
  );
}

// ─── SECTION DIVIDER ────────────────────────────────────────────────
function SectionDivider({ label, count }) {
  return (
    <div style={{
      padding: "0 48px", display: "flex", alignItems: "center", gap: "16px", margin: "0 0 8px",
    }}>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: "10px",
        color: "rgba(240,237,230,0.3)", textTransform: "uppercase",
        letterSpacing: "0.2em", whiteSpace: "nowrap",
      }}>{label}</span>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(240,237,230,0.08), transparent)" }} />
      {count && (
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: "10px",
          color: "rgba(240,237,230,0.12)", letterSpacing: "0.1em",
        }}>{count} projects</span>
      )}
    </div>
  );
}

// ─── MAIN APP ───────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("work");

  const handleNavigate = useCallback((section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&family=Instrument+Serif:ital@0;1&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body, html {
          background: #0A0A0A !important;
          color: #F0EDE6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ::selection { background: #C8FF00; color: #0A0A0A; }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(240,237,230,0.08); border-radius: 2px; }
        img { user-select: none; -webkit-user-drag: none; }
      `}</style>

      <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
        <Nav activeSection={activeSection} onNavigate={handleNavigate} />
        
        <div id="work">
          <Hero />
          <SectionDivider label="Selected Work" count={PROJECTS.length} />
          <section>
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </section>
        </div>

        <AIGenSection />
        <About />
        <Footer />
      </div>
    </>
  );
}
