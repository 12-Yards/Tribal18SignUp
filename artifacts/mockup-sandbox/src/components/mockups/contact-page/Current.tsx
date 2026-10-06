import "./_group.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const logoPath = "/__mockup/images/tribal18-logo.png";

export function Current() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [organisation, setOrganisation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await Promise.resolve();
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-br from-primary/5 via-accent/5 to-background"
      data-testid="page-contact"
    >
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" aria-label="Tribal18 home" className="flex items-center gap-2" data-testid="link-home">
            <img src={logoPath} alt="Tribal18 Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-foreground">Tribal18</span>
          </a>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <h1 className="text-2xl font-bold" data-testid="heading-contact">
              Contact Us
            </h1>
            <CardDescription>Get in touch with our team</CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="py-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-emerald-600" data-testid="text-submitted">
                  Thank You
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ve received your message and will be in touch shortly.
                </p>
                <a href="/">
                  <Button variant="outline" className="mt-4" data-testid="button-back-home">
                    Back to Home
                  </Button>
                </a>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="organisation">Organisation</Label>
                  <Input
                    id="organisation"
                    type="text"
                    placeholder="Enter your organisation name"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    data-testid="input-organisation"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    data-testid="input-mobile"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Enter any additional information"
                    className="min-h-[100px]"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    data-testid="input-notes"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={submitting} data-testid="button-contact-submit">
                  {submitting ? "Submitting..." : "Submit"}
                </Button>
                <div className="text-center">
                  <a href="/">
                    <Button variant="outline" className="w-full" data-testid="button-back">
                      Back
                    </Button>
                  </a>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
