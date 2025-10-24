// src/components/blog/BlogSidebar.jsx

import Link from 'next/link';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

export default function BlogSidebar({opis, telefon}) {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-title">ATTA Design</div>
        <Link className="prtfoadwwdwda" href="/#portfolio" title="portfolio Atta Design" target="blank">
          Portfolio
        </Link>
        <div className="sidebar-text">
          {opis}
        </div>
      </div>
      <div className="sidebar-contact">
        <div>home@attadesign.pl</div>
        <div>{telefon}</div>
        <div className="social-icons">
          {/* Przekazujemy className do komponentów ikon */}
          <FacebookIcon className="social-icon2" />
          <InstagramIcon className="social-icon" />
          <LinkedInIcon className="social-icon" />
        </div>
      </div>
    </div>
  );
}