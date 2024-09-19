export function LoadingBar() {
  return (
    <div className="fixed top-0 inset-x-0 h-1">
      <div className="h-full bg-gray-600 animate-progress origin-left-right" />
    </div>
  );
}
