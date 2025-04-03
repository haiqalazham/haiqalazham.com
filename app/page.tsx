import Link from "next/link";

export default function Page() {
  return (
    <section className="py-8">
      <p className="mb-4">
        Hello! I&apos;m Haiqal, a technology enthusiast and an avid
        photographer. I&apos;m interested in human-computer interaction and
        tools for thought.
      </p>
      <p className="mb-4">
        In my free time, I like to read books, tend my digital garden, and watch
        movies.
      </p>
      <p>
        Check out what I&apos;m up to{" "}
        <Link
          href="/now"
          className="text-blue-500 underline hover:text-blue-700"
        >
          now
        </Link>{" "}
        and what I&apos;m{" "}
        <Link
          href="/uses"
          className="text-blue-500 underline hover:text-blue-700"
        >
          using
        </Link>
        .
      </p>
    </section>
  );
}
