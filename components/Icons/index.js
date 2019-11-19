import React from 'react';

import Linkedin from './Linkedin';
import Github from './Github';

const icons = {
  linkedin: Linkedin,
  github: Github,
};

const GeneratedIcon = ({ type, width, height, colorStroke, colorFill }) => {
  const Icon = icons[type];
  return <Icon
    width={width}
    height={height}
    colorStroke={colorStroke}
    colorFill={colorFill}
  />;
};

export default GeneratedIcon;
