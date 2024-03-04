import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '../../constants/styles';

export default function CustomLinearGradient({ children, style }) {
  return (
    <LinearGradient
      style={style}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      colors={[Colors.primary, Colors.secondary]}
    >
      {children}
    </LinearGradient>
  );
}
