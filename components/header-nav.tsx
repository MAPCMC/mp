import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function HeaderNav() {
  return (
    <Breadcrumb className="relative ml-10">
      <div className="absolute -left-8 bottom-2 h-12 w-4 rounded border-b-2 border-l-2 border-orange-500"></div>
      <BreadcrumbList>
        <BreadcrumbItem className="pl-3">
          <span className="absolute -left-3 block h-2 w-2 rounded-full bg-orange-500 outline outline-2 outline-offset-4 outline-orange-500"></span>
          <BreadcrumbPage>Home</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
