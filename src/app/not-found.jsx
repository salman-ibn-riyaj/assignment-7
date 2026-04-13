import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-[120px] font-medium text-[#244D3F] leading-none tracking-tighter mb-2">
          404
        </p>

        <div className="w-12 h-[2px] bg-[#244D3F] opacity-30 mx-auto mb-7"></div>

        <p className="text-2xl font-medium text-[#244D3F] mb-3">
          Page not found
        </p>

        <p className="text-[15px] text-[#244D3F] opacity-55 leading-relaxed mb-9">
          The page you are looking for does not exist or has been moved
          somewhere else.
        </p>

        <Link
          href="/"
          className="inline-block px-7 py-2.5 border-[1.5px] border-[#244D3F] rounded-lg text-[#244D3F] text-sm font-medium tracking-wide hover:bg-[#244D3F] hover:text-[#F5F5F0] transition-colors duration-200"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
