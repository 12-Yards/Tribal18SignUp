import { useState, useRef, useEffect, useCallback } from "react";
import { jsPDF } from "jspdf";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import logoPath from "@assets/tribal8icon_1783436350353.png";
import { useSEO } from "@/lib/seo";
import {
  CheckCircle,
  Users,
  Calendar,
  Globe,
  ArrowRight,
  ArrowLeft,
  Settings,
  Copy,
  ExternalLink,
  AlertCircle,
  Download,
} from "lucide-react";

type OnboardingStep = "register" | "identity" | "terms";

export default function CreateAccountPage() {
  useSEO({ title: "Create Your Account | Tribal18", description: "Create your Tribal18 community platform in minutes. Free for the first 30 days, no card details needed to go live.", path: "/create-account", noindex: true });
  const { toast } = useToast();
  const [step, setStep] = useState<OnboardingStep>("register");
  const activeSectionRef = useRef<HTMLFormElement>(null);
  const [orgName, setOrgName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const [hasDomain, setHasDomain] = useState<boolean | null>(null);
  const [domainName, setDomainName] = useState("");
  const [subdomain, setSubdomain] = useState("platform");
  const [editingSubdomain, setEditingSubdomain] = useState(false);
  const [noDomainPrefix, setNoDomainPrefix] = useState("");
  const [editingNoDomainPrefix, setEditingNoDomainPrefix] = useState(false);

  const generateRandomPrefix = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const [primaryColor, setPrimaryColor] = useState("#0ea5e9");
  const [secondaryColor, setSecondaryColor] = useState("#22c55e");
  const [showComplete, setShowComplete] = useState(false);

  const showValidationErrors = (errors: string[]) => {
    setValidationErrors(errors);
    toast({
      variant: "destructive",
      title: "Please fix the following",
      description: (
        <ul className="list-disc pl-4 space-y-1 mt-1">
          {errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      ),
    });
  };

  const isValidDomain = (val: string) =>
    /^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+$/.test(val);

  const handleRegisterNext = () => {
    const errors: string[] = [];

    if (!orgName.trim()) errors.push("Please enter your community name");
    if (!userName.trim()) errors.push("Please enter your name");
    if (!email.trim()) {
      errors.push("Please enter your email address");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.push("Please enter a valid email address");
    }
    if (!password) errors.push("Please create a password");

    if (errors.length > 0) {
      showValidationErrors(errors);
      return;
    }

    setValidationErrors([]);
    setStep("identity");
  };

  const [checkingDomain, setCheckingDomain] = useState(false);

  const handleIdentityNext = async () => {
    const errors: string[] = [];

    if (hasDomain === null) {
      errors.push("Please select whether you have a domain");
    } else if (hasDomain === true) {
      if (!domainName.trim()) {
        errors.push("Please enter your domain name");
      } else if (!isValidDomain(domainName.trim())) {
        errors.push("Please enter a valid domain name (e.g. yourgolfclub.com)");
      }
    } else if (hasDomain === false) {
      if (!noDomainPrefix.trim()) {
        errors.push("Subdomain prefix cannot be empty");
      } else if (noDomainPrefix.length < 3) {
        errors.push("Subdomain prefix must be at least 3 characters");
      }
    }

    if (errors.length > 0) {
      showValidationErrors(errors);
      return;
    }

    const domainToCheck = hasDomain ? domainName.trim().toLowerCase() : noDomainPrefix.trim().toLowerCase();
    setCheckingDomain(true);
    try {
      const res = await fetch("/api/check-domain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domainName: domainToCheck }),
      });
      const data = await res.json();
      if (data.exists) {
        showValidationErrors([
          hasDomain
            ? "This domain is already in use. Please enter a different domain."
            : "This subdomain prefix is already in use. Please choose a different one."
        ]);
        setCheckingDomain(false);
        return;
      }
    } catch {
      showValidationErrors(["Unable to verify domain availability. Please try again."]);
      setCheckingDomain(false);
      return;
    }
    setCheckingDomain(false);

    setValidationErrors([]);
    setStep("terms");
  };

  const [submitting, setSubmitting] = useState(false);
  const [creatingPlatform, setCreatingPlatform] = useState(false);
  const [tenantError, setTenantError] = useState<string | null>(null);
  const [dnsRecords, setDnsRecords] = useState<any[] | null>(null);

  const handleCompleteSetup = async () => {
    setSubmitting(true);
    setTenantError(null);
    try {
      setCreatingPlatform(true);
      startTimeRef.current = Date.now();

      const tenantResponse = await fetch("/api/onboarding/create-tenant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: orgName,
          domainName: hasDomain ? domainName : undefined,
          subDomain: hasDomain ? undefined : noDomainPrefix,
          adminEmail: email,
          adminPassword: password,
          adminName: userName,
        }),
      });

      const tenantData = await tenantResponse.json();

      if (tenantResponse.ok && tenantData.success) {
        await apiRequest("POST", "/api/registrations", {
          orgName,
          userName,
          email,
          hasDomain: hasDomain === true ? "yes" : hasDomain === false ? "no" : null,
          domainName: domainName || null,
          subdomain: subdomain || null,
          noDomainPrefix: noDomainPrefix || null,
          primaryColor,
          secondaryColor,
        });

        if (hasDomain && domainName && !tenantData.existingUser) {
          try {
            const dnsResponse = await fetch("/api/onboarding/custom-domain-dns", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ domainName }),
            });
            const dnsData = await dnsResponse.json();
            if (dnsResponse.ok) {
              const records = dnsData.dnsEntries || dnsData.dnsRecords || dnsData.records || (Array.isArray(dnsData) ? dnsData : null);
              if (records) {
                setDnsRecords(records);
              }
            }
          } catch (dnsErr) {
            console.error("Failed to fetch DNS records:", dnsErr);
          }
        }

        const elapsed = Date.now() - startTimeRef.current;
        const remaining = Math.max(0, 15000 - elapsed);
        timerRef.current = setTimeout(() => {
          setCreatingPlatform(false);
          setShowComplete(true);
        }, remaining);
      } else {
        setCreatingPlatform(false);
        setTenantError(tenantData.error || tenantData.message || "Failed to create platform. Please try again.");
      }
    } catch (err) {
      console.error("Failed to submit registration:", err);
      setCreatingPlatform(false);
      setTenantError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const getPlatformUrl = () => {
    if (hasDomain && domainName) {
      return domainName;
    }
    return `${noDomainPrefix}.tribal18.com`;
  };

  const getAdminUrl = () => {
    return `${getPlatformUrl()}/admin`;
  };

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (step !== "register") {
      activeSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = 25;

    doc.setFillColor(5, 150, 105);
    doc.rect(margin, y, contentWidth, 1.5, "F");
    y += 10;

    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(5, 150, 105);
    doc.text(orgName, margin, y);
    y += 8;

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(107, 114, 128);
    doc.text("Platform Setup Details", margin, y);
    y += 15;

    const drawCard = (x: number, w: number, label: string, value: string, labelColor: [number, number, number]) => {
      doc.setFillColor(249, 250, 251);
      doc.setDrawColor(229, 231, 235);
      doc.roundedRect(x, y, w, 22, 2, 2, "FD");

      doc.setFontSize(8);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...labelColor);
      doc.text(label.toUpperCase(), x + 6, y + 7);

      doc.setFontSize(11);
      doc.setFont("courier", "bold");
      doc.setTextColor(31, 41, 55);
      doc.text(value, x + 6, y + 16, { maxWidth: w - 12 });
    };

    const halfWidth = (contentWidth - 6) / 2;

    drawCard(margin, halfWidth, "Admin URL", getAdminUrl(), [5, 150, 105]);
    drawCard(margin + halfWidth + 6, halfWidth, "Platform URL", getPlatformUrl(), [2, 132, 199]);
    y += 28;

    drawCard(margin, halfWidth, "Username", email, [107, 114, 128]);
    drawCard(margin + halfWidth + 6, halfWidth, "Password", password, [107, 114, 128]);
    y += 32;

    if (dnsRecords && dnsRecords.length > 0) {
      doc.setFillColor(5, 150, 105);
      doc.circle(margin + 3, y + 2, 1.5, "F");
      doc.setFontSize(13);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(31, 41, 55);
      doc.text("DNS Configuration", margin + 9, y + 4);
      y += 10;

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(107, 114, 128);
      const descLines = doc.splitTextToSize(`Add the following records to your domain ${domainName} with your DNS provider:`, contentWidth);
      doc.text(descLines, margin, y);
      y += descLines.length * 5 + 6;

      const colWidths = [25, 35, contentWidth - 60];
      const headers = ["TYPE", "NAME", "VALUE"];

      doc.setFillColor(243, 244, 246);
      doc.setDrawColor(229, 231, 235);
      doc.roundedRect(margin, y, contentWidth, 9, 1, 1, "FD");
      doc.setFontSize(8);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(107, 114, 128);
      let hx = margin + 5;
      headers.forEach((h, i) => {
        doc.text(h, hx, y + 6);
        hx += colWidths[i];
      });
      y += 10;

      doc.setFontSize(9);
      doc.setFont("courier", "normal");
      doc.setTextColor(55, 65, 81);
      dnsRecords.forEach((record: any) => {
        doc.setDrawColor(243, 244, 246);
        doc.line(margin, y + 5, margin + contentWidth, y + 5);
        let rx = margin + 5;
        const vals = [
          record.type || "-",
          record.name || record.host || record.hostname || "-",
          record.value || record.data || record.target || record.content || "-",
        ];
        vals.forEach((v, i) => {
          const lines = doc.splitTextToSize(v, colWidths[i] - 5);
          doc.text(lines, rx, y + 4);
          rx += colWidths[i];
        });
        y += 8;
      });
      y += 6;

      doc.setFontSize(8);
      doc.setFont("helvetica", "italic");
      doc.setTextColor(156, 163, 175);
      doc.text("DNS changes can take up to 24-48 hours to propagate.", margin, y);
      y += 12;
    }

    if (hasDomain && domainName) {
      doc.setFillColor(240, 249, 255);
      doc.setDrawColor(186, 230, 253);
      doc.roundedRect(margin, y, contentWidth, 20, 2, 2, "FD");

      doc.setFillColor(14, 165, 233);
      doc.circle(margin + 7, y + 7, 1.5, "F");

      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(31, 41, 55);
      doc.text("Check Domain Status", margin + 13, y + 8);

      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(75, 85, 99);
      doc.text("Visit: ", margin + 7, y + 15);
      doc.setTextColor(2, 132, 199);
      doc.setFont("helvetica", "bold");
      doc.textWithLink("checkdomainstatus.tribal18.com", margin + 18, y + 15, { url: "https://checkdomainstatus.tribal18.com/" });
    }

    doc.save(`${orgName.replace(/[^a-zA-Z0-9]/g, "_")}_Platform_Details.pdf`);
  };

  const benefits = [
    { icon: Users, text: "Unlimited members and groups" },
    { icon: Calendar, text: "Events & competition management" },
    { icon: Globe, text: "Reciprocal play network access" },
  ];

  const allSteps: { key: OnboardingStep; label: number }[] = [
    { key: "register", label: 1 },
    { key: "identity", label: 2 },
    { key: "terms", label: 3 },
  ];
  const currentStepIndex = allSteps.findIndex((s) => s.key === step);

  return (
    <div
      className="min-h-[100dvh] bg-[#0d1210] text-white flex flex-col"
      data-testid="page-create-account"
    >
      <header className="w-full border-b border-[#26332d] bg-[#0d1210]/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8">
          <a href="/#home-top" aria-label="Tribal18 home" className="flex items-center gap-3" data-testid="link-home">
            <img src={logoPath} alt="Tribal18 Logo" className="h-10 w-10 object-contain" />
            <span className="text-[19px] font-bold tracking-[-0.04em] text-white">Tribal18</span>
          </a>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a7b5aa] sm:block">A home for your golf community</span>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:px-8 sm:py-12">
        {(creatingPlatform || showComplete) ? (
          <Card className="w-full max-w-3xl overflow-hidden rounded-[28px] border border-[#d9ddd3] bg-[#fbfbf6] text-[#202d28] shadow-[0_24px_70px_-35px_rgba(29,51,41,0.28)]">
            <CardContent className="p-6 sm:p-10 md:p-12">
              {creatingPlatform ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#e6eddf]">
                    <Settings className="w-10 h-10 text-[#477b57] animate-spin" style={{ animationDuration: "3s" }} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#315c43] mb-2" data-testid="text-creating-message">
                    Creating your platform
                  </h3>
                  <p className="text-[#65746b]">
                    Please wait while we set everything up for you...
                  </p>
                </div>
              ) : (
                <div>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-[#e6eddf] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#477b57]" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-[-0.05em] text-[#315c43]" data-testid="text-setup-message">
                      All ready!
                    </h3>
                    <p className="text-[#65746b] mt-1">Your platform has been created successfully.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#f2f3ec] rounded-2xl p-4 border border-[#e1e4d9]">
                      <p className="text-[10px] font-bold text-[#718077] uppercase tracking-[0.17em] mb-2">Admin URL</p>
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://${getAdminUrl()}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm font-semibold text-[#477b57] hover:underline flex items-center gap-1 truncate"
                          data-testid="link-admin-url"
                        >
                          {getAdminUrl()}
                          <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                        </a>
                        <button
                          onClick={() => navigator.clipboard.writeText(`https://${getAdminUrl()}`)}
                          className="text-muted-foreground hover:text-foreground flex-shrink-0"
                          data-testid="button-copy-admin-url"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-[#f2f3ec] rounded-2xl p-4 border border-[#e1e4d9]">
                      <p className="text-[10px] font-bold text-[#718077] uppercase tracking-[0.17em] mb-2">Platform</p>
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://${getPlatformUrl()}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm font-semibold text-[#557c78] hover:underline flex items-center gap-1 truncate"
                          data-testid="link-platform-url"
                        >
                          {getPlatformUrl()}
                          <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                        </a>
                        <button
                          onClick={() => navigator.clipboard.writeText(`https://${getPlatformUrl()}`)}
                          className="text-muted-foreground hover:text-foreground flex-shrink-0"
                          data-testid="button-copy-platform-url"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-[#f2f3ec] rounded-2xl p-4 border border-[#e1e4d9]">
                      <p className="text-[10px] font-bold text-[#718077] uppercase tracking-[0.17em] mb-2">Username</p>
                      <p className="font-mono text-sm font-semibold" data-testid="text-username">{email}</p>
                    </div>
                    <div className="bg-[#f2f3ec] rounded-2xl p-4 border border-[#e1e4d9]">
                      <p className="text-[10px] font-bold text-[#718077] uppercase tracking-[0.17em] mb-2">Password</p>
                      <p className="font-mono text-sm font-semibold" data-testid="text-password">{password}</p>
                    </div>
                  </div>

                  {dnsRecords && dnsRecords.length > 0 && (
                    <div className="bg-[#fbf4e6] border border-[#ead6a9] rounded-2xl p-5 mb-6" data-testid="dns-records-section">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="w-5 h-5 text-[#a26c1c] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#674b1e]">DNS configuration required</p>
                          <p className="text-sm text-[#806530] mt-1">
                            Add the following DNS records to your domain <span className="font-mono font-semibold">{domainName}</span> to point it to your platform:
                          </p>
                        </div>
                      </div>
                      <div className="overflow-x-auto bg-[#fffdf8] rounded-xl border border-[#ead6a9]">
                        <table className="w-full text-sm border-collapse" data-testid="dns-records-table">
                          <thead>
                            <tr className="border-b border-amber-200 dark:border-amber-700 bg-amber-100/50 dark:bg-amber-900/30">
                              <th className="text-left py-2.5 px-3 font-semibold text-[#674b1e]">Type</th>
                              <th className="text-left py-2.5 px-3 font-semibold text-[#674b1e]">Name</th>
                              <th className="text-left py-2.5 px-3 font-semibold text-[#674b1e]">Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dnsRecords.map((record: any, i: number) => (
                              <tr key={i} className="border-b last:border-b-0 border-[#f0e4c8]" data-testid={`dns-record-${i}`}>
                                <td className="py-2.5 px-3 font-mono text-xs font-semibold">{record.type}</td>
                                <td className="py-2.5 px-3 font-mono text-xs">{record.name || record.host || record.hostname || "-"}</td>
                                <td className="py-2.5 px-3 font-mono text-xs break-all">
                                  <div className="flex items-center gap-1.5">
                                    <span>{record.value || record.data || record.target || record.content || "-"}</span>
                                    <button
                                      onClick={() => navigator.clipboard.writeText(record.value || record.data || record.target || record.content || "")}
                                      className="text-[#a26c1c] hover:text-[#674b1e] flex-shrink-0"
                                      data-testid={`button-copy-dns-${i}`}
                                    >
                                      <Copy className="w-3 h-3" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-[#806530] mt-3">
                        DNS changes can take up to 24-48 hours to propagate. Your platform will be available once the records are active.
                      </p>
                    </div>
                  )}

                  {hasDomain && domainName && (
                    <div className="bg-[#edf4f0] border border-[#cbded1] rounded-2xl p-5 mb-6" data-testid="domain-status-section">
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-[#477b57] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#315c43]">Check domain status</p>
                          <p className="text-sm text-[#557363] mt-1">
                            To check the status of your domain, visit:
                          </p>
                          <a
                            href="https://checkdomainstatus.tribal18.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-[#477b57] hover:underline"
                            data-testid="link-check-domain-status"
                          >
                            checkdomainstatus.tribal18.com
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                    <Button
                      variant="outline"
                      className="gap-2 rounded-xl border-[#d5ddd2] bg-white text-[#405148] hover:bg-[#f1f3ec]"
                      onClick={handleDownloadPDF}
                      data-testid="button-download-pdf"
                    >
                      <Download className="w-4 h-4" />
                      Download as PDF
                    </Button>
                    <Link href="/" className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d5ddd2] bg-white px-4 text-sm font-medium text-[#405148] hover:bg-[#f1f3ec]" data-testid="button-back-home">
                      Back to Home
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
        <Card className="w-full max-w-[760px] overflow-hidden rounded-[30px] border border-[#d9ddd3] bg-[#fbfbf6] text-[#202d28] shadow-[0_28px_90px_-48px_rgba(29,51,41,0.36)]">
            <CardContent className="p-6 sm:p-9 md:p-12">
                <>
                  <div className="mb-9">
                    <div className="mb-7 flex items-center justify-between">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#718077]">Set up your community</p>
                      <p className="text-xs font-semibold text-[#718077]">0{currentStepIndex + 1} <span className="px-1 text-[#b5bdb4]">/</span> 03</p>
                    </div>
                    <div className="mb-8 flex items-center gap-2" role="list" aria-label="Signup progress">
                      {allSteps.map((s, i) => (
                        <div key={s.key} className="flex flex-1 items-center gap-2" role="listitem" aria-current={currentStepIndex === i ? "step" : undefined}>
                          <div className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${currentStepIndex >= i ? "bg-[#91a957]" : "bg-[#e1e4d9]"}`} />
                        </div>
                      ))}
                    </div>
                    <h1 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.06em] sm:text-[2.5rem]" data-testid="heading-create-account">
                      Let’s get your club<br className="hidden sm:block" /> on the map.
                    </h1>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#68776d]" data-testid="text-create-account-subtext">
                      A few details now. A more connected community, just ahead.
                    </p>
                  </div>

                  {step !== "register" && (
                    <div className="mb-4 rounded-2xl border border-[#dce4d4] bg-[#f1f4eb] p-4" data-testid="summary-registration">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="flex items-center gap-2 font-semibold">
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#54784d]" />
                            1. Account details
                          </p>
                          <p className="mt-2 truncate text-sm text-[#68776d]">{orgName} · {userName}</p>
                          <p className="truncate text-sm text-[#68776d]">{email}</p>
                        </div>
                        <Button type="button" variant="ghost" size="sm" onClick={() => { setValidationErrors([]); setStep("register"); }} data-testid="button-edit-registration">
                          Edit
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === "terms" && (
                    <div className="mb-4 rounded-2xl border border-[#dce4d4] bg-[#f1f4eb] p-4" data-testid="summary-identity">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="flex items-center gap-2 font-semibold">
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#54784d]" />
                            2. Platform address
                          </p>
                          <p className="mt-2 truncate text-sm text-[#68776d]">
                            {hasDomain ? domainName : `${noDomainPrefix}.tribal18.com`}
                          </p>
                        </div>
                        <Button type="button" variant="ghost" size="sm" onClick={() => { setValidationErrors([]); setStep("identity"); }} data-testid="button-edit-identity">
                          Edit
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === "register" && (
                    <form
                      className="space-y-5"
                      ref={activeSectionRef}
                      onSubmit={(event) => {
                        event.preventDefault();
                        handleRegisterNext();
                      }}
                    >
                      <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-[#4e6d53]">01 <span className="mx-2 text-[#bdc4b8]">/</span> Account details</h2>
                      <div className="space-y-2">
                        <Label className="text-[13px] font-semibold text-[#35463b]" htmlFor="organisation">Community name</Label>
                        <Input
                          id="organisation"
                          type="text"
                          autoComplete="organization"
                          placeholder="Enter your community name"
                          className="h-12 rounded-xl border-[#d9ddd3] bg-white px-4 text-sm text-[#25372e] placeholder:text-[#a1aaa0] focus-visible:ring-[#91a957]/40"
                          value={orgName}
                          onChange={(e) => { setOrgName(e.target.value); setValidationErrors([]); }}
                          data-testid="input-organisation"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[13px] font-semibold text-[#35463b]" htmlFor="name">Your name</Label>
                        <Input
                          id="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Enter your name"
                          className="h-12 rounded-xl border-[#d9ddd3] bg-white px-4 text-sm text-[#25372e] placeholder:text-[#a1aaa0] focus-visible:ring-[#91a957]/40"
                          value={userName}
                          onChange={(e) => { setUserName(e.target.value); setValidationErrors([]); }}
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[13px] font-semibold text-[#35463b]" htmlFor="email">Email address</Label>
                        <Input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="Enter your email"
                          className="h-12 rounded-xl border-[#d9ddd3] bg-white px-4 text-sm text-[#25372e] placeholder:text-[#a1aaa0] focus-visible:ring-[#91a957]/40"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setValidationErrors([]); }}
                          data-testid="input-email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[13px] font-semibold text-[#35463b]" htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          autoComplete="new-password"
                          placeholder="Create a password"
                          className="h-12 rounded-xl border-[#d9ddd3] bg-white px-4 text-sm text-[#25372e] placeholder:text-[#a1aaa0] focus-visible:ring-[#91a957]/40"
                          value={password}
                          onChange={(e) => { setPassword(e.target.value); setValidationErrors([]); }}
                          data-testid="input-password"
                        />
                      </div>
                      {validationErrors.length > 0 && step === "register" && (
                        <div className="bg-[#fff0eb] border border-[#f2c7b7] rounded-2xl p-4" role="alert" data-testid="validation-errors">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-[#b65036] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-[#813b2a] mb-1">Please fix the following:</p>
                              <ul className="list-disc pl-4 space-y-0.5 text-sm text-[#9e4a33]">
                                {validationErrors.map((err, i) => (
                                  <li key={i}>{err}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                      <Button
                        type="submit"
                        className="w-full h-12 gap-2 rounded-xl border-0 bg-[#244336] text-[#f8f6ee] hover:bg-[#315744] font-semibold shadow-none"
                        data-testid="button-create-account-submit"
                      >
                        Create Account
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                      <div className="text-center pt-2">
                        <Link href="/" className="text-sm text-[#77847a] hover:text-[#244336]" data-testid="link-back">
                          Back to Home
                        </Link>
                      </div>
                    </form>
                  )}

                  {step === "identity" && (
                    <form
                      className="space-y-5"
                      ref={activeSectionRef}
                      onSubmit={(event) => {
                        event.preventDefault();
                        void handleIdentityNext();
                      }}
                    >
                      <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-[#4e6d53]">02 <span className="mx-2 text-[#bdc4b8]">/</span> Platform address</h2>
                      <div className="space-y-3">
                        <Label className="text-[13px] font-semibold text-[#35463b]">Do you already have a domain?</Label>
                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant={hasDomain === true ? "default" : "outline"}
                            className={`flex-1 h-12 rounded-xl toggle-elevate ${hasDomain === true ? "border-[#244336] bg-[#244336] text-white" : "border-[#d9ddd3] bg-white text-[#425449] hover:bg-[#f0f2eb]"}`}
                            onClick={() => {
                              setHasDomain(true);
                            }}
                            data-testid="button-has-domain-yes"
                          >
                            Yes
                          </Button>
                          <Button
                            type="button"
                            variant={hasDomain === false ? "default" : "outline"}
                            className={`flex-1 h-12 rounded-xl toggle-elevate ${hasDomain === false ? "border-[#244336] bg-[#244336] text-white" : "border-[#d9ddd3] bg-white text-[#425449] hover:bg-[#f0f2eb]"}`}
                            onClick={() => {
                              setHasDomain(false);
                              if (!noDomainPrefix) {
                                setNoDomainPrefix(generateRandomPrefix());
                              }
                            }}
                            data-testid="button-has-domain-no"
                          >
                            No
                          </Button>
                        </div>
                      </div>

                      {hasDomain === false && (
                        <div className="space-y-4">
                          <p className="text-sm text-[#68776d]">
                            You can use the Tribal18.com domain (and change later).
                          </p>
                          <div className="rounded-2xl border border-[#dce4d4] bg-[#f1f4eb] p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#718077] mb-3">
                              Your website will show as:
                            </p>
                            <div className="flex items-center gap-1">
                              {editingNoDomainPrefix ? (
                                <Input
                                  value={noDomainPrefix}
                                  onChange={(e) => setNoDomainPrefix(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ""))}
                                  className="h-10 w-36 rounded-xl border-[#d9ddd3] bg-white px-3 text-sm font-mono text-[#25372e] placeholder:text-[#a1aaa0] selection:bg-[#dce9cb] focus-visible:ring-[#91a957]/40"
                                  autoFocus
                                  onBlur={() => setEditingNoDomainPrefix(false)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") setEditingNoDomainPrefix(false);
                                  }}
                                  data-testid="input-no-domain-prefix"
                                />
                              ) : (
                                <span className="font-mono font-semibold text-[#315c43]" data-testid="text-no-domain-prefix">
                                  {noDomainPrefix}
                                </span>
                              )}
                              <span className="font-mono font-semibold text-[#758278]" data-testid="text-no-domain-suffix">
                                .tribal18.com
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm text-[#68776d]">
                              Do you want to change the prefix?
                            </p>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="rounded-lg border-[#cad4c8] bg-transparent text-[#315c43] hover:bg-white"
                              onClick={() => setEditingNoDomainPrefix(true)}
                              data-testid="button-change-no-domain-prefix"
                            >
                              Change
                            </Button>
                          </div>
                        </div>
                      )}

                      {hasDomain === true && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label className="text-[13px] font-semibold text-[#35463b]" htmlFor="domain">Enter your domain name</Label>
                            <Input
                              id="domain"
                              type="text"
                              placeholder="e.g. yourgolfclub.com"
                              className="h-12 rounded-xl border-[#d9ddd3] bg-white px-4 text-sm text-[#25372e] placeholder:text-[#a1aaa0] focus-visible:ring-[#91a957]/40"
                              value={domainName}
                              onChange={(e) => setDomainName(e.target.value)}
                              data-testid="input-domain"
                            />
                          </div>

                        </div>
                      )}

                      {validationErrors.length > 0 && step === "identity" && (
                        <div className="bg-[#fff0eb] border border-[#f2c7b7] rounded-2xl p-4" role="alert" data-testid="validation-errors-identity">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-[#b65036] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-[#813b2a] mb-1">Please fix the following:</p>
                              <ul className="list-disc pl-4 space-y-0.5 text-sm text-[#9e4a33]">
                                {validationErrors.map((err, i) => (
                                  <li key={i}>{err}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="flex gap-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 h-12 gap-2 rounded-xl border-[#d9ddd3] bg-white text-[#405148] hover:bg-[#f1f3ec]"
                          onClick={() => { setValidationErrors([]); setStep("register"); }}
                          data-testid="button-identity-back"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 h-12 gap-2 rounded-xl border-0 bg-[#244336] text-[#f8f6ee] hover:bg-[#315744] font-semibold shadow-none"
                          disabled={checkingDomain || hasDomain === null || (hasDomain === true && !domainName.trim())}
                          data-testid="button-identity-next"
                        >
                          {checkingDomain ? "Checking..." : "Next"}
                          {!checkingDomain && <ArrowRight className="w-4 h-4" />}
                        </Button>
                      </div>
                    </form>
                  )}

                  {step === "terms" && (
                    <form
                      className="space-y-5"
                      ref={activeSectionRef}
                      onSubmit={(event) => {
                        event.preventDefault();
                        void handleCompleteSetup();
                      }}
                    >
                      <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-[#4e6d53]">03 <span className="mx-2 text-[#bdc4b8]">/</span> Terms & Conditions</h2>
                      <div className="max-h-[340px] space-y-4 overflow-y-auto rounded-2xl border border-[#d9ddd3] bg-[#f4f5ef] p-5 text-sm leading-6 text-[#65746b]" data-testid="terms-content">
                        <h3 className="text-base font-bold text-[#25372e]">Tribal18 Platform Terms & Conditions</h3>
                        <p className="font-semibold text-[#35463b]">1. Acceptance of Terms</p>
                        <p>By creating an account and using the Tribal18 platform, you agree to be bound by these Terms and Conditions. If you do not agree, please do not proceed with account creation.</p>
                        <p className="font-semibold text-[#35463b]">2. Platform Usage</p>
                        <p>The Tribal18 platform is provided as a Software-as-a-Service (SaaS) solution for managing communities, clubs, and related organisations. You agree to use the platform only for its intended purpose and in compliance with all applicable laws.</p>
                        <p className="font-semibold text-[#35463b]">3. Account Responsibilities</p>
                        <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to notify Tribal18 immediately of any unauthorised use of your account. You are responsible for all activities that occur under your account.</p>
                        <p className="font-semibold text-[#35463b]">4. Data Protection</p>
                        <p>We take data protection seriously. Your personal data and the data of your community members will be processed in accordance with our Privacy Policy and applicable data protection legislation including GDPR.</p>
                        <p className="font-semibold text-[#35463b]">5. Content</p>
                        <p>You retain ownership of all content you upload to the platform. By uploading content, you grant Tribal18 a licence to host and display that content as part of the service. You must not upload content that is unlawful, offensive, or infringes on third-party rights.</p>
                        <p className="font-semibold text-[#35463b]">6. Subscription & Billing</p>
                        <p>Access to certain features may require a paid subscription. Pricing details are available on our website. We reserve the right to modify pricing with reasonable notice. Free trial periods may be offered at our discretion.</p>
                        <p className="font-semibold text-[#35463b]">7. Termination</p>
                        <p>Either party may terminate the agreement at any time. Upon termination, your access to the platform will be suspended and your data may be deleted after a reasonable retention period.</p>
                        <p className="font-semibold text-[#35463b]">8. Limitation of Liability</p>
                        <p>Tribal18 shall not be liable for any indirect, incidental, or consequential damages arising from the use of the platform. Our total liability shall not exceed the fees paid by you in the preceding 12 months.</p>
                        <p className="font-semibold text-[#35463b]">9. Changes to Terms</p>
                        <p>We may update these terms from time to time. Continued use of the platform following any changes constitutes acceptance of the revised terms.</p>
                      </div>
                      {tenantError && (
                        <div className="bg-[#fff0eb] border border-[#f2c7b7] rounded-xl p-3 text-sm text-[#9e4a33]" role="alert" data-testid="text-tenant-error">
                          {tenantError}
                        </div>
                      )}
                      <div className="flex gap-3 pt-2">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 h-12 gap-2 rounded-xl border-[#d9ddd3] bg-white text-[#405148] hover:bg-[#f1f3ec]"
                          onClick={() => setStep("identity")}
                          data-testid="button-terms-back"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 h-12 gap-2 rounded-xl border-0 bg-[#244336] text-[#f8f6ee] hover:bg-[#315744] font-semibold shadow-none"
                          disabled={submitting}
                          data-testid="button-complete-setup"
                        >
                          {submitting ? "Setting up..." : "Accept Terms & Complete Setup"}
                          {!submitting && <ArrowRight className="w-4 h-4" />}
                        </Button>
                      </div>
                    </form>
                  )}
                </>
            </CardContent>
        </Card>
        )}
      </div>
    </div>
  );
}
