const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center items-center py-3 bg-black text-white text-[16px]">
        <div>
          <strong className="font-bold text-[14px] md:text-[16px]">
            SecretShop
          </strong>{" "}
          &copy; {currentYear}. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
