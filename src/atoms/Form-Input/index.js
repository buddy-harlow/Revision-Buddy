import React from 'react';
import { FormGroup, StyledInput } from './Form-InputElements';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <FormGroup>
        <StyledInput onChange={handleChange} {...otherProps} />

            {label
              ? (
                <label
                className={`${
                otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
            >
            {label}
            </label>
                )
              : null
        }

    </FormGroup>
);

export default FormInput;
