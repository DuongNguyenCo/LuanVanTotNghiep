import { Link } from "react-router-dom";

function BusinessJob(prop) {
    const { nameP, salary_min, salary_max, language, address, timePost, url } = prop;
    const date = new Date(timePost);

    return (
        <Link
            to={`/chi-tiet-cong-viec/${nameP}`}
            className="border-t border-t-text1 py-7 flex cursor-pointer
            mobile:flex-col mobile:py-3"
        >
            <div
                className="h-24 w-24 mx-4 my-auto flex justify-center items-center border p-2
                mobile:mx-auto mobile:w-32"
            >
                <img src={url} alt="123" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
                <div className="font-bold text-lg">{nameP}</div>
                <div className="flex">
                    <div className="flex-1 text-[14px] text-[rgb(104,186,80)] mb-1">
                        {salary_min !== 0 && salary_max !== 0
                            ? salary_min.toLocaleString("it-IT", { style: "currency", currency: "VND" }) +
                              " - " +
                              salary_max.toLocaleString("it-IT", { style: "currency", currency: "VND" })
                            : salary_max === 0 && salary_min !== 0
                            ? salary_min.toLocaleString("it-IT", { style: "currency", currency: "VND" }) + " UPTO "
                            : "You'll love it"}
                    </div>
                    <div className="hidden bg-yellow text-w px-2 mobile:block">new</div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {language.map((e) => {
                        return (
                            <p className="border border-text1 px-1 " key={e.id}>
                                {e.name}
                            </p>
                        );
                    })}
                </div>
            </div>
            <div
                className="flex flex-col items-end justify-between
      mobile:flex-row-reverse
      "
            >
                <div className="bg-yellow text-w px-2 mobile:hidden">new</div>
                <div className="flex flex-col items-end">
                    {address.map((e) => {
                        return (
                            <p className="text-xs text-text1" key={e.id}>
                                {e.city}
                            </p>
                        );
                    })}
                </div>
                <div className="text-sm text-text1">{date.toLocaleDateString()}</div>
            </div>
        </Link>
    );
}

export default BusinessJob;
