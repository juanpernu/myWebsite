import React from 'react';

import Linkedin from './linkedin';
import Github from './github';
import Instagram from './instagram';

const icons = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
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
