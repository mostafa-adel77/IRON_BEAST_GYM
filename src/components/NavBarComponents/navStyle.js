export const navStyle = ({ isActive }) =>
  `border-b-2 transition-all duration-300 ${
    isActive
      ? "text-white border-red"
      : "text-gray border-dark hover:text-white hover:border-red"
  }`;
