import React from 'react';

type Props = {
  onClick: () => void;
  buttonName: string;
  appearance?: 'outlined';
  className?: string;
};

const Button = ({ onClick, buttonName, appearance, className }: Props) => {
  const classes: string[] = [];

  className && classes.push(className);

  appearance === 'outlined' && classes.push('bg-white border border-stone-800');

  return (
    <button
      onClick={onClick}
      className={`text-2xl font-bold w-60 h-10 rounded-lg ${classes.join(' ')}`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
