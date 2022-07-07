/*
 * Checkbox
 */

import { SCheckbox } from './styles';
import { CheckboxProps } from './types';
import { FaCheck } from 'react-icons/fa';

const Checkbox = (props: CheckboxProps) => {
  const { checked, label, onChange } = props;

  return (
    <SCheckbox onClick={onChange} checked={checked}>
      <div className="checkbox">
        <FaCheck
          color={checked ? 'white' : 'transparent'}
          size={8}
          style={{ minWidth: '8px' }}
        />
      </div>
      {label && <span className="label">{label}</span>}
    </SCheckbox>
  );
};

export default Checkbox;
Checkbox.displayName = Checkbox;
