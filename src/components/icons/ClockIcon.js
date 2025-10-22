'use server'
// src/components/icons/ClockIcon.jsx

export default async function ClockIcon(props) {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 18 18" {...props}>
      <g clipPath="url(#clip0)">
        <path d="M9 4.5V9L12 10.5" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect fill="white" height="18" width="18"/>
        </clipPath>
      </defs>
    </svg>
  );
}