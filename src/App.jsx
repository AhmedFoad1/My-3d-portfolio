import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Oops! Something went wrong:</strong>
      <pre className="mt-2 text-sm">{error.message}</pre>
    </div>
  );
}

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className=' mx-auto'>
        <Navbar/>
        <Hero/>
      </main>
    </ErrorBoundary>
  )
}

export default App

