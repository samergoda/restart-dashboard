export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 font-sans text-gray-800">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center ">
        <h1 className="mb-4 text-3xl font-bold text-blue-600">Loading...</h1>

        {/* Simple CSS Spinner */}
        <div className="flex justify-center items-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-blue-200 border-t-blue-600"></div>
        </div>
      </div>
    </div>
  );
}
