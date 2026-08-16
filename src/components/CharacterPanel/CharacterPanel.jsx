import character from "../../assets/images/character.png";
import hud from "../../assets/svg/hud.svg";
import ScrollIndicator from "../ScrollIndicator";

export default function CharacterPanel() {
  return (
    <section className="panel h-[720px] relative overflow-hidden">

      <div className="relative z-10 flex flex-col items-center h-full">
        <div className="pt-8 text-center">
          <h1 className="text-4xl font-black tracking-[0.18em] text-white drop-shadow-lg sm:text-5xl lg:text-6xl lg:tracking-widest">MAHMOUD</h1>
          <p className="mt-1 text-xl font-bold tracking-wider text-green-400">FULL STACK DEVELOPER</p>
          <p className="max-w-sm mt-3 text-sm leading-relaxed text-gray-300">
            I build modern, responsive and scalable web applications with clean code and great user experience.
          </p>
        </div>

        <img src={character} className="absolute h-[420px] object-contain" style={{bottom: '80px'}} />

        <img src={hud} alt="" className="absolute bottom-0 w-full opacity-80" />

        <div className="absolute left-0 right-0 flex justify-center bottom-2">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}
