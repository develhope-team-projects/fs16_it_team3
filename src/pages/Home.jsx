import { CaroselloNotizie } from "../components/CaroselloNotizie"
import { CaroselloHome } from "../components/CaroselloHome.jsx"
import { VideoHome } from "../components/VideoHome"
import { FormHome } from "../components/FormHome.jsx"
import "../style/Home.css"
import { Footer } from "../components/Footer.jsx"

export function Home() {
    return (
        <div>
        <main>
            <div style={{height:"150px"}}></div>
            <CaroselloHome />
            <VideoHome />
            <CaroselloNotizie />
            <FormHome />
            <div style={{height:"150px"}}></div>
        </main>
        <footer>
        <Footer />  
        </footer>
        </div>
    )
}