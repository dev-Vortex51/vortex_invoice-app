type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionWrapper({
  title,
  children,
}: SectionWrapperProps) {
  return (
    <div>
      <h3 className="text-01 text-sm font-medium mb-4">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
