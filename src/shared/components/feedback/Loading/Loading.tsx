import { Spinner } from "@/shared/components/ui";

interface LoadingProps {
  message?: string;
}

export function Loading({
  message = "Loading...",
}: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10">
      <Spinner size="lg" />
      <p className="text-sm text-gray-500">
        {message}
      </p>
    </div>
  );
}