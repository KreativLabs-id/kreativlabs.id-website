export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A192F] flex flex-col items-center justify-center gap-6">
      <div className="loader"></div>
      <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase animate-pulse">
        Memuat KreativLabs...
      </p>
    </div>
  );
}

