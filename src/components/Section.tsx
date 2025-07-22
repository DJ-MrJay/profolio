type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center items-center px-6 py-16 ${className}`}
    >
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <div className="max-w-3xl text-center">{children}</div>
    </section>
  );
}
