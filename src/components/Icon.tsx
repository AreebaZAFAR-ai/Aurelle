type Name =
  | "close" | "plus" | "minus" | "cart" | "arrow" | "star" | "menu" | "chevron"
  | "facebook" | "x" | "linkedin" | "pinterest" | "mail" | "phone" | "clock";

const paths: Record<Name, React.ReactNode> = {
  close: <path d="M5 5l14 14M19 5L5 19" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M3 8h18M3 16h18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  cart: (
    <>
      <path d="M3 4h2.2l2.1 10.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.2L20.5 8H6.1" />
      <circle cx="9.5" cy="19.5" r="1.2" />
      <circle cx="17" cy="19.5" r="1.2" />
    </>
  ),
  star: <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z" fill="currentColor" stroke="none" />,
  facebook: <path d="M14 8.5h2.5V5.2H14c-2.2 0-3.8 1.7-3.8 3.9v1.8H8v3.2h2.2V20h3.3v-5.9h2.6l.5-3.2h-3.1V9.3c0-.5.3-.8.5-.8z" />,
  x: <path d="M5 5l14 14M19 5L5 19" />,
  linkedin: (
    <>
      <path d="M7 10v8M7 6.5v.01M11 18v-5c0-1.7 1.2-3 2.8-3s2.7 1.3 2.7 3v5M11 10v8" />
    </>
  ),
  pinterest: <path d="M12 4a7 7 0 0 0-2.6 13.5c0-.6 0-1.4.2-2l1-4.2s-.3-.5-.3-1.3c0-1.2.7-2.1 1.6-2.1.7 0 1.1.6 1.1 1.2 0 .8-.5 1.9-.7 2.9-.2.9.4 1.6 1.3 1.6 1.6 0 2.7-2 2.7-4.4 0-1.8-1.2-3.2-3.5-3.2a4 4 0 0 0-4.1 4c0 .7.2 1.2.5 1.6" />,
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  phone: <path d="M6.5 4h3l1.5 4-2 1.2a10 10 0 0 0 5.8 5.8l1.2-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 5 5.6 1.5 1.5 0 0 1 6.5 4z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2" />
    </>
  ),
};

export function Icon({ name, size = 18, className }: { name: Name; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type IconName = Name;
