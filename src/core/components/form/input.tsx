import React from 'react'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/core'

import { IFormInputProps } from '../../@types/IFormInputProps'

const FormInput: React.FC<IFormInputProps> = props => {
  const {
    name,
    formik,
    placeholder,
    isRequired,
    title,
    maxLength,
    extra,
  } = props

  return (
    <FormControl
      isInvalid={
        formik.errors[name] !== undefined && formik.touched[name] !== undefined
      }
      isRequired={isRequired}>
      <FormLabel htmlFor={name}>{title}</FormLabel>
      <Input
        id={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        placeholder={placeholder ? placeholder : title}
        maxLength={maxLength}
        {...extra}
      />
      <FormErrorMessage>{formik.errors[name]}</FormErrorMessage>
    </FormControl>
  )
}

export default FormInput
