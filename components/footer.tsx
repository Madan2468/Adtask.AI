export function Footer() {
  return (
    <footer className="bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Navigation Links */}
        <nav className="flex space-x-12 text-gray-400 text-lg">
          <a href="#" className="hover:text-white transition-all duration-300">Home</a>
          <a href="#" className="hover:text-white transition-all duration-300">Resources</a>
          <a href="#" className="hover:text-white transition-all duration-300">Pricing</a>
          <a href="#" className="hover:text-white transition-all duration-300">Contact Us</a>
        </nav>

        {/* Logo Centered */}
        <div className="text-5xl font-bold text-gray-300 tracking-wide">
          <span className="text-white">ad</span>Task.<span className="text-white">ai</span>
        </div>
      </div>
    </footer>
  );
}
