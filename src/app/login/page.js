import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-50 pt-20">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login to MyTradeBook</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input type="password" className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Login
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Don’t have an account? <a href="/signup" className="text-blue-600">Sign up</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
