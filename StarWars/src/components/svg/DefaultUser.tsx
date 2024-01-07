import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { colors } from "../../utils/colors.ts";

interface DefaultUserSvgSvgProps {
  size?: number,
  type?: "filled" | "unfilled",
  color?: string,
}

const DefaultUserSvg = ({
  size = 24,
  type = "unfilled",
  color = colors.black,
}: DefaultUserSvgSvgProps) => {
  return (
    <Svg width={size} height={size + 3} viewBox="0 0 16 19" fill="none">
      <Circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 12 1)"
        fill={type === "filled" ? color : "none"}
        stroke={color}
        strokeWidth="1.5"
      />
      <Path
        d="M1 14.9347C1 14.0743 1.54085 13.3068 2.35109 13.0175C6.00404 11.7128 9.99596 11.7128 13.6489 13.0175C14.4591 13.3068 15 14.0743 15 14.9347V16.2502C15 17.4376 13.9483 18.3498 12.7728 18.1818L11.8184 18.0455C9.28565 17.6837 6.71435 17.6837 4.18162 18.0455L3.22721 18.1818C2.0517 18.3498 1 17.4376 1 16.2502V14.9347Z"
        fill={type === "filled" ? color : "none"}
        stroke={color}
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export default DefaultUserSvg;
