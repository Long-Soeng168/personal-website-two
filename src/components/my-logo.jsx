const MyLogo = () => {
  return (
    <div className="min-w-20">
      <img
        src="/images/logo_bg_white.png"
        width={80}
        height={40}
        alt="Logo"
        className="dark:hidden"
      />
      <img
        src="/images/logo_bg_black.png"
        width={80}
        height={40}
        alt="Logo"
        className="hidden dark:block"
      />
    </div>
  );
};

export default MyLogo;
