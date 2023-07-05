
import { Nav, Footer } from "~/components";

function Default({ children }) {
    const candidate = JSON.parse(localStorage.getItem("isCandidate"));
    return (
        <div className="relative min-h-screen">
            <Nav candidate={candidate} />
            <div className="pt-nav pb-footer min-h-screen bg-second">{children}</div>
            <Footer />
        </div>
    );
}

export default Default;
