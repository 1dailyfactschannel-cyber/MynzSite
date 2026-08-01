import Image from "next/image";

const nav = [
  { href: "#features", label: "Возможности" },
  { href: "#security", label: "Безопасность" },
  { href: "#compare", label: "Сравнение" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="glass-strong sticky top-3 z-50 mx-auto mt-3 flex max-w-6xl items-center justify-between px-5 py-3">
      <a href="#top" className="flex items-center gap-2.5">
        <Image src="/icon.svg" alt="Mynx" width={28} height={28} />
        <span className="text-lg font-bold tracking-tight">Mynx</span>
      </a>
      <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-white">
            {item.label}
          </a>
        ))}
      </nav>
      <a href="#cta" className="btn-primary !px-4 !py-2">
        Ранний доступ
      </a>
    </header>
  );
}
