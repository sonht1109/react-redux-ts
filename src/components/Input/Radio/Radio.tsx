/*
 * Radio
 */

import classNames from 'classnames';
import { SRadio } from './styles';
import { RadioProps } from './types';

const Radio = (props: RadioProps) => {
  const {
    checked = false,
    activeColor = '#00cb82',
    borderWidth = 1,
    color = '#9ab1cc',
    size = 16,
    inset = 2,
    onChange,
  } = props;

  return (
    <SRadio
      onClick={() => onChange?.(!checked)}
      className={classNames({ checked })}
      {...{ activeColor, borderWidth, color, size, inset }}
    >
      <div className="radio"></div>
    </SRadio>
  );
};

export default Radio;
Radio.displayName = Radio;
