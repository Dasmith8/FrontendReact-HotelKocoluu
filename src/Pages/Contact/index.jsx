import Layout from "../../components/Layout";
import fotoContact from "../../components/Imagenes/fotoContact.jpeg";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 rounded-lg shadow-lg gap-8">
        <div className="text-lg text-gray-800 leading-relaxed text-center space-y-4">
          <img className="mx-auto" src={fotoContact} alt="foto de contacto" />
          <p>
            Te invitamos a vivir, sentir y experimentar de un verdadero descanso
            frente al Mar.
          </p>
          <p>
            <strong>RNT:</strong> 43349
          </p>
          <p>
            <strong>Contacto:</strong> 3008269108
          </p>
          <p>
            <strong>Email:</strong> ecohotelkocoluu@gmail.com
          </p>
          <p>
            <strong>Dirección:</strong> km 7 vía a Moñitos, a 300 metros del
            Muelle Turístico frente al Mar, Playas del Viento, San Bernardo del
            Viento, Córdoba, Colombia.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
