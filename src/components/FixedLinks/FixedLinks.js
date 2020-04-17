import React from "react";
import PropTypes from "prop-types";

import "./FixedLinks.css";

const Link = ({ name, url }) => {
  return (
    <a href={url} 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed-link main-txt sheer-bg-w-hover">
        {name}
    </a>
  );
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const FixedLinks = ({linksArr}) => {
  return (
    <div id="main-links">
      {linksArr.map((link, i) => (
        <Link key={i} name={link.name} url={link.url} />
      ))}
    </div>
  );
};

FixedLinks.propTypes = {
  linksArr: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }
  )).isRequired
};

export default FixedLinks;