export const FinalStepHeader = ({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className="text-neutral-500 text-sm">{subtitle}</p>
    </div>
  );
};
