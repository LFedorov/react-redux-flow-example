// @flow

import './Button.css';
import React from 'react';
import cn from 'classnames';

type ButtonProps = {
  children?: any,
  className?: string,
};

export class Button extends React.Component<ButtonProps> {
  render() {
    const { children, className, ...rest } = this.props;
    const buttonClass = cn('btn', className);

    return (
      <button className={buttonClass} {...rest}>
        {children}
      </button>
    );
  }
}
