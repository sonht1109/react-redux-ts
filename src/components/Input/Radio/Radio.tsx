/*
 * Radio
 */

import { SRadio } from './styles';
import { RadioProps } from './types';

const Radio = (props: RadioProps) => {
  const { checked, label, onChange } = props;

  return (
    <SRadio
      className={`${checked ? 'checked' : ''}`}
      {...{ onClick: onChange }}
    >
      <div className="radio"></div>
      <span className="label">{label}</span>
    </SRadio>
  );
};

export default Radio;
Radio.displayName = Radio;
