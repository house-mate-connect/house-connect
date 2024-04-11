import React, { ComponentProps, ReactNode } from 'react';

import cn from '@/libs/cn';

export type ButtonProps = ComponentProps<'button'>;
export type ButtonType = 'Fill' | 'Outline' | 'Ghost';

type ButtonComponentProps = {
  [key in ButtonType]: (props: ButtonProps) => ReactNode;
};

const buttonType: { type: ButtonType; defaultClassName: string }[] = [
  {
    type: 'Fill',
    defaultClassName:
      'group flex items-center border border-brown bg-brown hover:bg-bg',
  },
  {
    type: 'Outline',
    defaultClassName:
      'group flex bg-bg items-center border-brown border hover:bg-brown',
  },
  {
    type: 'Ghost',
    defaultClassName: 'group items-center flex bg-transparent',
  },
];

const Button = {} as ButtonComponentProps;

buttonType.forEach(({ type, defaultClassName }) => {
  Button[type] = ({ children, className, ...others }: ButtonProps) =>
    React.createElement(
      'button',
      {
        className: `${defaultClassName} ${cn(className)}`,
        type: 'button',
        ...others,
      },
      children,
    );
});

export default Button;