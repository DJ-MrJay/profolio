import { cn } from "@/lib/utils";

type DotBackgroundProps = {
  className?: string;
};

export function DotBackground({ className }: DotBackgroundProps) {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(var(--grey-color)_1px,transparent_1px)]",
          className
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--background-color)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,var(--background-color))] -z-10" />
    </>
  );
}
