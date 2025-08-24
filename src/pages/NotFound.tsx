import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="404 — Page Not Found | ReachRight Marketing"
        description="Oops! The page you are looking for doesn’t exist. Return to ReachRight Marketing home to explore our digital marketing solutions."
        canonical="https://reachrightmarketing.com/404"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "404 — Page Not Found",
          url: "https://reachrightmarketing.com/404",
          description:
            "Oops! The page you are looking for doesn’t exist. Return to ReachRight Marketing home to explore our digital marketing solutions.",
        }}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
