import { cn } from "@/lib/utils";

export function PageHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "mb-4 w-full px-6 pt-24 md:ml-[20%] md:w-[80%] lg:ml-0 lg:w-[70%]",
        className,
      )}
    >
      {children}
    </header>
  );
}
