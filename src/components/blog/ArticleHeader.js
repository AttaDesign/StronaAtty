// src/components/blog/ArticleHeader.jsx

import UserIcon from '@/components/icons/UserIcon';
import CalendarIcon from '@/components/icons/CalendarIcon';
import ClockIcon from '@/components/icons/ClockIcon';

// Mały sub-komponent dla tagu
function Tag({ text, colorClass }) {
  return <div className={`tag ${colorClass}`}>{text}</div>;
}

// Mały sub-komponent dla meta-danych
function MetaItem({ icon: Icon, text }) {
  return (
    <div className="meta-item">
      <div className="meta-icon">
        <Icon />
      </div>
      <span>{text}</span>
    </div>
  );
}

export default function ArticleHeader({ title, tags, author, date, readTime }) {
  return (
    <div className="article-header">
      <div className="tags">
        {tags.map((tag) => (
          <Tag key={tag.text} text={tag.text} colorClass={tag.colorClass} />
        ))}
      </div>

      <h1 className="article-title">{title}</h1>

      <div className="article-meta">
        <MetaItem icon={UserIcon} text={author} />
        <MetaItem icon={CalendarIcon} text={date} />
        <MetaItem icon={ClockIcon} text={readTime} />
      </div>
    </div>
  );
}