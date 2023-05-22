//{ path: '/Signin', component: Signin, layout: LayoutSignInUp },
import { Default, DefaultB, NoFooter, SignInUp } from "~/layouts";
import { HomeC, SignInC, SignUpC, JobC, BusinessC, JobDetailC, BusinessDetailC, Apply } from "~/pages/Candidate";
import { HomeB, SignInB, SignUpB, JobB, CandidateB, PostB, InforB } from "~/pages/Business";
import { path } from "./path";

export const router = [
    { path: path.CHOME, component: HomeC, layout: Default },
    { path: path.CJOB, component: JobC, layout: Default },
    { path: path.CBUSINESS, component: BusinessC, layout: Default },
    { path: path.CDETAILJOB, component: JobDetailC, layout: Default },
    { path: path.CDETAILBUSINESS, component: BusinessDetailC, layout: Default },
    { path: path.CAPPLY, component: Apply, layout: SignInUp },
    { path: path.CSIGNIN, component: SignInC, layout: SignInUp },
    { path: path.CSIGNUP, component: SignUpC, layout: SignInUp },

    { path: path.BSIGNIN, component: SignInB, layout: SignInUp },
    { path: path.BSIGNUP, component: SignUpB, layout: SignInUp },
    { path: path.BHOME, component: HomeB, layout: DefaultB },
    { path: path.BJOB, component: JobB, layout: DefaultB },
    { path: path.BCANDIDATE, component: CandidateB, layout: NoFooter },
    { path: path.BPOST, component: PostB, layout: NoFooter },
    { path: path.BINFOR, component: InforB, layout: NoFooter },
];
