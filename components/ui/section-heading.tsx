import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
          {eyebrow}
        </span>
      )}

      <h2 className="text-2xl font-semibold tracking-tight text-[#172019] sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-6 text-[#657069] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionHeading };
