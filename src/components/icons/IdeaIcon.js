'use server'
// src/components/icons/IdeaIcon.jsx

export default async function IdeaIcon(props) {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20" {...props}>
      <path d="M12.5 11.6667C12.6667 10.8333 13.0833 10.25 13.75 9.58333C14.5833 8.83333 15 7.75 15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19345 6.46447 3.13113C5.52678 4.06881 5 5.34058 5 6.66667C5 7.5 5.16667 8.5 6.25 9.58333C6.83333 10.1667 7.33333 10.8333 7.5 11.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
      <path d="M7.5 15H12.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
      <path d="M8.33333 18.3333H11.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
    </svg>
  );
}