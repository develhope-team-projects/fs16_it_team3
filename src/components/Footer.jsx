import "../style/Footer.css"
import BartoliniLogo from '../assets/BARTOLINI.svg';
import DhlLogo from '../assets/Dhl.svg';
import SdaLogo from '../assets/Sda.svg';
import PaypalLogo from '../assets/Paypal.svg';
import MastercardLogo from '../assets/Mastercard.svg';
import MaestroLogo from '../assets/Maestro.svg';
import VisaLogo from '../assets/Visa.svg';
import AppStoreLogo from '../assets/appstore.svg'
import GoogleLogo from '../assets/googleplay.svg'
import FacebookLogo from '../assets/facebook.svg'
import InstaLogo from '../assets/instagram.svg'
import TwittLogo from '../assets/twitter.svg'
import PintLogo from '../assets/pinterest.svg'

export function Footer() {
   
   
    return(
        <footer>
        <div className="container-footer">
        <div className="aiuto-footer">
            <h3>Aiuto e Contatti</h3>
            <a href="">Domande frequenti</a>
            <a href="">Procedi all'ordine</a>
            <a href="">Tempi di spedizione</a>
            <a href="">Come effetuare un reso</a>
            <a href="">Prodotti partner</a>
        </div>
        <div className="buoni-footer">
            <h3>Buoni regalo</h3>
            <a href="">Acquista un buono regalo</a>
            <a href="">Codice acquisto PuntoLis</a>
            <a href="">Buoni Regalo Aziendali</a>
            <a href="">Codici regalo SisalPay | 5</a>
        </div>
        <div className="pagamento-footer">
            <h3>Modalità di pagamento</h3>
            <div className="svg-pagamenti">
            <img  src={PaypalLogo} alt="" />
            <img  src={MastercardLogo} alt="" />
            <img  src={MaestroLogo} alt="" />
            <img  src={VisaLogo} alt="" />
            </div>

        </div>
        <div className="spedizioni-footer">
            <h3>Spedito da</h3>
            <div className="svg-spedizioni">
            <img className="bartolini-footer" src={BartoliniLogo} alt="" />
            <img className="dhl-footer" src={DhlLogo} alt="" />
            <img className="sda-footer" src={SdaLogo} alt="" />
            </div>
        </div>
        </div>
        <div className="container-footer2">
            <div className="generali-footer2">
            <div className="primo-generali">
            <a className="cvg-footer" href="">CVG</a>
            <a className="informazioni-footer" href="">Informazioni legali</a>
            <a className="informativa-footer" href="">Informativa sulla privacy</a>
            </div>
            <div className="secondo-generali">
            <a className="diritto-footer" href="">Diritto di recesso</a>
            <a className="tech-footer" href="">Tech blog</a>
            <a className="impostazioni-footer" href="">Impostazioni dati</a>
            </div>
            </div>
            <div className="applicazioni-footer2">
                <img className="" src={AppStoreLogo} alt="" />
                <img className="" src={GoogleLogo} alt="" />
            </div>
            <div className="social-footer2">
                <p className="trovaci-footer2">Trovaci anche su:</p>
                <div className="svg-social">
                    <img className="flogo" src={FacebookLogo} alt="" />
                    <img className="inlogo" src={InstaLogo} alt="" />
                    <img className="twlogo" src={TwittLogo} alt="" />
                    <img className="pilogo" src={PintLogo} alt="" />
                </div>
            </div>
        </div>
        </footer>
    )
}