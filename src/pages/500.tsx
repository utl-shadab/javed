import Link from "next/link";

export default function ServerErrorPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center  bg-tila-surface   px-6">
      <h1 className="text-[100px] font-extrabold text-tila-primary   leading-none">
        500
      </h1>
      <h2 className="text-2xl font-semibold text-[#222B38] mt-4">
        Something went wrong
      </h2>
      <p className="text-[#60656F] mt-3 text-base">
        We’re working to fix the issue. Please try again later.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-tila-primary    text-tila-surface  rounded-full font-medium hover:bg-[#094bbf] transition"
      >
        Go Home
      </Link>
    </main>
  );
}
