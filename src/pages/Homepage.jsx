import { SekilasAcara, DataPembicara, PortfolioData } from "../data";
import { Image } from "../data";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Homepage = () => {
  const images = [Image.HeroImage1, Image.HeroImage2, Image.HeroImage3];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const fullText =
    "Clean, modern, and user-focused websites built to enhance every digital experience. Thoughtful design meets efficient code, creating smooth, responsive, and impactful interfaces. A better digital presence starts with purposeful craftsmanship made to stand out.";

  const [text, setText] = useState("");
  const typingInterval = useRef(null);

  // Animasi pertama kali saat load
  useEffect(() => {
    let i = 0;
    typingInterval.current = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval.current);
    }, 20);

    return () => clearInterval(typingInterval.current);
  }, []);

  // Hover → erase
  const handleHover = () => {
    clearInterval(typingInterval.current);
    let i = fullText.length;
    typingInterval.current = setInterval(() => {
      setText(fullText.substring(0, i));
      i--;
      if (i < 0) clearInterval(typingInterval.current);
    }, 15);
  };

  // Mouse leave → typing forward lagi
  const handleLeave = () => {
    clearInterval(typingInterval.current);
    let i = 0;
    typingInterval.current = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval.current);
    }, 15);
  };

  return (
    <div className="homepage pt-16">
      <div className="container mx-auto px-2">
        {/* Hero */}
        <div className="hero grid md:grid-cols-2 items-center grid-cols-1 lg:pt-0 pt-16">
          <div className="text-center md:text-left lg:pb-0 pb-16">
            <div className="bg-indigo-900 w-fit p-2 rounded-md flex items-center gap-2 mx-auto md:mx-0 mb-4 ">
              <img
                src={Image.HeroImage1}
                alt="Hero Image"
                className="lg:w-10 w-7"
              />
              <q className="text-white lg:text-base text-xs">
                I Ketut Pasek Bayu Suta S.Kom
              </q>
            </div>
            <h1 className="xl:text-8xl/tight font-semibold mb-2 lg:text-7xl/tight text-6xl/tight">
              <ReactTyped
                strings={["Digital Made Better."]}
                typeSpeed={70}
                backSpeed={40}
                loop={true}
                showCursor={true}
              />
            </h1>
            <p
              className="xl:text-base/loose opacity-75 text-sm/loose cursor-pointer"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              {text}
            </p>

            <div className="mt-6">
              <a
                href="#"
                className="bg-stone-950 w-fit text-white p-3 rounded text-lg hover:bg-stone-800"
              >
                View Portofolio <i className="ri-eye-fill"></i>
              </a>
            </div>
          </div>
          <img
            src={images[index]}
            alt="Hero Image"
            className="w-full md:block hidden lg:mb-0 -mb-0"
          />
        </div>
      </div>
      {/* Tentang */}
      <div className="tentang bg-stone-950 py-28">
        <div className="container mx-auto px-2">
          <h1
            className="text-center text-white md:text-5xl/tight text-4xl/tight mb-6 font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            About Me
          </h1>
          <p
            className="text-center text-white/75 md:text-base/loose text-sm/loose"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            A Web Developer with a focus on creating clean, modern, and
            responsive digital experiences, combining front-end development
            skills with thoughtful UI/UX design to turn ideas into functional
            and visually appealing interfaces. This work is supported by strong
            attention to detail and a commitment to clarity and consistency in
            every project. Alongside web development, support is also provided
            for academic needs—including assignments and thesis
            assistance—delivered with organized, well-structured, and reliable
            results to help others achieve their goals both digitally and
            academically.
          </p>

          <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {SekilasAcara.map((acara) => (
              <div
                key={acara.id}
                className="text-center bg-white p-4 rounded-lg hover:bg-indigo-900 group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={acara.id * 200}
              >
                <i
                  className={` ${acara.icon} group-hover:text-white ri-3x text-indigo-900`}
                ></i>
                <h1 className="group-hover:text-white text-3xl font-semibold my-4">
                  {acara.Judul}
                </h1>
                <p className="group-hover:text-white text-base/loose opacity-75">
                  {acara.text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to={"About"}
              className="bg-indigo-900 w-fit text-white p-3 rounded text-lg hover:bg-indigo-800"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              View Details <i className="ri-eye-fill"></i>
            </Link>
          </div>
        </div>
      </div>

      {/*Komentar*/}
      <div className="komentar py-28">
        <div className="container mx-auto px-2">
          <h1
            className="text-center md:text-5xl/tight text-4xl/tight mb-2 font-semibold "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Client Experiences
          </h1>
          <p
            className="text-center  md:text-base/loose text-sm/loose "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Here are comments and experiences from clients who have previously
            worked with me
          </p>
          <div
            className="flex gap-10 justify-center items-center sm:flex-row flex-col mt-16"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div
              className="box relative w-96"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img
                src={Image.Pembicara1}
                alt="Pembicara Utama"
                className="rounded-t-2xl"
              />
              <div className="absolute w-full h-1/2 bg-gradient-to-t from-black/90 from-40%  to-black/0 to-100% bottom-0 left-0"></div>
              <div className="absolute bottom-7 w-full text-center">
                <h1 className="text-white text-3xl font-semibold">
                  Ms. Jessica
                </h1>
                <p className="text-white/80 text-sm/loose">CEO Villa Ubud</p>
              </div>
            </div>
            <div
              className="box relative w-96"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <img
                src={Image.Pembicara2}
                alt="Pembicara Utama"
                className="rounded-t-2xl"
              />
              <div className="absolute w-full h-1/2 bg-gradient-to-t from-black/90 from-40%  to-black/0 to-100% bottom-0 left-0"></div>
              <div className="absolute bottom-7 w-full text-center">
                <h1 className="text-white text-3xl font-semibold">
                  Mr. Robert
                </h1>
                <p className="text-white/80 text-sm/loose">
                  CEO Seminyak Hotel
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link
              to={"Sosmed"}
              className="bg-indigo-900 w-fit text-white p-3 rounded text-lg hover:bg-indigo-800"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-once="true"
              reloadDocument
            >
              View Details <i className="ri-eye-fill"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* Akhir Komentar */}
      {/* Sponsor */}
      <div className="sponsor bg-stone-950 py-16">
        <div className="container mx-auto px-2">
          <h1
            className=" text-white text-center md:text-5xl/tight text-4xl/tight mb-8 font-semibold "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            In Collaboration With
          </h1>
          <div className="flex items-center justify-center gap-10 flex-wrap sm:flex-nowrap">
            <img src={Image.Sponsor1} alt="Sponsor Image" className="w-24" />
            <img src={Image.Sponsor2} alt="Sponsor Image" className="w-32" />
            <img src={Image.Sponsor3} alt="Sponsor Image" className="w-24" />
            <img src={Image.Sponsor4} alt="Sponsor Image" className="w-32" />
          </div>
        </div>
      </div>
      {/* Sponsor */}

      {/* Paket */}
      <div className="paket py-28">
        <div className="container mx-auto px-2">
          <h1
            className="text-center md:text-5xl/tight text-4xl/tight mb-2 font-semibold "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Our Office
          </h1>
          <p
            className="text-center  md:text-base/loose text-sm/loose "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            We are located in the heart of Denpasar/Bali, easily accessible and
            ready to assist you with our services. Come visit us and discover
            how we can bring your digital projects to life
          </p>
          <div className="mt-20 flex justify-center gap-10 md:flex-row flex-col items-center md:items-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5473816305!2d115.23364100773665!3d-8.639374987806535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f78774a1483%3A0x86df9cef453ad35d!2sPerum%20Citra%20Mas!5e0!3m2!1sid!2sid!4v1765590354280!5m2!1sid!2sid"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="p-2 bg-stone-950 sm:w-[500px] h-[400px] w-full"
            ></iframe>

            <div>
              <div className="mb-7">
                <p className="flex items-center gap-2">
                  <i className="ri-earth-fill ri-3x"></i>
                  Perumahan Citra Mas Noja XXIX A Denpasar Timur Bali
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-calendar-fill ri-3x"></i>
                  Monday - Friday, 9AM - 6PM
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-user-voice-fill ri-3x"></i>
                  Contact : +62 819-4973-3430
                </p>
              </div>
              <h1 className="text-5xl font-semibold">Let’s Begin </h1>
              <div className="mt-8">
                <Link
                  to={"https://forms.gle/enrxpSWvuMKJb6Zu7"}
                  className="bg-indigo-900 w-fit text-white p-3 rounded text-lg hover:bg-indigo-800"
                  reloadDocument
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Paket */}

      {/* Portfolio Section */}
      <div className="portfolio py-28 bg-stone-950">
        <div className="container mx-auto px-2">
          <h1
            className="text-center text-4xl md:text-5xl font-semibold mb-6 text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Portfolio
          </h1>
          <p
            className="text-center text-sm md:text-base/loose text-white mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Here are some of my selected projects, demonstrating clean design,
            responsive layouts, and modern UI/UX practices. Click on any project
            to see details.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PortfolioData.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={idx * 100}
                data-aos-once="true"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-stone-900 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="Portofolio"
              className="bg-indigo-900 text-white p-3 rounded-lg hover:bg-indigo-800 transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-once="true"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
