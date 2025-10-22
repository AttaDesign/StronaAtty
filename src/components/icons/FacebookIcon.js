// src/components/icons/FacebookIcon.jsx
// Przyjmuje 'className' dzięki {...props}
import Link from "next/link"

export default  function FacebookIcon(props) {
  return (
    <Link href='https://www.facebook.com/inATTADesign' target="_blank" >
      <svg width="7" height="14" fill="none" viewBox="0 0 7 14" {...props}>
        <path d="M4.69711 2.98551V4.85348H7.00721L6.64142 7.36974H4.69711V13.1671C4.30729 13.2212 3.90846 13.2494 3.50362 13.2494C3.03632 13.2494 2.57742 13.2122 2.13054 13.1401V7.36974H3.52859e-05V4.85348H2.13054V2.56793C2.13054 1.14998 3.27958 0 4.69772 0V0.00120283C4.70192 0.00120283 4.70552 0 4.70973 0H7.00781V2.1762H5.50619C5.05991 2.1762 4.69772 2.53849 4.69772 2.98491L4.69711 2.98551Z" fill="#5A0E8F" />
      </svg>
    </Link>
  );
}