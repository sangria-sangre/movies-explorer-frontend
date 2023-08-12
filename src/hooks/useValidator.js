import React from 'react';

export function useValidator(defaultValues = {}, defaultFormValidity = false) {
  const [errors, setErrors] = React.useState({});
  const [values, setValues] = React.useState(defaultValues);
  const [inputVilidities, setInputVilidities] = React.useState({});
  const [isValid, setIsValid] = React.useState(defaultFormValidity);

  const handleChange = ({ target }) => {
    const { name, value, validationMessage, validity, form } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setInputVilidities({ ...inputVilidities, [name]: validity.valid });
    setIsValid(form.checkValidity());
  };

  const resetForm = React.useCallback(
    (newIsValid = false, newValues = {}, newErrors = {}, newInputVilidities = {}) => {
      setValues(newValues);
      setErrors(newErrors);
      setInputVilidities(newInputVilidities);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid, setInputVilidities]
  );

  return { values, handleChange, errors, isValid, resetForm, inputVilidities, setValues };
};