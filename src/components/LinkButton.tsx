import { forwardRef } from "react";
import Link from "next/link";
import clsx from "clsx";

import { LinkProps } from "next/link";

export type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    href: string;
  };

const LinkButton = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, href, ...props }, ref) => {
    return (
      <Link
        className={clsx(
          className,
          "inline-flex items-center justify-center h-9 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md shadow transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
        )}
        ref={ref}
        href={href}
        {...props}
      />
    );
  }
);

LinkButton.displayName = "LinkButton";

export default LinkButton;
