// src/components/blog/InfoBox.jsx

export default function InfoBox({ title, items }) {
  return (
    <div className="info-box">
      <div className="info-box-title">{title}</div>
      <div className="info-box-list">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}