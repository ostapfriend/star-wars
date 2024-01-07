import React from 'react';
import { colors } from "../../utils/colors.ts";
import Svg, {Path} from "react-native-svg";

interface ChevronSvgProps {
  size?: number;
  direction?: 'left' | 'right';
  color?: string;
}

const ChevronSvg = ({ size = 24, direction = 'left', color = colors.black }: ChevronSvgProps) => {
  const points =
    direction === "left" ? "M14.5 7L10.2071 11.2929L14.5 15.5858" : "M9.5 7L13.7929 11.2929L9.5 15.5858";

  return (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d={points}
      stroke="#2D2727"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
  );
};

export default ChevronSvg;
