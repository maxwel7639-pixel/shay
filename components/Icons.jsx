/* Ícones de traço, viewBox 24x24 consistente. Nada de emoji. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

export function WhatsAppIcon({ size = 24, className }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}
      fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.74.46 3.44 1.32 4.94L2.05 22l5.34-1.4a9.83 9.83 0 0 0 4.65 1.18h.01c5.43 0 9.86-4.43 9.86-9.87A9.8 9.8 0 0 0 19 4.88 9.8 9.8 0 0 0 12.04 2Zm0 1.79c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.46-3.63 8.08-8.09 8.08a8.07 8.07 0 0 1-4.11-1.13l-.3-.17-3.05.8.81-2.97-.19-.31a8.03 8.03 0 0 1-1.24-4.31c0-4.46 3.63-8.08 8.08-8.08Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinIcon({ size = 24, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M20 10.5c0 5.2-6.3 10.6-7.5 11.6a.8.8 0 0 1-1 0C10.3 21.1 4 15.7 4 10.5a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10.3" r="2.9" />
    </svg>
  );
}

export function CardIcon({ size = 24, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.8h19" />
      <path d="M6.2 15h3.4" />
    </svg>
  );
}

export function CashIcon({ size = 24, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="2.5" y="6" width="19" height="12" rx="2.2" />
      <circle cx="12" cy="12" r="2.7" />
      <path d="M6 9.6v4.8M18 9.6v4.8" />
    </svg>
  );
}

export function PixIcon({ size = 24, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 3.6 20.4 12 12 20.4 3.6 12 12 3.6Z" />
      <path d="M9.1 9.1 12 12l2.9-2.9M9.1 14.9 12 12l2.9 2.9" />
    </svg>
  );
}

export function ClockIcon({ size = 24, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 7.2V12l3.1 1.9" />
    </svg>
  );
}

export function PetalIcon({ size = 24, className }) {
  return (
    <svg
      viewBox="0 0 24 24" width={size} height={size} className={className}
      fill="currentColor" aria-hidden="true" focusable="false"
    >
      <path d="M12 3.5c2.8 3.2 4.2 6.2 4.2 9 0 3-1.4 5.5-4.2 7.6-2.8-2.1-4.2-4.6-4.2-7.6 0-2.8 1.4-5.8 4.2-9Z" />
    </svg>
  );
}

export function ArrowIcon({ size = 24, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M5 12h13.5M13 6.5 18.5 12 13 17.5" />
    </svg>
  );
}

export function SparkIcon({ size = 24, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M12 3.2c.7 4.4 1.8 5.5 6.2 6.2-4.4.7-5.5 1.8-6.2 6.2-.7-4.4-1.8-5.5-6.2-6.2 4.4-.7 5.5-1.8 6.2-6.2Z" />
      <path d="M17.8 15.4c.36 2.2.9 2.74 3.1 3.1-2.2.36-2.74.9-3.1 3.1-.36-2.2-.9-2.74-3.1-3.1 2.2-.36 2.74-.9 3.1-3.1Z" />
    </svg>
  );
}
