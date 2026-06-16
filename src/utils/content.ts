export function getExcerpt(body: string, length = 140): string {
  const plain = body
    .replace(/^```[^\n]*\n[\s\S]*?^```$/gm, "")
    .replace(/^#+ .+$/gm, "")
    .replace(/`[^`]+`/g, "")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\n{2,}/g, " ")
    .replace(/\n/g, " ")
    .trim();
  if (plain.length <= length) return plain;
  return plain.slice(0, length).replace(/\s+\S*$/, "") + "…";
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatDateLong(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export function sortNullableDatesDesc(
  a: Date | null | undefined,
  b: Date | null | undefined
): number {
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;
  const av = a.valueOf();
  const bv = b.valueOf();
  if (isNaN(av) && isNaN(bv)) return 0;
  if (isNaN(av)) return 1;
  if (isNaN(bv)) return -1;
  return bv - av;
}
