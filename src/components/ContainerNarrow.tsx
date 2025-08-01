import { cn } from "../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContainerNarrow({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("max-w-[1032px] mx-auto px-[5vw]", className)}
      {...props}
    >
      {children}
    </div>
  );
}
