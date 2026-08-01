const entries = [
  { name: "GitHub", user: "matt@example.com", tag: "Работа", color: "bg-info/20 text-info" },
  { name: "Банк — онлайн", user: "m.petrov", tag: "Финансы", color: "bg-primary/20 text-primary" },
  { name: "Gmail", user: "matt@gmail.com", tag: "Почта", color: "bg-warn/20 text-warn" },
];

export default function AppMock() {
  return (
    <div className="glass-strong overflow-hidden">
      {/* Заголовок окна */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-danger/70" />
        <span className="h-3 w-3 rounded-full bg-warn/70" />
        <span className="h-3 w-3 rounded-full bg-primary/70" />
        <span className="ml-3 text-xs text-dim">Mynx — Хранилище</span>
        <span className="ml-auto rounded-md bg-primary/15 px-2 py-0.5 font-mono text-[10px] text-primary">
          Ctrl+K
        </span>
      </div>
      <div className="flex">
        {/* Сайдбар */}
        <div className="hidden w-40 flex-col gap-1 border-r border-white/10 p-3 text-xs text-muted sm:flex">
          {["Все записи", "Избранное", "Финансы", "Работа", "Корзина"].map((item, i) => (
            <div
              key={item}
              className={`rounded-lg px-3 py-2 ${i === 0 ? "bg-white/[0.06] text-white" : ""}`}
            >
              {item}
            </div>
          ))}
          <div className="mt-auto rounded-lg bg-primary/10 px-3 py-2 text-primary">
            Security Score: 92
          </div>
        </div>
        {/* Список записей */}
        <div className="flex-1 space-y-2 p-3">
          {entries.map((e) => (
            <div key={e.name} className="glass flex items-center gap-3 !rounded-lg px-3 py-2.5">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${e.color}`}>
                {e.name[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium">{e.name}</div>
                <div className="truncate text-xs text-dim">{e.user}</div>
              </div>
              <div className="font-mono text-xs tracking-widest text-muted">••••••••••</div>
            </div>
          ))}
          <div className="glass flex items-center gap-2 !rounded-lg px-3 py-2 font-mono text-[11px] text-dim">
            <span className="text-primary">TOTP</span> 428 913
            <span className="ml-auto">обновится через 12с</span>
          </div>
        </div>
      </div>
    </div>
  );
}
