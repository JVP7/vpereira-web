// A small, original chess-grid registration mark. Decorative, not a control.
export default function MicroMark() {
  return (
    <svg className="micro-mark" viewBox="0 0 43 24" width="43" height="24" fill="none" aria-hidden="true">
      <path d="M.5 7V.5H7M.5 17v6.5H7M36 .5h6.5V7M36 23.5h6.5V17" stroke="currentColor" opacity=".6" />
      <g fill="currentColor">
        <path d="M13 4h4v4h-4zM21 4h4v4h-4zM17 8h4v4h-4zM25 8h4v4h-4zM13 12h4v4h-4zM21 12h4v4h-4zM17 16h4v4h-4zM25 16h4v4h-4z" />
      </g>
    </svg>
  );
}
