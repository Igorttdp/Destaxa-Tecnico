import { cn } from "@/lib/utils";

interface FormWarningProps {
  className?: string;
}

const FormWarning = ({ className }: FormWarningProps) => (
  <div className={cn("flex items-center gap-1", className)}>
    <div className="w-2 h-2 rounded-full bg-[#FF9292]"></div>
    <span className="text-[8px] leading-[9.68px]">Preenchimento pendente</span>
  </div>
);

export default FormWarning;
