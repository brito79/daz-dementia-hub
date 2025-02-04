import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/symptoms", label: "Symptoms" },
    { path: "/causes", label: "Causes" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/2cc117a5-2e72-4a68-9375-6243c2b5e6fb.png"
              alt="DAZ Logo"
              className="h-10 w-10"
            />
          </Link>
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-daz-green text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};