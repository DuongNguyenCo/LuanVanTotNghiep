import logo from "~/assets/logo.png";
function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-first h-footer">
      <div className="w-1360 mx-auto py-2">
        <div className="flex flex-col items-center">
          <img src={logo} alt="logo trang web" width={150} />
          <p className="text-text1 text-span">-------------</p>
          <p className="text-text1 text-span italic">Giảng viên hướng dẫn</p>
          <p className="text-text1 text-span">ThS. </p>
          <p className="text-text1 text-span italic">Sinh viên thực hiện</p>
          <p className="text-text1 text-span">DH51903286 - Dương Nguyên Cơ</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
