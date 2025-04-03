export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <div className="prose prose-stone">{children}</div>;
}

// TODO: text color and heading size
