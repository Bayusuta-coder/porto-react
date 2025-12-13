import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { DataPembicara } from "../data";

const Sosmedpage = () => {
  const [clients, setClients] = useState([]);

  // Form state
  const [nama, setNama] = useState("");
  const [job, setJob] = useState("");
  const [comment, setComment] = useState("");
  const [file, setFile] = useState(null);

  // Ambil data clients
  useEffect(() => {
    fetch("http://localhost:5000/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("job", job);
    formData.append("comment", comment);
    if (file) formData.append("img", file);

    try {
      const res = await fetch("http://localhost:5000/clients", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setClients((prev) => [...prev, data]);

      // Reset form
      setNama("");
      setJob("");
      setComment("");
      setFile(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sosmed py-40">
      <div className="container mx-auto px-2">
        <h1 className="text-center text-6xl/tight font-semibold mb-4">
          Our Clients
        </h1>
        <p className="text-center md:text-base/loose text-sm/loose">
          Here are some of the clients who have trusted and collaborated with
          us. Each partnership reflects our commitment to delivering
          high-quality, reliable, and impactful digital solutions.
        </p>

        {/* Slider DataPembicara */}
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
          className="mySwiper mt-20"
        >
          {DataPembicara.map((data) => (
            <SwiperSlide key={data.id} className="relative">
              <img src={data.img} alt={data.nama} className="rounded-t-2xl" />
              <div className="absolute w-full h-1/2 bg-gradient-to-t from-black/90 bottom-0 left-0"></div>
              <div className="absolute bottom-7 w-full text-center text-white">
                <h1 className="text-3xl font-semibold">{data.nama}</h1>
                <p className="text-white/80 text-sm/loose">{data.job}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Form Input Testimonial */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">Add Your Testimonial</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2"
            encType="multipart/form-data"
          >
            <input
              type="text"
              placeholder="Name"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Job / Company"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              required
            />
            <textarea
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button
              type="submit"
              className="bg-indigo-900 text-white p-2 rounded mt-2 hover:bg-indigo-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Slider Testimonial Visitor */}
        {clients.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl font-semibold mb-4">
              Visitor Testimonials
            </h2>
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
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className="relative w-full h-150 rounded-t-2xl overflow-hidden">
                    {client.img && (
                      <img
                        src={`http://localhost:5000${client.img}`}
                        alt={client.nama}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute w-full h-1/2 bg-gradient-to-t from-black/90 bottom-0 left-0"></div>
                    <div className="absolute bottom-7 w-full text-center text-white px-2">
                      <h3 className="text-2xl font-semibold">{client.nama}</h3>
                      <p className="text-sm">{client.job}</p>
                      <p className="text-sm mt-2">{client.comment}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sosmedpage;
