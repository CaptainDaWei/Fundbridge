export default function ApplicationPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Application Dashboard</h1>
      <p className="mb-4">Welcome to the application dashboard!</p>
      
      <div className="mt-8">
        <a 
          href="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
