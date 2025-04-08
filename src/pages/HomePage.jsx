import { Masthead } from "@/components/Masthead"
import { HeroBanner } from "@/components/HeroBanner"
import { AsideMenu } from "@/components/AsideMenu"
import { ItemContainer } from "@/components/ItemContainer"
import { Footer } from "@/components/Footer"

export const HomePage = () => {
    return (
    <>
        <Masthead />
        <HeroBanner />
        <section style={{marginBlock: "2rem", display: "flex"}}>
            <AsideMenu />
            <ItemContainer />
        </section>
        <Footer />
    </>
    )
}



