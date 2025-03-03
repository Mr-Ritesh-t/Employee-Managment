import { useState } from "react";

function Login({ handleLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");
    if (!formData.email.includes("@")) {
      setError("Invalid email address");
      return;
    }
    setIsSubmitting(true);
    handleLogin(formData.email, formData.password);
    setFormData({ email: "", password: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900 relative">
      {/* Admin Credentials Box */}
      <div className="absolute top-4 right-4 bg-gray-800 text-white p-3 rounded-md shadow-lg text-sm">
        <p className="font-semibold">Admin Login:</p>
        <p>Email: <span className="font-mono">admin@example.com</span></p>
        <p>Password: <span className="font-mono">123</span></p>
        <p className="text-xs text-gray-400 mt-1">Use these to login as admin</p>
      </div>

      <div className="bg-gray-800 p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-5">
          Login
        </h2>
        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}
        <form onSubmit={submitHandler} className="flex flex-col space-y-4">
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-600 rounded-lg py-3 px-4 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <div className="relative w-full">
            <input
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg py-3 px-4 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400 pr-10"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400 hover:text-white"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <button
            className="w-full bg-emerald-500 hover:bg-emerald-600 transition-all rounded-lg py-3 text-white font-semibold mt-3 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
