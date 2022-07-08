export interface RadioProps {
  checked?: boolean;
  activeColor?: string;
  color?: string;
  borderWidth?: number;
  size?: number;
  inset?: number;
  onChange?: (val: boolean) => void;
}
