import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContainerNarrow({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("w-full max-w-[90%] sm:max-w-[70%] mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
}
