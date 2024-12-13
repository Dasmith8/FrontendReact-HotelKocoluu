import React, { useState } from "react";
import cabaña1 from "../../components/Imagenes/cabaña1.jpeg";
import cabaña2 from "../../components/Imagenes/cabaña2.jpeg";
import cabaña3 from "../../components/Imagenes/cabaña3.jpeg";
import cabaña4_5 from "../../components/Imagenes/cabaña4_5.png";

const HotelCard = ({ title, description, price, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="bg-white cursor-pointer w-80 h-96 rounded-lg shadow-lg m-4 flex flex-col justify-between"
      onClick={() => console.log("Show hotel details")}
    >
      <figure className="relative mb-2 w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={images[currentImageIndex]}
          alt={`Hotel Image ${currentImageIndex + 1}`}
        />
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full"
          onClick={prevImage}
        >
          ◀
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full"
          onClick={nextImage}
        >
          ▶
        </button>
      </figure>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm font-light text-gray-600">{description}</p>
          <p className="text-lg font-medium text-black">{price}</p>
        </div>
        {/* Botón de reserva dentro de la tarjeta */}
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const cabanas = [
    {
      title: "1. Hawái",
      description: "Habitacion familiar, apta para 7 personas con baño incluido",
      price: "$314.000 / night",
      images: [cabaña1, cabaña3],
    },
    {
      title: "2. Cancún",
      description: "Habitacion familiar, apta para 7 personas con baño incluido",
      price: "$314.000 / night",
      images: [cabaña2, cabaña3],
    },
    {
      title: "3. Curacao",
      description: "Habitacion familiar, apta para 7 personas con baño incluido",
      price: "$314.000 / night",
      images: [cabaña3, cabaña1],
    },
    {
      title: "4. Praga",
      description: "Habitacion familiar, apta para 7 personas con baño incluido",
      price: "$314.000 / night",
      images: [cabaña4_5, cabaña1],
    },
    {
      title: "5. Dubai",
      description: "Habitacion familiar, apta para 7 personas con baño incluido",
      price: "$314.000 / night",
      images: [cabaña4_5, cabaña3],
    },
    {
      title: "6. Rio",
      description: "Habitacion familiar, apta para 7 personas con baño incluido",
      price: "$314.000 / night",
      images: [cabaña4_5, cabaña1],
    },
    {
      title: "7. Jamaica",
      description: "Habitacion familiar, apta para 7 personas con baño incluido",
      price: "$314.000 / night",
      images: [cabaña3, cabaña4_5],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
      {cabanas.map((hotel, index) => (
        <HotelCard
          key={index}
          title={hotel.title}
          description={hotel.description}
          price={hotel.price}
          images={hotel.images}
        />
      ))}
    </div>
  );
};

export default App;

