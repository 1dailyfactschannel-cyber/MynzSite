import LeadForm from "./LeadForm";

export default function Cta() {
  return (
    <section id="cta" className="relative mx-auto max-w-6xl px-5 pb-24 pt-8">
      <div className="glass-strong relative overflow-hidden px-6 py-14 text-center md:px-16">
        <div className="glow left-1/2 top-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Узнайте о запуске <span className="text-gradient">первым</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Цена будет объявлена до запуска. Оставьте email — сообщим первым.
          </p>
          <div className="relative mx-auto mt-8 flex max-w-md justify-center">
            <LeadForm source="cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
