export function buildBreadcrumbs(
  title: string
) {
  return [
    {
      label: "Home",
      href: "/",
    },
    {
      label: title,
      href: "",
    },
  ];
}