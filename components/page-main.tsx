import { cn } from "@/lib/utils";

export function PageMain({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      id="main"
      className={cn(
        "mb-24 flex flex-col items-stretch gap-y-16 px-6 md:ml-[20%] md:w-[80%] lg:ml-0 lg:w-[70%]",
        className,
      )}
    >
      {children}
    </main>
  );
}
