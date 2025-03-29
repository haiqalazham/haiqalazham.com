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

export default function Header() {
  return (
    <header className="py-6 flex justify-between">
      <div>
        <Link href="/" className="font-bold tracking-tight">
          Haiqal Azham ◡̈
        </Link>
      </div>
      <nav>
        <div className="flex flex-row">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path} className="px-2">
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
