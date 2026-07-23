import type { FC, ReactNode } from 'react';

interface KeyValueProps {
  label: string;
  children: ReactNode;
}

const KeyValue: FC<KeyValueProps> = ({ label, children }) => (
  <div className="flex items-start gap-2 py-1">
    <dt className="min-w-24 text-sm font-medium text-muted-foreground">{label}</dt>
    <dd className="text-sm">{children}</dd>
  </div>
);

export default KeyValue;

