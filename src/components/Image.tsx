import { forwardRef } from "react";
import NextImage from "next/image";
import clsx from "clsx";

import { ImageProps } from "next/image";

export type ButtonProps = React.ImgHTMLAttributes<HTMLImageElement> &
  ImageProps;

const Image = forwardRef<HTMLImageElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <NextImage
        className={clsx(className, "inline-flex items-center justify-center")}
        ref={ref}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export default Image;
