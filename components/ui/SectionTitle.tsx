/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.0
   File : components/ui/SectionTitle.tsx
========================================== */

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "mb-14 text-center" : "mb-14"}>

      <h2
        className="
          text-4xl
          font-extrabold
          text-white
          lg:text-5xl
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mx-auto
            mt-5
            max-w-3xl
            leading-8
            text-zinc-400
          "
        >
          {subtitle}
        </p>
      )}

    </div>
  );
}