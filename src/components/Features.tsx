import {
  CloudOff,
  Keyboard,
  Chrome,
  EyeOff,
  Usb,
  ClipboardCheck,
  Gauge,
  QrCode,
  FolderLock,
  SlidersHorizontal,
  History,
  Trash2,
  Paperclip,
  CalendarClock,
  Command,
  Tags,
  KeyRound,
  Laptop,
  type LucideIcon,
} from "lucide-react";
import Tilt from "./Tilt";

type Feature = { icon: LucideIcon; title: string; text: string };

const features: Feature[] = [
  {
    icon: CloudOff,
    title: "100% офлайн",
    text: "Файл-хранилище живёт только на вашем компьютере. Без аккаунтов, серверов, телеметрии и подписок.",
  },
  {
    icon: Keyboard,
    title: "Автоввод в любое приложение",
    text: "Ctrl+Alt+A «печатает» логин и пароль напрямую в активное окно — буфер обмена не используется вообще.",
  },
  {
    icon: Chrome,
    title: "Расширение для Chrome",
    text: "Автозаполнение, генератор и одноразовые коды в браузере. Расширение общается с приложением напрямую, без интернета.",
  },
  {
    icon: EyeOff,
    title: "Ложное хранилище",
    text: "Дополнительный сейф со своим паролем: при принуждении вы открываете правдоподобный набор записей, а настоящие данные остаются скрыты.",
  },
  {
    icon: Usb,
    title: "Ключ на флешке",
    text: "Файл-ключ на USB-носителе как второй фактор: без флешки хранилище не открыть, даже зная мастер-пароль.",
  },
  {
    icon: ClipboardCheck,
    title: "Свой защищённый буфер",
    text: "Скопированный пароль автоматически стирается через заданное время и не остаётся в системном буфере обмена.",
  },
  {
    icon: Gauge,
    title: "Security Score",
    text: "Дашборд здоровья паролей: слабые, повторные и скомпрометированные — под контролем.",
  },
  {
    icon: QrCode,
    title: "QR-код для восстановления",
    text: "Аварийный комплект в PDF с QR-кодом: распечатайте и спрячьте — доступ восстановится, даже если всё забудете.",
  },
];

const extras: Feature[] = [
  { icon: FolderLock, title: "Несколько хранилищ", text: "Отдельные сейфы для личного, работы и семьи — каждый со своим паролем." },
  { icon: SlidersHorizontal, title: "Кастомные поля", text: "Текст, скрытые поля, email, ссылки, даты и номера — запись под любую задачу." },
  { icon: History, title: "История паролей", text: "Старые пароли сохраняются — всегда можно откатиться к прежнему." },
  { icon: Trash2, title: "Корзина", text: "Удалённые записи легко восстановить." },
  { icon: Paperclip, title: "Вложения до 300 МБ", text: "Документы и файлы внутри записей, с деревом папок." },
  { icon: CalendarClock, title: "Авто-бэкапы", text: "Резервные копии по расписанию с ротацией старых версий." },
  { icon: Command, title: "Командная палитра", text: "Ctrl+K — любое действие за пару нажатий, не отрывая рук от клавиатуры." },
  { icon: Tags, title: "Теги и избранное", text: "Категории, теги и избранное для мгновенной навигации." },
  { icon: KeyRound, title: "Одноразовые коды", text: "Двухфакторные коды и генератор паролей с индикатором надёжности." },
  { icon: Laptop, title: "Перенос на другой ПК", text: "Зашифрованный экспорт хранилища — откроется только вашим мастер-паролем." },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="text-3xl font-bold tracking-tight">Возможности</h2>
      <p className="mt-3 max-w-xl text-muted">
        Всё, что нужно менеджеру паролей, — без единого байта в чужом облаке.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Tilt key={f.title} max={5} scale={1.02} glare className="h-full rounded-glass">
            <div
              className="glass h-full p-5 transition hover:border-primary/30"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div style={{ transform: "translateZ(26px)" }}>
                <f.icon
                  className="h-6 w-6 text-primary drop-shadow-[0_4px_12px_rgba(16,185,129,0.45)]"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="mt-4 font-semibold" style={{ transform: "translateZ(14px)" }}>
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
            </div>
          </Tilt>
        ))}
      </div>

      <div className="glass mt-6 grid gap-x-8 gap-y-5 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {extras.map((f) => (
          <div key={f.title} className="flex gap-3">
            <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
            <div>
              <h3 className="text-sm font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
