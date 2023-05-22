// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, NavB } from "~/components";
import { path } from "~/routes/path";

function Default({ children }) {
    const navigate = useNavigate();
    const business = JSON.parse(localStorage.getItem("isBusiness"));
    useEffect(() => {
        if (!business) {
            navigate(path.BSIGNIN);
        }
        // eslint-disable-next-line
    }, [business]);
    return (
        <div className="relative min-h-screen">
            <NavB business={business && business} />
            <div className="pt-nav pb-footer min-h-screen bg-second">{children}</div>
            <Footer />
        </div>
    );
}

export default Default;
