import React from 'react';
import PropTypes from 'prop-types';
import Title from './Section.styled';

const Section = ({ title, children }) => (
  <section>
    {title && <Title>{title}</Title>}
    {children}
  </section>
);

export default Section;

Section.prototype = {
  title: PropTypes.string,
};
