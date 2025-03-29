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
    <header className="py-6">
      <div>
        <Link href="/" className="font-bold tracking-tight">
          Haiqal Azham ◡̈
        </Link>
      </div>
      <nav></nav>
    </header>
  );
}
