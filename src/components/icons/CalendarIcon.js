'use server'
// src/components/icons/CalendarIcon.jsx

export default async function CalendarIcon(props) {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 18 18" {...props}>
      <path d="M6 1.5V4.5" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M12 1.5V4.5" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M2.25 7.5H15.75" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
    </svg>
  );
}