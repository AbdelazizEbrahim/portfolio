import Link from "next/link";

export default function CaseStudyNotFound() {
  return (
    <div className="container mx-auto py-24 text-center">
      <h1 className="h2 text-white mb-4">Project not found</h1>
      <p className="text-white/60 mb-8">This case study does not exist.</p>
      <Link
        href="/work#enterprise"
        className="inline-flex min-h-[44px] items-center px-6 rounded-full bg-accent text-primary font-semibold"
      >
        View flagship work
      </Link>
    </div>
  );
}
