'use server'
// src/components/icons/CodeIcon.jsx

export default async function CodeIcon(props) {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20" {...props}>
      <path d="M13.3333 15L18.3333 10L13.3333 5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
      <path d="M6.66667 5L1.66667 10L6.66667 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
    </svg>
  );
}