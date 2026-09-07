export default function Knight({ className = "" }: { className?: string }) {
  return <svg className={`knight ${className}`} viewBox="0 0 80 100" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 80 C22 65 35 57 34 45 L22 51 12 46 10 39 25 21 29 10 35 16 39 5 45 16 C65 20 71 44 62 77 L60 81 Z" fill="currentColor" />
      <path d="M39 19 C57 24 62 42 53 66 L49 78 M31 24 18 41 24 44 37 34 C46 44 37 60 29 71 M34 14 33 23" stroke="var(--paper)" strokeWidth="2" />
      <path d="m46 22 8 7 m-4 0 8 8 m-6 0 7 9 m-7 0 6 9 m-7 0 5 8" stroke="var(--paper)" strokeWidth="1.4" />
      <path d="M20 82 60 82 65 88 16 89 Z M15 92 66 91 68 96 12 97 Z" fill="currentColor" />
      <path d="m15 87 44-1 M17 95 47 94" stroke="var(--paper)" strokeWidth="1" />
      <path d="m10 49 5 4 m52-40 8 8" strokeWidth="1" />
    </g>
    <circle cx="30" cy="30" r="2" fill="var(--paper)" />
  </svg>;
}
