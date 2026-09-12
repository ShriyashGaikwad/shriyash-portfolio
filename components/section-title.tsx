export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
        {children}
      </h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
    </div>
  );
}
