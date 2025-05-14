import { Outlet } from "react-router";

import {
    Masthead,
    HeroBanner,
    Sidebar,
    Footer,
} from "@/components/layout"

export const RootLayout = () => {
    return (
        <>
            <Masthead />
            <HeroBanner />
            <section style={{marginBlock: "2rem", display: "flex"}}>
                <Sidebar />
                <Outlet />
            </section>
            <Footer />
        </>
    )
};
