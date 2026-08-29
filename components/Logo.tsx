export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AMTech Scandinavia"
    >
      <text
        x="0"
        y="24"
        fill="#1A1A1A"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-0.4"
      >
        AM
        <tspan fill="#B42318">T</tspan>
        ech
      </text>
      <text
        x="118"
        y="24"
        fill="#5B7C8D"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="11"
        fontWeight="500"
        letterSpacing="2.4"
      >
        SCANDINAVIA
      </text>
    </svg>
  );
}
