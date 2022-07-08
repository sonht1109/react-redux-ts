import styled from 'styled-components';
import { CheckboxProps } from './types';

type CheckboxStyleProps = Exclude<CheckboxProps, 'onChange'>;

export const SCheckbox = styled.div<CheckboxStyleProps>`
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.15s ease-out;
  width: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  border-color: ${({ checked, activeColor, color }) =>
    checked ? activeColor : color};
  border-width: ${({ checked, size = 16, borderWidth }) =>
    checked ? size / 2 : borderWidth}px;
  border-style: solid;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  &:hover {
    border-color: ${({ activeColor }) => activeColor};
  }
`;
