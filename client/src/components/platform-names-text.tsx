export function PlatformNamesText({ text }: { text: string }) {
  return text.split(/\b(Android|iPhone|web)\b/gi).map((part, index) =>
    /^(Android|iPhone|web)$/i.test(part) ? (
      <strong key={index} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}