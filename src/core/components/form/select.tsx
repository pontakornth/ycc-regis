import React from 'react'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from '@chakra-ui/core'

import { IFormSelectProps } from '../../@types/IFormSelectProps'

const FormSelect: React.FC<IFormSelectProps> = props => {
  const { name, formik, options, title, isRequired } = props

  return (
    <FormControl
      isInvalid={
        formik.errors[name] !== undefined && formik.touched[name] !== undefined
      }
      isRequired={isRequired}>
      <FormLabel htmlFor={name}>{title}</FormLabel>
      <Select
        placeholder=''
        id={name}
        onChange={formik.handleChange}
        value={formik.values[name]}>
        <option value='' />
        {Object.keys(options).map(key => (
          <option key={`selector-${name}-option-${key}`} value={key}>
            {options[key]}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{formik.errors[name]}</FormErrorMessage>
    </FormControl>
  )
}

export default FormSelect
