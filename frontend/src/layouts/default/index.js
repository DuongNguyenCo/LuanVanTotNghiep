import { Nav, Footer } from "~/components";

function Default({ children }) {
    return (
        <div className="relative min-h-screen">
            <Nav />
            <div className="pt-nav pb-footer min-h-screen bg-second">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Default;
