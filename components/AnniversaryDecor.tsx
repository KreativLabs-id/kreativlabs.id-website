export default function AnniversaryDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-4 top-24 flex w-32 rotate-[-14deg] justify-evenly border-t border-primary/35 sm:top-32 sm:w-52">
        <span className="h-7 w-5 bg-[#6995AD]/55 [clip-path:polygon(0_0,100%_0,50%_100%)] sm:h-10 sm:w-7" />
        <span className="h-7 w-5 bg-[#29B8BD]/50 [clip-path:polygon(0_0,100%_0,50%_100%)] sm:h-10 sm:w-7" />
        <span className="h-7 w-5 bg-[#A8CEDD]/65 [clip-path:polygon(0_0,100%_0,50%_100%)] sm:h-10 sm:w-7" />
      </div>
      <div className="absolute -right-4 top-24 flex w-32 rotate-[14deg] justify-evenly border-t border-primary/35 sm:top-32 sm:w-52">
        <span className="h-7 w-5 bg-[#A8CEDD]/65 [clip-path:polygon(0_0,100%_0,50%_100%)] sm:h-10 sm:w-7" />
        <span className="h-7 w-5 bg-[#29B8BD]/50 [clip-path:polygon(0_0,100%_0,50%_100%)] sm:h-10 sm:w-7" />
        <span className="h-7 w-5 bg-[#6995AD]/55 [clip-path:polygon(0_0,100%_0,50%_100%)] sm:h-10 sm:w-7" />
      </div>
      <span className="absolute -left-20 top-24 h-48 w-48 rounded-full border border-primary/20 sm:-left-24 sm:h-72 sm:w-72" />
      <span className="absolute -left-16 top-28 h-44 w-44 rounded-full border border-primary/10 sm:-left-20 sm:h-64 sm:w-64" />
      <span className="absolute -right-24 bottom-16 h-56 w-56 rounded-full border border-primary/15 sm:h-80 sm:w-80" />
      <span className="absolute left-[8%] top-[42%] h-3 w-1.5 -rotate-[25deg] bg-primary/35" />
      <span className="absolute right-[9%] top-[23%] h-2 w-2 rotate-[20deg] bg-[#29B8BD]/40" />
      <span className="absolute right-[15%] bottom-[25%] h-3 w-1.5 rotate-[30deg] bg-primary/30" />
      <span className="absolute left-[13%] top-[29%] hidden h-12 w-6 rotate-[-25deg] rounded-full border-x-[3px] border-t-[3px] border-primary/35 sm:block" />
      <span className="absolute right-[12%] top-[40%] hidden h-10 w-5 rotate-[30deg] rounded-full border-x-[3px] border-b-[3px] border-[#29B8BD]/35 sm:block" />
      <span className="absolute left-[5%] bottom-[36%] h-2 w-2 rotate-[40deg] bg-[#29B8BD]/40" />
      <span className="absolute right-[6%] top-[53%] h-3 w-1.5 -rotate-[20deg] bg-primary/40" />
    </div>
  );
}
