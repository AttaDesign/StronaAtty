'use server'
// src/components/icons/UserIcon.jsx
// (poprawione atrybuty SVG na camelCase)

export default async function UserIcon(props) {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 18 18" {...props}>
      <path d="M14.25 15.75V14.25C14.25 13.4544 13.9339 12.6913 13.3713 12.1287C12.8087 11.5661 12.0456 11.25 11.25 11.25H6.75C5.95435 11.25 5.19129 11.5661 4.62868 12.1287C4.06607 12.6913 3.75 13.4544 3.75 14.25V15.75" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      <path d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
    </svg>
  );
}