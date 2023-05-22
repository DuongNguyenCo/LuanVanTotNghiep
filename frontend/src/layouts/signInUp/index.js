import { Link } from "react-router-dom";
import { path } from "~/routes/path";
import logo from "~/assets/logo.png";

function SignInUp({ children }) {
    return (
        <>
            <nav className="fixed w-full bg-first z-50">
                <div
                    className="w-main h-nav mx-auto flex items-center gap-2 px-3 relative
                    tablet:justify-between tablet:w-auto tablet:
                    mobile:justify-between mobile:w-auto mobile:relative"
                >
                    <Link to={path.CHOME}>
                        <img
                            src={logo}
                            alt="logo nhà cung cấp"
                            className="h-10"
                        />
                    </Link>
                </div>
            </nav>
            <div className="pt-nav min-h-screen bg-second">{children}</div>
        </>
    );
}

export default SignInUp;
