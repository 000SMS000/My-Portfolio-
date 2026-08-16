export default function SectionTitle({ label, title }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-bold tracking-[0.3em] text-green-400 uppercase">
        {label}
      </p>
      <h2 className="text-2xl font-black tracking-widest text-white uppercase">
        {title}
      </h2>
    </div>
  );
}
