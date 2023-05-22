import { NavB } from "~/components";

function NoFooter({ children }) {
    const business = JSON.parse(localStorage.getItem("isBusiness"));
    return (
        <div className="relative min-h-screen">
            <NavB business={business} />
            <div className="pt-nav min-h-screen bg-second">{children}</div>
        </div>
    );
}

export default NoFooter;
