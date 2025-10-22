'use server'
// src/components/blog/TimelineItem.jsx
// Zmieniamy ({ icon: Icon }) na ({ children })
export default async function TimelineItem({ number, title, description, icon: Icon }) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon-wrapper">
        <div className="timeline-line"></div>
        <div className="timeline-icon-bg"></div>
        <div className="timeline-icon-container">
          <div className="timeline-icon">
             {/* <div
        dangerouslySetInnerHTML={{ __html: icon }}
      /> */}
      <Icon/>
          </div>
        </div>
      </div>
      <div className="timeline-content">
        <div className="timeline-title-wrapper">
          <div className="timeline-number">{number}</div>
          <h3 className="timeline-heading">{title}</h3>
        </div>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
}