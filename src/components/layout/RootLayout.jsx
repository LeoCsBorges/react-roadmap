import { Outlet } from "react-router";

import {
    Masthead,
    HeroBanner,
    AsideMenu,
    Footer,
} from "@/components/layout"

export const RootLayout = () => {
    return (
        <>
            <Masthead />
            <HeroBanner />
            <section style={{marginBlock: "2rem", display: "flex"}}>
                <AsideMenu />
                <Outlet />
            </section>
            <Footer />
        </>
    )
};
