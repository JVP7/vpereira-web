export default function HeroHeading() {
  return (
    <h1 id="intro-title" aria-label="hi, john here.">
      <span className="greeting-line" aria-hidden="true">
        <span className="greeting-type">hi, <span className="greeting-name">john</span> here.</span>
      </span>
    </h1>
  );
}
