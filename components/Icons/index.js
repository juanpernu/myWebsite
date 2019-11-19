import React from 'react';

import Linkedin from './linkedin';
import Github from './github';

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
