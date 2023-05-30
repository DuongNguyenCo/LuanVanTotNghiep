import { Link } from "react-router-dom";

function JobRelate(prop) {
    const { nameB, nameP, language, timePost, url } = prop;
    const date = new Date(timePost);
    return (
        <Link to={`/chi-tiet-cong-viec/${nameP}`} className="rounded-md border border-text1 p-2">
            <div className="flex w-full mb-2">
                <div className="w-3/12 flex items-center mr-3">
                    <img src={url} alt="123" />
                </div>
                <div className="flex-1 flex flex-col gap-0.5">
                    <p className="text-xl font-bold">{nameP}</p>
                    <p>{nameB}</p>
                    <div className="flex flex-wrap gap-2">
                        {language.map((e) => {
                            return (
                                <p className="border border-text1 px-1 " key={e.id}>
                                    {e.name}
                                </p>
                            );
                        })}
                    </div>
                    <p className="">{date.toLocaleDateString()}</p>
                </div>
            </div>
        </Link>
    );
}

export default JobRelate;
