/*
 * Checkbox
 */

import { SCheckbox } from './styles';
import { CheckboxProps } from './types';
import { FaCheck } from 'react-icons/fa';

const Checkbox = (props: CheckboxProps) => {
  const {
    checked = false,
    activeColor = '#00cb82',
    borderWidth = 1,
    color = '#9ab1cc',
    size = 16,
    onChange,
    borderRadius,
  } = props;

  return (
    <SCheckbox
      onClick={() => onChange?.(!checked)}
      {...{ activeColor, color, size, borderWidth, checked, borderRadius }}
    >
      <FaCheck
        color={checked ? 'white' : 'transparent'}
        size={size / 2}
        style={{ minWidth: size / 2 + 'px' }}
      />
    </SCheckbox>
  );
};

export default Checkbox;
Checkbox.displayName = Checkbox;
