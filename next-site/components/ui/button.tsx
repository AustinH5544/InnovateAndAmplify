import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default:
                    'border border-primary/40 bg-primary text-primary-foreground shadow-[0_16px_32px_rgba(67,111,255,0.22)] hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/92',
                destructive:
                    'border border-destructive/40 bg-destructive text-white hover:-translate-y-0.5 hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
                outline:
                    'border border-white/12 bg-white/[0.045] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/[0.08] dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
                secondary:
                    'border border-secondary/35 bg-secondary/85 text-secondary-foreground hover:-translate-y-0.5 hover:bg-secondary/75',
                ghost:
                    'border border-transparent text-muted-foreground hover:border-white/10 hover:bg-white/[0.05] hover:text-foreground dark:hover:bg-accent/50',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-11 px-5 py-2.5 has-[>svg]:px-4',
                sm: 'h-9 gap-1.5 px-3.5 has-[>svg]:px-3',
                lg: 'h-12 px-6 text-[0.95rem] has-[>svg]:px-5',
                icon: 'size-9',
                'icon-sm': 'size-8',
                'icon-lg': 'size-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
