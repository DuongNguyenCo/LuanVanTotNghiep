function Button(props) {
    const { onClick, label, className = "" } = props;
    return (
        <>
            <button
                onClick={onClick}
                className={"rounded bg-red text-w " + className}
            >
                {label}
            </button>
        </>
    );
}

export default Button;
