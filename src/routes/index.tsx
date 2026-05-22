import { createFileRoute } from "@tanstack/react-router";
import { Petals } from "@/components/Petals";
import templateRoyalGold from "@/assets/template-royal-gold.jpg";
import templateFloral from "@/assets/template-floral.jpg";
import templateEthiopian from "@/assets/template-ethiopian.jpg";
import storyEncounter from "@/assets/story-encounter.jpg";
import storyProposal from "@/assets/story-proposal.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const TEMPLATES = [
  {
    img: templateRoyalGold,
    name: "The Gilded Estate",
    tag: "Royal Gold · Opulent",
    offset: "",
  },
  {
    img: templateFloral,
    name: "Botanical Whimsy",
    tag: "Floral Romance · Organic",
    offset: "md:translate-y-10",
  },
  {
    img: templateEthiopian,
    name: "Cultural Tapestry",
    tag: "Ethiopian Heritage · Vibrant",
    offset: "",
  },
  {
    img: templateFloral,
    name: "Minimal Ivory",
    tag: "Minimal Elegant · Modern",
    offset: "md:translate-y-6",
  },
];

const STORY = [
  {
    date: "September 2021",
    title: "How We Met",
    body: "A rainy afternoon in Montmartre, a shared umbrella, and a conversation that refused to end. This is where the ink first touched the page.",
    img: storyEncounter,
  },
  {
    date: "January 2024",
    title: "The Proposal",
    body: "Under the Northern Lights in Finnish Lapland, a quiet promise made in the shimmering cold. Forever found its voice.",
    img: storyProposal,
  },
  {
    date: "October 2025",
    title: "Forever Starts Here",
    body: "Where we invite you to witness the start of our greatest chapter yet — beside the slow waters of Lake Como.",
  },
];

