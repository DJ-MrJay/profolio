import { cn } from "../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("max-w-[1290px] mx-auto px-[5vw]", className)}
      {...props}
    >
      {children}
    </div>
  );
}
