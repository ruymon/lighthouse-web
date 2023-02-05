import { Link } from "react-router-dom";
import lostSailor from "../assets/lost-sailor.svg";

export function NotFound() {
  return (
    <main className="w-full h-screen max-h-full overflow-hidden flex items-center justify-between">
      <img src={lostSailor} alt="Lost Sailor Illustration" className="-ml-48 grow overflow-hidden" />

      <div className="h-full flex flex-col items-start gap-12 p-8 justify-center w-[40%]">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-extrabold text-teal-500">404</h1>
          <h2 className="text-4xl font-bold text-teal-500">Onde estamos, Capitão?!</h2>
        </div>

        <span className=" text-slate-500 text-lg w-3/4 leading-loose">Acredito que se perdemos em alto mar... A página que você requisitou não foi encontrada.</span>
        
        <Link to="/" className="font-bold text-white px-8 py-3 bg-teal-500 rounded-md">Voltar</Link>
      </div>
    </main>
  );
};
