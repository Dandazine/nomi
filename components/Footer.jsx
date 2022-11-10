import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {date} || Developed by: Danial, Reilly, Jed, and Jalen</p>
    </footer>
  );
};

export default Footer;
