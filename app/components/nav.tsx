import Link from "next/link";

const navItems = {
  "/blog": {
    name: "🪶 blog",
  },
  "/gallery": {
    name: "🏞️ gallery",
  },
  "/notes": {
    name: "🌿 notes",
  },
};

export default function Navbar() {
  return (
    <header className="-ml-[8px] mb-10 tracking-tight">
      <nav
        className="flex flex-row items-start justify-between px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div>
          <Link
            href="/"
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 font-bold"
          >
            Haiqal Azham ◡̈
          </Link>
        </div>
      </nav>
    </header>
  );
}
