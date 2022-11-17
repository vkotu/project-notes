const Loading = ({ loading = true }) => {
  if (!loading) return null;

  return (
    <div className="flex items-center w-full h-full text-lg font-bold animate-pulse place-content-center bg-primary-200 text-primary-900">
      Loading…
    </div>
  );
};

export default Loading;
