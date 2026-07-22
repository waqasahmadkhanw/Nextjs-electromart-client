import { HTMLAttributes } from "react";

export function Table({
  className = "",
  ...props
}: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto">
      <table
        className={`min-w-full border-collapse ${className}`}
        {...props}
      />
    </div>
  );
}

export function TableHead(
  props: HTMLAttributes<HTMLTableSectionElement>
) {
  return <thead className="bg-gray-50" {...props} />;
}

export function TableBody(
  props: HTMLAttributes<HTMLTableSectionElement>
) {
  return <tbody {...props} />;
}

export function TableRow(
  props: HTMLAttributes<HTMLTableRowElement>
) {
  return (
    <tr
      className="border-b last:border-none"
      {...props}
    />
  );
}

export function TableHeader(
  props: HTMLAttributes<HTMLTableCellElement>
) {
  return (
    <th
      className="px-4 py-3 text-left text-sm font-semibold"
      {...props}
    />
  );
}

export function TableCell(
  props: HTMLAttributes<HTMLTableCellElement>
) {
  return (
    <td
      className="px-4 py-3 text-sm"
      {...props}
    />
  );
}