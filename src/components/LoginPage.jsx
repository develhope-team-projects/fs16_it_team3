import logoMail from "../assets/logoMail.svg";
import logoPassword from "../assets/logoPassword.svg";
import Logo from "../assets/Logo.png";
import { useState } from "react";

export default function LoginPage() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState({ email: "", password: "" });

  function register(event) {
    event.preventDefault();
    setShow(false);
  }

  function login(event) {
    event.preventDefault();
    setShow(true);
    data.email === "" && alert("La mail è obbligatoria");
    data.password === "" && alert("La password è obbligatoria");
    console.log(data)
  }

  function handleInput(event) {
    const { name, value } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  return (
    <div className="min-h-screen w-screen flex flex-col items-center myfont">
      <form
        className={
          show
            ? " w-10/12 lg:w-2/3 xl:w-1/3 h-2/6 flex flex-col gap-5 relative pt-8"
            : "w-10/12 lg:w-2/3 xl:w-1/3 h-1/6 flex flex-col gap-5 relative pt-8"
        }
      >
       <a href="/">
       < img
          className="hidden lg:block absolute w-40 -left-2/3"
          src={Logo}
          alt="Logo del sito"
        />
       </a>
        <h2 className="md:text-3xl  text-xl font-bold">Bentornato!</h2>
        <div className={show ? "w-full" : "hidden"}>
          <p className="border-2 border-black w-fit px-3 md:py-1 border-b-0">
            Indirizzo E-Mail
          </p>
          <div className="w-full px-2 md:py-2 border-2 border-black flex items-center justify-start gap-3">
            <img src={logoMail} alt="logomail" width={35} />
            <input
              className="w-full"
              placeholder="Indirizzo E-Mail"
              type="email"
              value={data.email}
              onChange={handleInput}
              name="email"
              required
            />
          </div>
        </div>
        <div className={show ? "w-full" : "hidden"}>
          <p className="border-2 border-black w-fit px-3 md:py-1 border-b-0">
            La tua password!
          </p>

          <div className="w-full px-2 md:py-2 border-2 border-black flex items-center justify-start gap-3">
            <img src={logoPassword} alt="logomail" width={35} />
            <input
              className="w-full"
              placeholder="La tua password!"
              type="password"
              value={data.password}
              onChange={handleInput}
              name="password"
              required
            />
          </div>
        </div>
        <button
          className="w-full px-2 py-2 bg-black hover:bg-slate-400 text-white text-center"
          onClick={login}
          type="submit"
        >
          Accedi
        </button>
        <a
          className="hover:border-b-4 w-fit border-red-600 text-red-600 text-xl font-bold"
          href="/"
        >
          Hai dimenticato la password?
        </a>
      </form>
      <div className="w-screen border-b border-slate-400">&nbsp;</div>
      <form className="w-10/12 lg:w-2/3 xl:w-1/3 py-2 flex flex-col gap-5 pt-10">
        <h2 className="md:text-3xl  text-xl font-bold">
          Sono un nuovo cliente
        </h2>

        <div className={!show ? "w-full" : "hidden"}>
          <p className="border-2 border-black w-fit px-3 md:py-1 border-b-0">
            Nome*
          </p>

          <div className="w-full px-2 md:py-2 border-2 border-black flex items-center justify-start gap-3">
            <input className="w-full" placeholder="Nome" type="text" required />
          </div>
        </div>
        <div className={!show ? "w-full" : "hidden"}>
          <p className="border-2 border-black w-fit px-3 md:py-1 border-b-0">
            Cognome*
          </p>

          <div className="w-full px-2 md:py-2 border-2 border-black flex items-center justify-start gap-3">
            <input
              className="w-full"
              placeholder="Cognome"
              type="text"
              required
            />
          </div>
        </div>
        <div className={!show ? "w-full" : "hidden"}>
          <p className="border-2 border-black w-fit px-3 md:py-1 border-b-0">
            Data di nascita
          </p>

          <div className="w-full px-2 md:py-2 border-2 border-black flex items-center justify-start gap-3">
            <input className="w-full" placeholder="" type="date" required />
          </div>
        </div>
        <div className={!show ? "w-full" : "hidden"}>
          <p className="border-2 border-black w-fit px-3 md:py-1 border-b-0">
            Indirizzo E-Mail*
          </p>

          <div className="w-full px-2 md:py-2 border-2 border-black flex items-center justify-start gap-3">
            <input
              className="w-full"
              placeholder="Indirizzo E-Mail"
              type="email"
              required
            />
          </div>
        </div>
        <div className={!show ? "w-full" : "hidden"}>
          <p className="border-2 border-black w-fit px-3 md:py-1 border-b-0">
            La tua password*
          </p>

          <div className="w-full px-2 md:py-2 border-2 border-black flex items-center justify-start gap-3">
            <input
              className="w-full"
              placeholder="La tua password"
              type="password"
              minLength="8"
              required
            />
          </div>
        </div>
        <div className={!show ? "" : "hidden"}>
          <p>Quale categoria di interessa? &#40;facoltativa&#41;</p>
          <p>
            Useremo queste informazioni per darti suggerimenti personalizzati.
          </p>
        </div>

        <div className={!show ? " flex flex-col gap-3 md:text-lg " : "hidden"}>
          <div className="flex gap-2">
            <input type="radio" id="Donna" name="Moda" />
            <label htmlFor="Donna">Moda Donna</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="Uomo" name="Moda" />
            <label htmlFor="Uomo">Moda Uomo</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="Nessuna" name="Moda" />
            <label htmlFor="Nessuna">Nessuna Preferenza</label>
          </div>
        </div>

        <div
          className={!show ? "flex gap-2 border-t-2 items-center" : "hidden"}
        >
          <input type="checkbox" id="Marketing" name="Marketing" />
          <label htmlFor="Marketing">
            Sì, voglio conoscere Sconti, Offerte Speciali e Nuovi Prodotti prima
            di tutti! &#40;facoltativa&#41;
          </label>
        </div>

        <button
          className="w-full px-2 py-2 hover:text-white text-center border-4  hover:bg-slate-400 border-black font-bold"
          type="submit"
          onClick={register}
        >
          Registrati
        </button>
        <div className={!show ? "" : "hidden"}>
          <p>* Campo obbligatorio</p>
          <p>
            Registrandoti per un account, accetti i nostri{" "}
            <a className="text-blue-400 underline" href="/">
              Termini di utilizzo.
            </a>{" "}
            Si prega di consultare la nostra{" "}
            <a className="text-blue-400 underline" href="/">
              Privacy Policy.
            </a>
          </p>
        </div>
        <div className="flex justify-around font-bold pt-16">
          <a className="hover:border-b hover:border-b-black" href="/">
            Informativa sulla privacy
          </a>
          <a className="hover:border-b hover:border-b-black" href="/">
            Informazioni e utilizzi
          </a>
          <a className="hover:border-b hover:border-b-black" href="/">
            Diritto di recesso
          </a>
        </div>
        <img
          className="w-20 self-center mt-12"
          src={Logo}
          alt="Logo del sito"
        />
      </form>
    </div>
  );
}
