import { VFC } from "react";

import type { LabelType } from '../atoms.type'

export const Label: VFC<LabelType> = ({
  htmlFor,
  isRequired = false,
  style = '',
  text
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={`pl-2 ${style}`}>
        {text}
        {isRequired && <span className="inline-block ml-1 text-red-400 text-[2rem]" style={{ transform: 'translateY(-2px)' }}>*</span>}
      </label>
    </>
  )
}