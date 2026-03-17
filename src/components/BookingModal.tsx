import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookingUrl: string;
  serviceName?: string;
}

export default function BookingModal({ open, onOpenChange, bookingUrl, serviceName }: BookingModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[96vw] h-[90vh] sm:h-[85vh] flex flex-col p-0 sm:p-0 gap-0 [&>button]:hidden">
        <DialogHeader className="px-4 pt-4 pb-2 shrink-0 flex flex-row items-center justify-between">
          <DialogTitle className="font-heading text-base font-bold text-foreground sm:text-lg">
            {serviceName ? `Schedule: ${serviceName}` : "Schedule Your Test"}
          </DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            style={{ minHeight: "44px", minWidth: "44px" }}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>
        <div className="flex-1 min-h-0 overflow-hidden">
          <iframe
            src={bookingUrl}
            className="w-full h-full border-0"
            title={serviceName ? `Schedule ${serviceName}` : "Schedule DNA Test"}
            allow="payment"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
