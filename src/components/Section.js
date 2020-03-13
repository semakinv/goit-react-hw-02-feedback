import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
