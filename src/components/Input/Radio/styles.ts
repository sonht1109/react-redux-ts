import styled from 'styled-components';
import { RadioProps } from './types';

type RadioStyleProps = Exclude<RadioProps, 'checked' | 'onChange'>;

export const SRadio = styled.div<RadioStyleProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  width: fit-content;

  .radio {
    box-sizing: border-box;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    min-width: ${({ size }) => size}px;
    border-radius: 50%;
    background-color: white;
    border: ${({ borderWidth }) => borderWidth}px solid;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      inset: ${({ inset }) => inset}px;
      border-radius: 50%;
      transform: scale(0);
      transition: 0.1s;
      background-color: ${({ color }) => color};
    }
  }
  &:not(.checked) {
    .radio {
      border-color: ${({ color }) => color};
    }
  }
  &:not(.checked) {
    &:hover {
      .radio {
        border-color: ${({ activeColor }) => activeColor};
      }
    }
  }
  &.checked {
    .radio {
      border-color: ${({ activeColor }) => activeColor};
      &:after {
        transform: scale(1);
        background-color: ${({ activeColor }) => activeColor};
      }
    }
  }
`;
