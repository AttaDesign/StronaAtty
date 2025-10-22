// src/components/blog/AuthorBio.jsx

import AuthorAvatarIcon from '@/components/icons/AuthorAvatarIcon';

export default function AuthorBio({ name, bio }) {
  return (
    <div className="footer-section">
      <div className="author-section">
        <div className="author-avatar">
          <div className="author-icon">
            <AuthorAvatarIcon />
          </div>
        </div>
        <div className="author-info">
          <div className="author-name">{name}</div>
          <div className="author-bio">{bio}</div>
        </div>
      </div>
    </div>
  );
}