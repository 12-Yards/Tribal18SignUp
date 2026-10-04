export function PlatformNamesText({ text }: { text: string }) {
  return text.split(/\b(Android|iOS|web)\b/gi).map((part, index) =>
    /^(Android|iOS|web)$/i.test(part) ? (
      <strong key={index} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}