import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
  hint?: string | null;
  /** error message — also recolors the border petal-deep */
  error?: string | null;
}

/** Labelled text input with petal focus ring, for booking & contact forms. */
export function Input(props: InputProps): JSX.Element;
