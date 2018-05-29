export const required = value => value ? undefined : 'This field is required';

export const notEmpty = value => value.trim() !== '' ? undefined : 'This field cannot be empty';

export const noSpaces = value => value.trim().length === value.length ? undefined : 'May not lead or end with spaces';

export const minLength = value => value.length >= 10 ? undefined : 'Must be at least 8 characters long';

export const maxLength = value => value.length <= 72 ? undefined : 'May not be greater than 72 characters';

export const confirmPassword = (value, allValues) => value === allValues.password ? undefined : 'Passwords must match';
  