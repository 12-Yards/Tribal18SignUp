import type { ReactElement } from "react";
import logoPath from "@assets/tribal8icon_1783436350353.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ComingSoonDialog({ children }: { children: ReactElement }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-emerald-100/15 bg-[#08140f] p-8 text-center text-white shadow-2xl sm:p-10"
        aria-describedby={undefined}
        data-testid="dialog-coming-soon"
      >
        <div className="flex flex-col items-center gap-5">
          <img
            src={logoPath}
            alt="Tribal18"
            className="h-28 w-28 object-contain"
          />
          <DialogHeader className="space-y-2 text-center sm:text-center">
            <DialogTitle className="text-xl font-bold leading-snug text-white sm:text-2xl">
              Available Soon
            </DialogTitle>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
}
