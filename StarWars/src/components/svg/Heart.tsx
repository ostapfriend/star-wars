import Svg, { G, Path } from 'react-native-svg';
import { colors } from '../../utils/colors.ts';

interface HeartSvgProps {
  size?: number;
  color?: string;
  filled?: boolean,
}

const HeartSvg = ({
  size = 24,
  color = colors.red,
  filled = true
}: HeartSvgProps) => {
  return (
    <Svg width={size} height={size} viewBox='467 392 58 57' fill='none'>
      <G fill='none' transform='translate(467 392)'>
        <Path
          d='M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59'
          fill={filled ? color : 'none'}
          stroke={color}
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
};

export default HeartSvg;
