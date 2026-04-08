export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-center items-center  border-b-2">
      <h2 className="text-2xl font-bold text-blue-600  px-5">My TradeBook</h2>
      <ul className="flex gap-6 px-5">
        <li>
          <a href="/" className="hover:text-blue-600">Home</a>
        </li>
        <li>
          <a href="/features" className="hover:text-blue-600">Features</a>
        </li>
        <li>
          <a href="/pricing" className="hover:text-blue-600">Pricing</a>
        </li>
        <li>
          <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Login/signup
          </a>
        </li>
      </ul>
    </nav>
  );
}
