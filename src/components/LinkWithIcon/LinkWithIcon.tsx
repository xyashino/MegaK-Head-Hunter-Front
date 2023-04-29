 
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import { IconProps } from '@material-ui/core/Icon';

interface LinkProps {
  to: string;
  icon: IconProps['children'];
  text: string;
}

export const LinkWithIcon: React.FC<LinkProps> = ({ to, icon, text }) => {
  return (
    <Link to={to}>
      <Icon>{icon}</Icon>
      {text}
    </Link>
  );
};
 