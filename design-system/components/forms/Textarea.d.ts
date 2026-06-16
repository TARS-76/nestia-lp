import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string | null;
  hint?: string | null;
  error?: string | null;
  rows?: number;
}

/** Multiline text area matching Input styling — for requests & notes. */
export function Textarea(props: TextareaProps): JSX.Element;
