import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Footer } from "~/components";
import { path } from "~/routes/path";

function Default({ children }) {
    const navigate = useNavigate();
    const candidate = JSON.parse(localStorage.getItem("isCandidate"));
    useEffect(() => {
        if (!candidate) {
            navigate(path.CSIGNIN);
        }
        // eslint-disable-next-line
    }, [candidate]);
    return (
        <div className="relative min-h-screen">
            <Nav candidate={candidate} />
            <div className="pt-nav pb-footer min-h-screen bg-second">{children}</div>
            <Footer />
        </div>
    );
}

export default Default;
