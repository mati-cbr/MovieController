import clsx from 'clsx'
import type {LinkProps} from 'react-router'
import {Link as RRLink} from 'react-router'

export const Link = (props: LinkProps) => {
  return (
    <RRLink
      {...props}
      className={clsx(props.className, 'text-blue-700 text-lg font-medium')}
    />
  )
}
