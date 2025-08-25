export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-md w-full space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded-lg h-32"
        ></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}
