import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile",
  description: "Manage your profile and settings",
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Profile & Settings</h1>
      
      <div className="grid gap-6 md:grid-cols-[250px_1fr]">
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 h-fit">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
              JS
            </div>
            <h2 className="mt-4 text-lg font-medium">John Smith</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Green Earth Initiative</p>
          </div>
          
          <div className="mt-6 space-y-1">
            <button className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium bg-primary/10 text-primary">
              Personal Information
            </button>
            <button className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
              Organization Details
            </button>
            <button className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
              Past Applications
            </button>
            <button className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
              Notifications
            </button>
            <button className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
              Security
            </button>
          </div>
        </div>
        
        <div className="rounded-xl bg-white shadow-sm dark:bg-gray-800">
          <div className="p-6 border-b dark:border-gray-700">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Update your personal details</p>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800" 
                  value="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800" 
                  value="Smith"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800" 
                value="john.smith@greenearth.org"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input 
                type="tel" 
                className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800" 
                value="(555) 123-4567"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Job Title</label>
              <input 
                type="text" 
                className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800" 
                value="Program Director"
              />
            </div>
            
            <div className="pt-4 flex justify-end">
              <button className="rounded-lg bg-primary px-4 py-2 text-white">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 