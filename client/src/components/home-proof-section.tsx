import { Card, CardContent } from "@/components/ui/card";

export type HomeProofItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  verifiedOutcome?: string;
};

// Add approved customer quotes and verified outcomes here. The section stays hidden until real content is available.
export const homeProofItems: HomeProofItem[] = [];

export function HomeProofSection({ items = homeProofItems }: { items?: HomeProofItem[] }) {
  if (items.length === 0) return null;

  return (
    <section
      className="border-y border-border/50 bg-muted/20 py-16 lg:py-20"
      data-testid="section-customer-proof"
      aria-labelledby="heading-customer-proof"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-500">
            From the golf community
          </p>
          <h2
            id="heading-customer-proof"
            className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl"
          >
            Stories from clubs and societies.
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} className="h-full border-border/60 bg-background/80">
              <CardContent className="flex h-full flex-col p-6">
                {item.verifiedOutcome && (
                  <p className="mb-4 text-sm font-semibold text-emerald-500">
                    {item.verifiedOutcome}
                  </p>
                )}
                <figure className="flex flex-1 flex-col">
                  <blockquote className="text-base leading-relaxed">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border/60 pt-4">
                    <span className="block font-semibold">{item.name}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {item.role} · {item.organization}
                    </span>
                  </figcaption>
                </figure>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}