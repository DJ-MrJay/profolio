import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const containerWidths = {
  wide: "max-w-[1290px]",
  narrow: "max-w-[1032px]",
} as const;

function BaseContainer({
  children,
  className,
  width,
  ...props
}: ContainerProps & { width: keyof typeof containerWidths }) {
  return (
    <div
      className={cn(containerWidths[width], "mx-auto px-[5vw]", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Container(props: ContainerProps) {
  return <BaseContainer width="wide" {...props} />;
}

export function ContainerNarrow(props: ContainerProps) {
  return <BaseContainer width="narrow" {...props} />;
}
