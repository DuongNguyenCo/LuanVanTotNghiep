function Input(props) {
    const { id, name, setValue, init, label = undefined, type, placeholder, dis = false, className } = props;
    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type || "text"}
                placeholder={!dis ? placeholder : ""}
                disabled={dis}
                name={name}
                autoComplete={type === "password" ? "current-password" : "off"}
                onChange={(e) => {
                    setValue({
                        ...init,
                        [e.target.name]: e.target.value,
                    });
                }}
                className={`${label && "mt-2 "}
                          disabled:bg-[rgb(233,236,239)]
                          disabled:placeholder:text-w
                          placeholder:italic
                          placeholder:text-slate-400
                          block
                          bg-white
                          w-full
                          border
                          border-slate-300
                          rounded-md
                          py-2
                          pl-2
                          pr-3
                          shadow-sm
                          focus:outline-none
                          focus:border-sky-500
                          focus:ring-sky-500
                          focus:ring-1
                          sm:text-sm`}
            />
        </div>
    );
}

export default Input;
