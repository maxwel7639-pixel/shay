/* Flor de lótus redesenhada a partir do letreiro dourado do espaço:
   pétala central, dois pares laterais e duas folhas com caule. Só contorno. */
export default function Lotus({ size = 32, className, strokeWidth = 1.6 }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* pétala central */}
      <path d="M32 6c4.4 5.2 6.4 11 6.4 16.6 0 5.6-2 10.4-6.4 14.4-4.4-4-6.4-8.8-6.4-14.4C25.6 17 27.6 11.2 32 6Z" />
      {/* pétalas internas */}
      <path d="M32 37.4c-5-1.2-9-4-11.6-8.2-2.6-4.2-3.4-9-2.4-14.2 4.8 1.6 8.5 4.4 11 8.2 2.5 3.8 3.6 8.5 3 14.2Z" />
      <path d="M32 37.4c5-1.2 9-4 11.6-8.2 2.6-4.2 3.4-9 2.4-14.2-4.8 1.6-8.5 4.4-11 8.2-2.5 3.8-3.6 8.5-3 14.2Z" />
      {/* pétalas externas */}
      <path d="M32 38c-6.2.6-11.6-.8-16-4.2-4.4-3.4-7-8.2-8-14.4 5.6-.4 10.6 1 14.8 4.2 4.2 3.2 7 7.9 9.2 14.4Z" />
      <path d="M32 38c6.2.6 11.6-.8 16-4.2 4.4-3.4 7-8.2 8-14.4-5.6-.4-10.6 1-14.8 4.2C37 26.8 34.2 31.5 32 38Z" />
      {/* folhas + caule */}
      <path d="M32 38v18" />
      <path d="M31.4 45c-3-3.4-7-5.2-12-5.4 1.4 4.6 4.2 7.4 8.4 8.4 1.4.3 2.6.3 3.6 0" />
      <path d="M32.6 50.5c3-3.4 7-5.2 12-5.4-1.4 4.6-4.2 7.4-8.4 8.4-1.4.3-2.6.3-3.6 0" />
    </svg>
  );
}
