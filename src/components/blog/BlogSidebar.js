// src/components/blog/BlogSidebar.jsx

import Link from 'next/link';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

export default function BlogSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-title">W ATTA Design</div>
        <Link className="prtfoadwwdwda" href="/#portfolio" title="portfolio Atta Design" target="blank">
          Portfolio
        </Link>
        <div className="sidebar-text">
          Nie tworzymy stron z szablonów, tworzymy indywidualne szablony dla każdego klienta. Nasz proces opiera się na 3 krokach: Analiza i makieta → Projektowanie designu→ Zaimplementowanie panelu administracyjnego
        </div>
      </div>
      <div className="sidebar-contact">
        <div>home@attadesign.pl</div>
        <div>+48 572 057 499</div>
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