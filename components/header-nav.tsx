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
      <div className="absolute -left-8 bottom-2 border-l-2 border-b-2 w-4 border-orange-500 h-12 rounded"></div>
      <BreadcrumbList>
        <BreadcrumbItem className="pl-3">
          <span className="absolute -left-3 block w-2 h-2 rounded-full outline-2 outline-orange-500 outline outline-offset-4 bg-orange-500"></span>
          <BreadcrumbPage>Home</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
