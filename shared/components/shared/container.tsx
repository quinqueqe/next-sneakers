import { cn } from '@/shared/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return (
		<div className={cn('mx-auto max-w-[1312px] px-4', className)}>
			{children}
		</div>
	)
}
