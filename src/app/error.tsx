"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  p-4 font-sans text-gray-800">
      <div className="w-full max-w-md rounded-lg  bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-red-600">Oops! Something Went Wrong</h1>

        {/* Display the error message */}
        {error.message && (
          <div className="mb-6 rounded-md p-4 text-sm text-red-700">
            <p className="font-mono break-words">{error.message}</p>
          </div>
        )}

        <Button
          onClick={() => redirect("/dashboard")}
          className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
