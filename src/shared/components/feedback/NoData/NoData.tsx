interface NoDataProps {
  message?: string;
}

export function NoData({
  message = "No data found.",
}: NoDataProps) {
  return (
    <div className="flex items-center justify-center py-10">
      <p className="text-sm text-gray-500">
        {message}
      </p>
    </div>
  );
}