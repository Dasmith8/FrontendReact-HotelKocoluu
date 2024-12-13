import React from "react";
import Layout from "../../components/Layout";
import fotohotal3 from "../../components/Imagenes/fotohotal3.jpg";

const AboutUs = () => {
  return (
    <Layout>
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen" // Asegura que el fondo cubra toda la pantalla
        style={{
          backgroundImage: `url(${fotohotal3})`, // Imagen de fondo
        }}
      >
        {/* Overlay con opacidad */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        {/* Contenedor con z-index para el contenido */}
        <div className="relative z-10 p-6">
          {/* Contenedor de Misión */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <h1 className="text-4xl font-bold text-center text-white mt-9">
              Misión
            </h1>
            <p className="text-lg text-white leading-relaxed text-center">
              Promover el desarrollo ecoturístico de San Bernardo del Viento,
              brindado el servicio de hospedaje, restaurante y recreación, para
              la comodidad y confort de nuestros clientes, respetando y
              conservando el entorno natural y cultural. Ofreciendo un servicio
              de calidad más allá de las expectativas.
            </p>
          </div>

          {/* Contenedor de Visión */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <h1 className="text-4xl font-bold text-center text-white mt-9">
              Visión
            </h1>
            <p className="text-lg text-white leading-relaxed text-center">
              Consolidarnos como la empresa hotelera y ecoturística con la mejor
              calidad en servicios personalizados en la zona del caribe
              cordobés. Con un gran compromiso con el uso eficiente de los
              recursos naturales y el medio ambiente.
            </p>
          </div>

          {/* Contenedor de Valores */}
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold text-center text-white mt-9">
              Valores
            </h1>
            <p className="text-lg text-white leading-relaxed text-center">
              Velar por el cumplimiento de los servicios con honestidad,
              positivismo, integridad, eficiencia, responsabilidad, cortesía y
              respeto por el talento humano, así como la calidad, innovación,
              mejora continua y responsabilidad social.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
