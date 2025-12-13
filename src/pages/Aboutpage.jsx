const Aboutpage = () => {
  return (
    <div className="tentang py-40">
      <div className="container mx-auto px2">
        <h1 className="text-center text-6xl font-semibold">About</h1>
        <p className="text-justify text-base/loose mt-8">
          Hi! I’m <span className="font-bold text-2xl">Bayu</span>, a Web
          Developer and UI/UX Designer passionate about creating clean, modern,
          and user-friendly digital experiences. I specialize in turning ideas
          into functional websites that look great and perform flawlessly across
          all devices. With a strong focus on responsive design, attention to
          detail, and efficient coding, I aim to deliver solutions that help
          clients succeed online. Beyond web development, I also provide support
          for academic projects, including assignments, proposals, and thesis
          assistance, ensuring organized and reliable results. I believe that
          great digital experiences are built when creativity meets purpose, and
          I’m committed to helping clients achieve impactful and meaningful
          results in every project.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
          <div>
            <h1 className="text-6xl font-semibold mb-8 mt-10">Objective</h1>
            <ol className="list-decimal flex flex-col gap-4">
              <li className="text-base/loose">
                <span className="font-bold">Inspire and Educate: </span> To
                create web experiences that engage users, encourage learning,
                and provide meaningful digital solutions that inspire curiosity
                and growth.
              </li>
              <li className="text-base/loose">
                <span className="font-bold">Enhance User Experience: </span> To
                deliver clean, modern, and responsive designs that improve
                usability, optimize performance, and ensure every interaction is
                intuitive and enjoyable.
              </li>
              <li className="text-base/loose">
                <span className="font-bold">Achieve Digital Goals: </span> To To
                help clients reach their objectives through thoughtful UI/UX
                design, efficient coding practices, and innovative solutions
                that make a measurable impact online.
              </li>
            </ol>
          </div>

          <div>
            <h1 className="text-6xl font-semibold mb-8 mt-10"> Vision</h1>
            <p className="text-base/loose mb-10">
              To become a leading Web Developer and UI/UX Designer recognized
              for creating innovative, user-centered, and impactful digital
              experiences that help clients succeed and inspire others in the
              digital space.
            </p>
            <h1 className="text-6xl font-semibold mb-8 mt-10">Mision</h1>
            <ol className="list-decimal flex flex-col gap-4">
              <li className="text-base/loose">
                To create clean, modern, and responsive websites that provide
                seamless user experiences and meet clients’ needs effectively
              </li>
              <li className="text-base/loose">
                To To apply creative design principles and innovative coding
                practices that make each project unique, engaging, and
                impactful.
              </li>
              <li className="text-base/loose">
                To assist clients in achieving their digital goals by providing
                reliable, organized, and professional services that add real
                value to their online presence.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
