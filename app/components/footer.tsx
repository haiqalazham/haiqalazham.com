export default function Footer() {
  return (
    <footer>
      <p className="py-8 text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
