import React from 'react'

function Loading() {
  return (
    <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Loading job data...</p>
        </div>
  )
}

export default Loading