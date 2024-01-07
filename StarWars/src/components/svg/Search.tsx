import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '../../utils/colors.ts';

interface SearchProps {
  size?: number;
  color?: string;
}

const SearchSvg = ({ size = 16, color = colors.black }: SearchProps) => {
  return (
    <Svg width={size} height={size + 6} viewBox='0 0 40 46' fill='none'>
      <Circle
        cx='16.8543'
        cy='23.8488'
        r='14.7027'
        stroke={color}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M26.9624 34.7986L36.1516 43.9879'
        stroke={color}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default SearchSvg;
