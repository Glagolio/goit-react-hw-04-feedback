import React from 'react';
import PropTypes from 'prop-types';
import Warning from './Notification.styled';

const Notification = ({ text }) => <Warning>{text}</Warning>;

export default Notification;

Notification.prototype = {
  text: PropTypes.string,
};
