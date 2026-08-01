import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-dim sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/icon.svg" alt="Mynx" width={20} height={20} />
          <span className="font-semibold text-muted">Mynx</span>
          <span>© 2026</span>
        </div>
        <span>Сделано без облака.</span>
      </div>
    </footer>
  );
}
