import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { PortfolioData } from "../data";
import { Bar } from "react-chartjs-2";

const PortfolioPage = () => {
  // Contoh data chart
  const chartData = {
    labels: ["React", "UI/UX", "HTML", "CSS", "JavaScript"],
    datasets: [
      {
        label: "Skill Level",
        data: [90, 85, 95, 80, 88],
        backgroundColor: "#4f46e5",
      },
    ],
  };

  return (
    <div className="portfolio py-28">
      <div className="container mx-auto px-2">
        <h1 className="text-5xl font-semibold text-center mb-6">
          My Portfolio
        </h1>
        <p className="text-center text-sm/loose md:text-base/loose mb-12">
          Selected projects showcasing my skills and design.
        </p>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {PortfolioData.map((project) => (
            <SwiperSlide key={project.id} className="relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2 text-white text-center">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm">{project.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Chart Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">My Skills</h2>
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
