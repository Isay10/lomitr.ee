import React, { useState } from "react";

const initialLinks = [
    { id: 1, url: <a href="www.google.com" target ="_blank">Google</a> },
    { id: 2, url: <a href="www.facebook.com">Facebook</a> },
    { id: 3, url: <a href="www.instagram.com">Instagram</a> },
  ]


const Links = () => {
  const [links, setLinks] = useState(initialLinks);

  return (
    <div className="links-container">
      <ul className="links-list">
        {links.map((link: { id: number, url: JSX.Element }) => (
          <li key={link.id}>{link.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
