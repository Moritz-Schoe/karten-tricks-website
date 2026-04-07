/**
 * Renders Schema.org structured data as <script type="application/ld+json">.
 * Escapes "<" in serialized JSON so user-controlled strings cannot break out of the script tag.
 */
function serializeLdJson(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

type SchemaThing = Record<string, unknown>;

export default function JsonLd({
  data,
}: {
  data: SchemaThing | SchemaThing[] | null | undefined;
}) {
  if (data == null) return null;
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeLdJson(item) }}
        />
      ))}
    </>
  );
}
