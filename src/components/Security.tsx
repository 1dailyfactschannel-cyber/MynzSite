import { Lock, Cpu, EyeOff, Usb, type LucideIcon } from "lucide-react";

type Item = { icon: LucideIcon; term: string; title: string; text: string };

const items: Item[] = [
  {
    icon: Lock,
    term: "шифрование военного уровня",
    title: "Хранилище под замком",
    text: "Данные зашифрованы современными алгоритмами, которым доверяют банки и государственные структуры. Без вашего пароля хранилище — просто набор байт.",
  },
  {
    icon: Cpu,
    term: "стойкость к перебору",
    title: "Пароль, который не взломать",
    text: "Мастер-пароль превращается в ключ так, что перебор занял бы годы даже на мощнейшем железе. Плюс уникальный ключ вашего устройства — второй независимый фактор.",
  },
  {
    icon: EyeOff,
    term: "чистая память",
    title: "Никаких следов",
    text: "Секреты не попадают в файл подкачки и затираются сразу после использования. Аварийные дампы памяти заблокированы — пароли не утекут даже при сбое.",
  },
  {
    icon: Usb,
    term: "второй фактор",
    title: "Ключ на флешке",
    text: "Файл-ключ на USB-носителе: даже украв мастер-пароль, без вашей флешки хранилище не открыть.",
  },
];

export default function Security() {
  return (
    <section id="security" className="border-y border-white/5 bg-black/30 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight">Безопасность</h2>
        <p className="mt-3 max-w-xl text-muted">
          Серьёзная криптография внутри — простые гарантии снаружи.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.term} className="glass p-6">
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <code className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  {item.term}
                </code>
              </div>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-mono text-sm text-dim">
          ваш мастер-пароль + ключ устройства → шифрование → файл-хранилище только на вашем ПК
        </p>
      </div>
    </section>
  );
}
