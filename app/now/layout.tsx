export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <div className="prose prose-zinc">{children}</div>;
}

// TODO: text color and heading size
