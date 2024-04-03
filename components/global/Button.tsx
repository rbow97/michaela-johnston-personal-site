import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

export default function Button(props: Props): JSX.Element {
  const { className, children, ...buttonProps } = props
  return (
    <button
      className={clsx(
        'flex items-center gap-2 py-2 px-4 rounded-md h-fit w-fit bg-foreground text-sm',
        className,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
