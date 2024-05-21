import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  onClick?: () => void; 
  selected?: boolean; 
  className?: string;
  disabled?:boolean 
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  selected,
  disabled
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled} 
      className={classNames("px-2 py-1 border border-black text-black	", { 
        "selected": selected, 
      })} 
    >
      {children}
    </button>
  );
};
