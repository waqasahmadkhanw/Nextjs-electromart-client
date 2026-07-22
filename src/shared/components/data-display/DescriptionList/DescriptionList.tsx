import { ReactNode } from "react";

interface Item {
  label: string;
  value: ReactNode;
}

interface DescriptionListProps {
  items: Item[];
}

export function DescriptionList({
  items,
}: DescriptionListProps) {
  return (
    <dl className="divide-y rounded-lg border">
      {items.map((item) => (
        <div
          key={item.label}
          className="grid grid-cols-2 p-4"
        >
          <dt className="font-medium">
            {item.label}
          </dt>

          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}