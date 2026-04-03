type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  centered = false
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className={`section-title mt-6 ${light ? "text-white" : "text-carbon"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`section-copy mt-6 ${light ? "text-white/72" : "text-carbon/72"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
