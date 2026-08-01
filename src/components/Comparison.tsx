import { Check, X } from "lucide-react";

const products = ["Mynx", "1Password", "Bitwarden", "NordPass"] as const;

// true — есть, false — нет
const rows: { label: string; values: [boolean, boolean, boolean, boolean] }[] = [
  { label: "Работает полностью офлайн", values: [true, false, false, false] },
  { label: "Без аккаунта", values: [true, false, false, false] },
  { label: "Без подписки (разовая покупка)", values: [true, false, false, false] },
  { label: "Автоввод в любое приложение", values: [true, false, false, false] },
  { label: "Ложное хранилище", values: [true, false, false, false] },
  { label: "Ключ на флешке", values: [true, false, true, false] },
  { label: "TOTP внутри записей", values: [true, true, true, true] },
];

function Mark({ value }: { value: boolean }) {
  return value ? (
    <Check className="mx-auto h-5 w-5 text-primary" strokeWidth={2.5} aria-label="да" />
  ) : (
    <X className="mx-auto h-5 w-5 text-dim" strokeWidth={2} aria-label="нет" />
  );
}

export default function Comparison() {
  return (
    <section id="compare" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="text-3xl font-bold tracking-tight">Сравнение с облачными менеджерами</h2>
      <p className="mt-3 max-w-xl text-muted">
        Облачные сервисы хранят ваши пароли на своих серверах. Mynx — только на вашем ПК.
      </p>
      <div className="glass mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="px-5 py-4 font-medium text-muted" />
              {products.map((p, i) => (
                <th
                  key={p}
                  className={`px-4 py-4 text-center font-semibold ${i === 0 ? "text-primary" : ""}`}
                >
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-white/5 last:border-0">
                <td className="px-5 py-3.5 text-muted">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i} className={`px-4 py-3.5 ${i === 0 ? "bg-primary/[0.06]" : ""}`}>
                    <Mark value={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