const PREMIUM_FEATURES = [
  "3D Cinematic Invitation Scene",
  "Bespoke Hand-Painted Monogram",
  "AI Love Story Video",
  "Voice Messages & Music Integration",
  "Private Couple Memory Vault",
  "Animated RSVP & Guestbook",
  "Anniversary Memory System",
  "VIP Concierge Support",
];

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Petals />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md bg-background/70 border-b border-border">
        <a href="#" className="font-serif text-2xl font-semibold tracking-tight">
          Aeterna<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] font-medium text-foreground/70">
          <a href="#templates" className="hover:text-primary transition-colors">The Gallery</a>
          <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Bespoke</a>
        </div>
        <button className="px-5 py-2 border border-foreground/15 rounded-full text-[10px] uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-all">
          Concierge
        </button>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-12 pb-32 md:py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
          <h1 className="font-script text-[28vw] md:text-[20vw] text-accent/50 leading-none select-none">
            Always
          </h1>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6 animate-ink-reveal">
          A Digital Love Experience
        </p>

        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl italic text-balance leading-[0.95] max-w-4xl animate-ink-reveal">
          Every Love Story Deserves a{" "}
          <span className="block">Beautiful Beginning</span>
        </h2>

        {/* 3D Floating Invitation */}
        <div className="relative mt-20 [perspective:1200px]">
          <div
            className="absolute -inset-16 blur-3xl rounded-full -z-10"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, oklch(0.732 0.105 80 / 0.25), oklch(0.92 0.035 20 / 0.35), transparent 70%)",
            }}
          />
          <article className="floating-card relative w-[300px] md:w-[340px] aspect-[3/4] bg-card rounded-sm shadow-[0_50px_120px_-20px_oklch(0.732_0.105_80/0.35)] border-[12px] border-primary/25 flex flex-col items-center justify-center p-8">
            <div className="absolute inset-2 border border-primary/40 pointer-events-none" />
            <p className="font-serif text-[10px] tracking-[0.35em] mb-4 text-primary uppercase">
              Save the Date
            </p>
            <div className="w-12 h-px bg-primary/40 mb-8" />
            <h3 className="font-script text-5xl md:text-6xl text-foreground mb-3 leading-none">
              Aria &amp; Elias
            </h3>
            <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/60">
              October 24, 2025
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/60 mt-1">
              Lake Como, Italy
            </p>
            <div className="mt-10 flex flex-col items-center">
              <div className="w-12 h-12 border border-primary/30 rounded-full grid place-items-center">
                <div className="size-7 bg-accent/60 rounded-[2px] ring-1 ring-foreground/10" />
              </div>
              <span className="text-[8px] uppercase tracking-[0.25em] mt-2 text-foreground/40">
                Scan to Open
              </span>
            </div>
          </article>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-16">
          <button className="px-8 py-4 bg-foreground text-background rounded-full text-[11px] uppercase tracking-[0.25em] hover:bg-primary transition-colors">
            Create Your Invitation
          </button>
          <button className="px-8 py-4 border border-foreground/20 rounded-full text-[11px] uppercase tracking-[0.25em] hover:bg-accent transition-colors">
            Explore Templates
          </button>
        </div>
      </section>

      {/* Template Gallery */}
      <section id="templates" className="relative py-32 bg-accent/25">
        <div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-3 block">
              Collection 01
            </span>
            <h2 className="font-serif text-4xl md:text-6xl italic">
              Signature Aesthetics
            </h2>
          </div>
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.25em] border-b border-foreground/20 pb-1 self-start md:self-end"
          >
            View all 42 designs →
          </a>
        </div>

        <div className="flex gap-6 md:gap-8 px-6 md:px-12 overflow-x-auto py-12 snap-x snap-mandatory">
          {TEMPLATES.map((t) => (
            <article
              key={t.name}
              className={`group cursor-pointer min-w-[280px] md:min-w-[360px] bg-card ring-1 ring-foreground/5 transition-all duration-700 hover:-translate-y-3 snap-start ${t.offset}`}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={t.img}
                  alt={t.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-2xl italic">{t.name}</h4>
                <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50 mt-2">
                  {t.tag}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Love Story Timeline */}
      <section id="story" className="max-w-4xl mx-auto py-32 md:py-40 px-6 md:px-8">
        <div className="text-center mb-20 md:mb-24">
          <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4 block">
            The Love Experience
          </span>
          <h2 className="font-serif text-5xl md:text-6xl italic">
            The Architecture of Us
          </h2>
          <p className="text-foreground/60 mt-6 max-w-md mx-auto leading-relaxed">
            More than a card. An interactive journey for your guests to relive every
            heartbeat — in cinematic 3D.
          </p>
        </div>

        <div className="relative border-l border-primary/25 pl-10 md:pl-12 space-y-24 md:space-y-32">
          {STORY.map((s) => (
            <div key={s.title} className="relative">
              <div className="absolute -left-[46px] md:-left-[53px] top-2 size-2 bg-primary rounded-full ring-8 ring-background" />
              <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
                {s.date}
              </span>
              <h3 className="font-serif text-3xl md:text-5xl italic mt-3">
                {s.title}
              </h3>
              <p className="text-foreground/60 mt-5 leading-relaxed max-w-xl">
                {s.body}
              </p>
              {s.img && (
                <div className="mt-8 overflow-hidden rounded-sm ring-1 ring-foreground/10">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 md:px-8 bg-accent/15">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4 block">
              Investment
            </span>
            <h2 className="font-serif text-5xl md:text-6xl italic">
              Choose Your Legacy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Basic */}
            <PriceCard
              tier="The Classic"
              price="$199"
              features={[
                "Interactive Digital Card",
                "Basic Guest RSVP",
                "3-Photo Gallery",
                "Standard Lighting FX",
              ]}
            />

            {/* Premium (centerpiece) */}
            <article className="relative md:-mt-6 p-10 md:p-12 bg-foreground text-background rounded-sm shadow-[0_40px_100px_-20px_oklch(0.732_0.105_80/0.4)] flex flex-col">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-foreground px-5 py-1.5 text-[9px] font-medium uppercase tracking-[0.3em] rounded-full">
                Most Immersive
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
                Premium Luxury
              </p>
              <div className="font-serif text-5xl mb-2">$1,200</div>
              <p className="text-[10px] italic uppercase tracking-[0.25em] text-background/50 mb-10">
                bespoke design
              </p>
              <ul className="space-y-3 text-sm text-background/85 mb-12 flex-grow">
                {PREMIUM_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="size-1 bg-primary rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-primary text-foreground rounded-full text-[11px] uppercase tracking-[0.25em] hover:opacity-90 transition-opacity font-medium">
                Begin Your Design
              </button>
            </article>

            {/* Standard */}
            <PriceCard
              tier="The Modern"
              price="$549"
              features={[
                "3D Card Experience",
                "Full Guestbook",
                "12-Photo Gallery",
                "RSVP Analytics",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border px-6 md:px-8 flex flex-col items-center">
        <p className="font-script text-5xl text-primary/70 mb-8">Aeterna</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Concierge</a>
        </div>
        <p className="mt-12 text-[9px] tracking-[0.25em] uppercase font-mono text-foreground/30">
          © 2025 Aeterna · Crafted for the Unforgettable
        </p>
      </footer>
    </main>
  );
}

function PriceCard({
  tier,
  price,
  features,
}: {
  tier: string;
  price: string;
  features: string[];
}) {
  return (
    <article className="p-10 bg-card border border-border rounded-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-6">
        {tier}
      </p>
      <div className="font-serif text-4xl mb-2">{price}</div>
      <p className="text-[10px] italic uppercase tracking-[0.25em] text-foreground/40 mb-10">
        starting at
      </p>
      <ul className="space-y-3 text-sm text-foreground/70 mb-12 flex-grow">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3">
            <span className="size-1 bg-primary rounded-full flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <button className="w-full py-4 border border-foreground/15 rounded-full text-[11px] uppercase tracking-[0.25em] hover:bg-accent transition-colors">
        Select
      </button>
    </article>
  );
}
