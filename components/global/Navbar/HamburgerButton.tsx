import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  className?: string
}

export function HamburgerButton({
  className,
  active,
  setActive,
}: Props): JSX.Element {
  return (
    <button
      onClick={() => setActive((pv) => !pv)}
      className={clsx(
        'relative h-11 w-11 rounded-full flex flex-col gap-1 items-center justify-center shrink-0',
        active ? 'bg-primary-dark ' : 'bg-foreground',
        className,
      )}
    >
      <span
        className={clsx(
          'block h-0.5 w-5 absolute -translate-y-1/2 left-1/2 -translate-x-1/2',
          active
            ? 'bg-background rotate-45 top-1/2'
            : 'bg-primary-light top-[35%]',
        )}
      />
      <span
        className={clsx(
          ' absolute block h-0.5 w-5 -translate-y-1/2 left-1/2 top-1/2 -translate-x-1/2',
          active ? 'bg-foreground -rotate-45' : 'bg-primary-light',
        )}
      />

      <span
        className={clsx(
          'absolute block h-0.5 w-5 left-1/2 -translate-x-1/2',
          active
            ? 'bg-foreground rotate-45 top-1/2 -translate-y-1/2'
            : 'translate-y-0 bg-primary-light top-[65%]',
        )}
      />
    </button>
  )
}
