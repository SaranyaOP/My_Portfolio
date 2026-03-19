import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const successMessage = (
    <div>
      <p className="font-semibold">Message sent successfully!</p>
      <p className="text-sm">I’ll get back to you soon.</p>
    </div>
  );

  const errorMessage = (
    <div>
      <p className="font-semibold">Oops! Message failed</p>
      <p className="text-sm">Please try again or check your connection.</p>
    </div>
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/send-email", form);
      toast.success(successMessage);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
        Contact
      </h2>

      <form
        onSubmit={sendEmail}
        className="max-w-4xl mx-auto space-y-6 dark:text-gray-100"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-md bg-white dark:bg-gray-800"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-md bg-white dark:bg-gray-800"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full p-3 border rounded-md h-32 bg-white dark:bg-gray-800"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-black py-3 rounded-md hover:bg-yellow-500 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              Sending..
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
