function Star(prop) {
  const stars = prop.stars;
  return (
    <div
      // eslint-disable-next-line
      className="relative text-5xl inline-block before:content-['\2605_\2605_\2605_\2605_\2605'] before:text-text1"
    >
      <div
        // eslint-disable-next-line
        className={`absolute top-0 left-0 overflow-hidden before:content-['\\2605_\\2605_\\2605_\\2605_\\2605'] before:text-[#ffd700]`}
        style={{ width: stars + "%" }}
      ></div>
    </div>
  );
}

export default Star;
