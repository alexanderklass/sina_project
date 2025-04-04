import React from 'react';
import SlideInAnimation from '@/app/components/SlideInAnimation';

export interface ColorSectionProps {
    children?: React.ReactNode;
    direction: 'col' | 'row' | 'col-reverse';
    color?: string;
}

export default function ColorSection({ children, direction, color, ...props }: ColorSectionProps) {
    const handleDirection = () => {
        switch (direction) {
            case 'col':
                return 'flex-col';
            case 'row':
                return 'flex-col lg:flex-row';
            case 'col-reverse':
                return 'flex-col-reverse lg:flex-row';
        }
    };
    return (
        <SlideInAnimation>
            <section
                {...props}
                className={`${handleDirection()} ${color} flex w-full h-full md:h-screen relative items-center justify-center`}
            >
                {children}
            </section>
        </SlideInAnimation>
    );
}
