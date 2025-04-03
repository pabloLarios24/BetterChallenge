export type ButtonBaseType = 'primary' | 'secondary';
export type ButtonBaseSize = 'small' | 'medium' | 'large';

export interface IButtonBaseProps {
  onPress: () => void;
  type: ButtonBaseType;
  size: ButtonBaseSize;
  disabled?: boolean;
  children?: React.ReactNode;
}
