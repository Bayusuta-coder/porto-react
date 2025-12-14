import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { PortfolioData } from "../data";
import { Bar, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const PortfolioPage = () => {
  /* ================= BAR ================= */
  const barData = {
    labels: ["React", "UI/UX", "HTML", "CSS", "JavaScript"],
    datasets: [
      {
        data: [90, 85, 95, 80, 88],
        backgroundColor: "#6366f1",
        hoverBackgroundColor: "#818cf8",
        borderRadius: 14,
        borderSkipped: false,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, max: 100 },
    },
  };

  /* ================= DOUGHNUT ================= */
  const doughnutData = {
    labels: ["Frontend", "UI / UX", "Backend"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#6366f1", "#22c55e", "#f97316"],
        hoverOffset: 18,
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    animation: {
      duration: 1800,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: { padding: 20 },
      },
    },
  };

  return (
    <>
      {/* ================= MY PORTFOLIO (PUTIH) ================= */}
      <section className="py-28 bg-white text-stone-900">
        <div className="container mx-auto px-2">
          <h1 className="text-5xl font-semibold text-center mb-4">
            My Portfolio
          </h1>
          <p className="text-center text-stone-600 mb-16">
            Selected projects showcasing my skills & creativity
          </p>

          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
          >
            {PortfolioData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-stone-600">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= SKILLS OVERVIEW (STONE-950) ================= */}
      <section className="py-28 bg-stone-950 text-white">
        <div className="max-w-5xl mx-auto px-2">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Skills Overview
          </h2>

          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {/* BAR */}
            <SwiperSlide>
              <div className="bg-white text-stone-900 rounded-2xl p-8 shadow-xl h-[420px]">
                <h3 className="text-center font-semibold mb-6">
                  Technical Skill Level
                </h3>
                <div className="h-[300px]">
                  <Bar data={barData} options={barOptions} />
                </div>
              </div>
            </SwiperSlide>

            {/* DOUGHNUT */}
            <SwiperSlide>
              <div className="bg-white text-stone-900 rounded-2xl p-8 shadow-xl h-[420px] flex flex-col items-center justify-center">
                <h3 className="font-semibold mb-6">Skill Focus Distribution</h3>
                <div className="w-[320px] h-[320px]">
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
