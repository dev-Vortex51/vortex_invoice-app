import { RxDotFilled } from "react-icons/rx";

type StatusColor = "pending" | "paid" | "draft";

interface StatusLabelProps {
  status?: string;
  color?: StatusColor;
}

const StatusLabel = ({
  status = "Pending",
  color = "pending",
}: StatusLabelProps) => {
  const colors: Record<StatusColor, { bg: string; text: string; dot: string }> =
    {
      pending: {
        bg: "bg-[rgba(255,143,0,0.0571)]",
        text: "text-[#FF8F00]",
        dot: "text-[#FF8F00]",
      },
      paid: {
        bg: "bg-[rgba(51,214,159,0.0571)]",
        text: "text-[#33D69F]",
        dot: "text-[#33D69F]",
      },
      draft: {
        bg: "bg-[rgba(55,59,83,0.0571)] dark:bg-[#292C45]",
        text: "text-[#373B53] dark:text-white",
        dot: "text-[#373B53] dark:text-white",
      },
    };

  const chosen = colors[color];

  return (
    <div
      className={`h-10 min-w-[120px] inline-flex items-center justify-center gap-2 rounded px-4 font-semibold ${chosen.bg} ${chosen.text}`}
      aria-label={`${status} status`}
    >
      <RxDotFilled
        className={`text-xl ${chosen.dot} shrink-0`}
        aria-hidden="true"
      />
      <span className="capitalize text-sm">{status}</span>
    </div>
  );
};

export default StatusLabel;
