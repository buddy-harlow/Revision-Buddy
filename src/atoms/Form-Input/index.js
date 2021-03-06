import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, StyledInput } from './Form-InputElements'

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
      : null}

  </FormGroup>
)

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,

}

export default FormInput
