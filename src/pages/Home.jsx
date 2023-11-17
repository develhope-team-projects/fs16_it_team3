import { CaroselloNotizie } from "../components/CaroselloNotizie"
import { CaroselloProdotti } from "../components/CaroselloProdotti"
import { VideoHome } from "../components/VideoHome"
import { FormHome } from "../components/FormHome.jsx"
import "../style/Home.css"

export function Home() {
    return (
        <main>
            <div style={{height:"150px"}}></div>
            <CaroselloProdotti />
            <VideoHome />
            <CaroselloNotizie />
            <FormHome />
            <div style={{height:"150px"}}></div>
        </main>
    )
}