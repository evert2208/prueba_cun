import { useEffect, useMemo, useState, ChangeEvent } from 'react';

type ValidationFn<T> = (value: T[keyof T]) => boolean;

type FormValidations<T> = {
  [K in keyof T]?: [ValidationFn<T>, string];
};

type FormValidationState<T> = {
  [K in keyof T as `${string & K}Valid`]?: string | null;
} & {
  [key: string]: string | null | undefined;
};

export const useForm = <T extends Record<string, any>>(
  initialForm: T,
  formValidations: FormValidations<T> = {}
) => {
  const [formValidation, setFormValidation] = useState<FormValidationState<T>>(
    {}
  );
  const [formState, setFormState] = useState<T>(initialForm);

  useEffect(() => {
    createValidators();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] != null) {
        return false;
      }
    }
    return true;
  }, [formValidation]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
  const formCheckValues: any = {};

  for (const formField of Object.keys(formValidations) as (keyof T)[]) {
    const [fn, errorMessage] = formValidations[formField]!;
    formCheckValues[`${String(formField)}Valid`] = fn(formState[formField])
      ? null
      : errorMessage;
  }

  setFormValidation(formCheckValues);
};

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};

