const Footer = () => {
  return (
    <div className="bg-stone-700 py-6">
      <div className="container mx-auto px-2 flex justify-between items-center md:flex-row flex-col md:gap-0 gap-2">
        <p className="text-white text-base/loose">
          &copy; Copyright by <span className="font-bold">Baytech.id</span> 2025
        </p>
        <div className="flex items-center gap-4 md:gap-4 gap-1">
          <p className="text-white text-base/loose">Social Media</p>
          <span className="text-white">-</span>
          <a href="https://www.instagram.com/pasekbayu12/">
            <i className="ri-instagram-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
          <a href="https://www.tiktok.com/@bayubayy2345">
            <i className="ri-tiktok-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
          <a href="https://www.facebook.com/pasek.pasek.543">
            <i className="ri-facebook-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
          <a href="https://www.linkedin.com/in/i-ketut-pasek-bayu-suta-0b4930390/">
            <i className="ri-linkedin-box-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
          <a href="https://github.com/Bayusuta-coder">
            <i className="ri-github-fill text-white ri-2x hover:text-indigo-900"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
