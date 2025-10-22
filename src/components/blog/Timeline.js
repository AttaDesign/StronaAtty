// src/components/blog/Timeline.jsx

// Ten komponent to prosty wrapper, który nadaje główną klasę.
export default function Timeline({ children }) {
  return (
    <div className="timeline">
      {children}
    </div>
  );
}