import Layout from "../../components/Layout";
import React from "react";
import videoPresentacionHotel from "../../components/Videos/videoPresentacionHotel.mov";
import tour1 from "../../components/Imagenes/tour1.png";
import tour2 from "../../components/Imagenes/tour2.png";
import tour3 from "../../components/Imagenes/tour3.png";
import actividad1 from "../../components/Imagenes/actividad1.png";
import actividad2 from "../../components/Imagenes/actividad2.jpeg";
import actividad3 from "../../components/Imagenes/actividad3.png";
import noche1 from "../../components/Imagenes/noche1.jpeg";
import noche2 from "../../components/Imagenes/noche2.png";
import noche3 from "../../components/Imagenes/noche3.png";
import evento1 from "../../components/Imagenes/evento1.png";
import evento2 from "../../components/Imagenes/evento2.png";
import evento3 from "../../components/Imagenes/evento3.jpeg";
import isla1 from "../../components/Imagenes/isla1.png";
import isla2 from "../../components/Imagenes/isla2.png";
import isla3 from "../../components/Imagenes/isla3.png";
import restaurante1 from "../../components/Imagenes/restaurante1.png";
import restaurante2 from "../../components/Imagenes/restaurante2.png";
import restaurante3 from "../../components/Imagenes/restaurante3.png";
import bar1 from "../../components/Imagenes/bar1.png";
import bar2 from "../../components/Imagenes/bar2.png";
import bar3 from "../../components/Imagenes/bar3.png";

const Home = () => {
  return (
    <Layout>
      {/* Primera parte de "Bienvenida" */}
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left mt-9">
        Ecohotel Kocoluu
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-gray-50 p-8 rounded-lg shadow-lg gap-8">
        <video
          className="w-full md:w-1/2 lg:w-2/5 h-[650px] object-cover rounded-lg shadow-lg"
          src={videoPresentacionHotel}
          autoPlay
          loop
          muted
          playsInline
        />
        <p className="text-lg md:w-1/2 text-gray-800 mb-6 leading-loose">
          En Ecohotel Kocoluu, nos enorgullece ofrecerte una experiencia única
          en armonía con la naturaleza. Nuestro ecohotel está diseñado para que
          disfrutes de un ambiente acogedor, sostenible y respetuoso con el
          medio ambiente, rodeado de la belleza salvaje de las extensas playas
          del mar Caribe cordobés, en San Bernardo del Viento, Córdoba, a solo 1
          hora y 30 minutos de Montería. Nos comprometemos a reducir nuestra
          huella ecológica mediante prácticas responsables: utilizamos energías
          renovables, sistemas de reciclaje eficientes y materiales sostenibles
          en cada rincón de nuestras instalaciones. Cada detalle ha sido
          cuidadosamente pensado para brindarte confort sin comprometer el
          respeto por el entorno. Ya sea que busques relajarte, explorar la
          naturaleza o disfrutar de actividades eco-amigables, nuestro equipo
          está listo para ofrecerte una estancia memorable. ¡Ven y descubre cómo
          la tranquilidad, el lujo y la sostenibilidad se unen para brindarte
          una experiencia inigualable! Te esperamos con los brazos abiertos en
          Ecohotel Kocoluu, donde cada día es una oportunidad para reconectarte
          con la naturaleza. Visita nuestro catálogo y conoce todas nuestras
          habitaciones. ¡Te esperamos! 🌴🥥
        </p>
      </div>

      {/* Parte de actividades */}
      <h2 className="text-4xl font-bold mb-6 text-center mt-9">
        Nuestras actividades
      </h2>

      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg gap-8">
        {/* div para las imagenes */}
        <div className="flex flex-col gap-4 md:w-1/2">
          {/* h2 que aparece solo en pantallas pequeñas */}
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 md:hidden">
            ¡Disfruta de la mejor experiencia en Ecohotel Kocoluu!
          </h2>

          {/* Primera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={actividad1}
            alt="Foto actividad 1"
          />

          {/* alineada a la derecha */}
          <img
            className="w-1/2 ml-auto aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={actividad2}
            alt="Foto actividad 2"
          />

          {/* Tercera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={actividad3}
            alt="Foto actividad 3"
          />
        </div>

        {/*e texto actividades*/}
        <div className="md:w-1/2">
          {/* h2 que aparece solo en pantallas grandes */}
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 hidden md:block">
            ¡Disfruta de la mejor experiencia en Ecohotel Kocoluu!
          </h2>
          <p className="text-lg text-gray-800 leading-loose">
            Relájate con nuestros masajes revitalizantes, disfruta de la piscina
            y participa en actividades emocionantes como Surf, Paddle Surf,
            clases de baile y voleibol. Si eres amante de los deportes, prueba
            el buceo o diviértete con los deportes de playa. Para los que buscan
            aventura, también ofrecemos paseos a caballo. ¡Vive el paraíso con
            nosotros! 🌊🌴
          </p>
        </div>
      </div>

      {/* Parte activad,noches magicas */}
      <h2 className="text-4xl font-bold mb-6 text-center mt-9"></h2>

      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg gap-8">
        {/* div para las imagenes */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 md:hidden">
            ¡Vive Noches Mágicas en Ecohotel Kocoluu!
          </h2>
          {/* Primera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={noche1}
            alt="Foto noche 1"
          />

          {/* alineada a la derecha */}
          <img
            className="w-1/2 ml-auto aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={noche2}
            alt="Foto noche 2"
          />

          {/* Tercera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={noche3}
            alt="Foto noche 3"
          />
        </div>

        {/* actividad noches magicas */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 hidden md:block">
            ¡Vive Noches Mágicas en Ecohotel Kocoluu!
          </h2>
          <p className="text-lg text-gray-800 leading-loose">
            Sumérgete en experiencias únicas bajo la luz de la luna. No solo
            recordarás tu estancia, sino que también podrás compartir momentos
            especiales con amigos y familiares. ¡Haz de cada noche una
            celebración inolvidable! 🌙✨
          </p>
        </div>
      </div>

      {/* Parte activad, EVENTOS */}
      <h2 className="text-4xl font-bold mb-6 text-center mt-9"></h2>

      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg gap-8">
        {/* div para las imagenes */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 md:hidden">
            ¡Celebra con nosotros en Ecohotel Kocoluu!
          </h2>
          {/* Primera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={evento1}
            alt="Foto evento 1"
          />

          {/* alineada a la derecha */}
          <img
            className="w-1/2 ml-auto aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={evento2}
            alt="Foto evento 2"
          />

          {/* Tercera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={evento3}
            alt="Foto evento 3"
          />
        </div>

        {/* actividad noches magicas */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 hidden md:block">
            ¡Celebra con nosotros en Ecohotel Kocoluu!
          </h2>
          <p className="text-lg text-gray-800 leading-loose">
            Nuestros espacios son perfectos para bodas, cenas románticas,
            cumpleaños, aniversarios, eventos corporativos y retiros. Crea
            recuerdos inolvidables en un ambiente único y lleno de magia. 🎉💍✨
          </p>
        </div>
      </div>

      {/* Parte de actividades,tours...1)la coraza */}
      <h2 className="text-4xl font-bold mb-6 text-center mt-9"></h2>

      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg gap-8">
        {/* div para las imagenes */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 md:hidden">
            EcoTurismo cienega La Coroza
          </h2>
          {/* Primera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={tour1}
            alt="Foto tour1"
          />

          {/* alineada a la derecha */}
          <img
            className="w-1/2 ml-auto aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={tour2}
            alt="Foto tour2"
          />

          {/* Tercera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={tour3}
            alt="Foto tour3"
          />
        </div>

        {/*e texto del Tour*/}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 hidden md:block">
            EcoTurismo cienega La Coroza
          </h2>
          <p className="text-lg text-gray-800 leading-loose">
            Un encuentro con la naturaleza Descubre la magia de la Ciénaga La
            Coroza a través de un fascinante recorrido en canoa artesanal.
            Durante tres horas,te sumergirás en un entorno natural único,
            navegando por tranquilos canales rodeados de exuberantes ecosistemas
            de manglares. Este recorrido te brinda la oportunidad de observar de
            cerca la biodiversidad que habita en esta región. Podrás
            maravillarte con el avistamiento de aves exóticas, mamíferos como
            monos y perezosos, y reptiles que descansan en las riberas. Cada
            especie cuenta una historia de la vida en este santuario natural.
            Además de disfrutar de la naturaleza, tendrás la oportunidad de
            conectar con la comunidad local, conocida por su hospitalidad y su
            profundo conocimiento del entorno. Los guías profesionales, que han
            vivido toda su vida cerca de la ciénaga, compartirán contigo sus
            saberes sobre las tradiciones, la cultura y la importancia de
            preservar este ecosistema. En este recorrido, cada detalle está
            diseñado para ofrecerte una experiencia sostenible. Al utilizar
            canoas artesanales, contribuimos a la protección del medio ambiente,
            minimizando el impacto en el hábitat natural de las especies. Vive
            una experiencia inolvidable, donde la naturaleza y la cultura se
            unen para regalarte un día lleno de aprendizaje, conexión y
            admiración. ¡La Ciénaga La Coroza te espera!
          </p>
        </div>
      </div>

      {/* Parte de actividades,tours...2)Isla fuerte */}
      <h2 className="text-4xl font-bold mb-6 text-center mt-9"></h2>

      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg gap-8">
        {/* div para las imagenes */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 md:hidden">
            ¡Descubre Isla Fuerte!
          </h2>

          {/* Primera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={isla1}
            alt="Foto isla1"
          />

          {/* alineada a la derecha */}
          <img
            className="w-1/2 ml-auto aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={isla2}
            alt="Foto isla2"
          />

          {/* Tercera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={isla3}
            alt="Foto isla3"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 hidden md:block">
            ¡Descubre Isla Fuerte!
          </h2>
          <p className="text-lg text-gray-800 leading-loose">
            A solo 45 minutos en lancha de Ecohotel Kocoluu, Isla Fuerte es un
            paraíso donde podrás explorar la biodiversidad de fauna y flora
            local, disfrutar de playas de arena blanca y aguas cristalinas.
            Practica actividades como caretaje, WakeBoard, Snorkel, Subwing,
            buceo y una caminata ecológica. ¡Vive la aventura en un entorno
            natural inigualable! 🌊🏝️
          </p>
        </div>
      </div>

      {/* Restaurante */}
      <h2 className="text-4xl font-bold mb-6 text-center mt-9"></h2>

      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg gap-8">
        {/* div para las imagenes */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 md:hidden">
            ¡Descubre la magia en La Cocina de Luu!
          </h2>
          {/* Primera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={restaurante1}
            alt="Foto restaurante1"
          />

          {/* alineada a la derecha */}
          <img
            className="w-1/2 ml-auto aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={restaurante2}
            alt="Foto restaurante2"
          />

          {/* Tercera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={restaurante3}
            alt="Foto restaurante 3"
          />
        </div>

        {/* texto */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 hidden md:block">
            ¡Descubre la magia en La Cocina de Luu!
          </h2>
          <p className="text-lg text-gray-800 leading-loose">
            En nuestro restaurante, La Cocina de Luu, te invitamos a disfrutar
            de una experiencia gastronómica única. Cada plato es elaborado con
            amor y pasión, utilizando ingredientes frescos y auténticos de
            nuestra región. Desde pescados y mariscos recién traídos del mar,
            hasta carnes, aves y opciones vegetarianas, encontrarás una variedad
            de sabores que deleitarán tu paladar. Nos enorgullece ofrecerte
            excelencia y calidad en cada bocado, combinando lo mejor de la
            cocina local con un toque de creatividad que hará de cada comida un
            momento inolvidable. Además, podrás acompañar tus platillos con
            bebidas refrescantes mientras disfrutas del ambiente acogedor y la
            vista incomparable que solo Ecohotel Kocoluu puede ofrecer. ¡Ven y
            haz de "La Cocina de Luu" una experiencia para recordar! 🍴✨
          </p>
        </div>
      </div>

      {/* Restaurante */}
      <h2 className="text-4xl font-bold mb-6 text-center mt-9"></h2>

      <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg gap-8">
        {/* div para las imagenes */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 md:hidden">
            ¡Brinda con el encanto del mar en nuestro bar!
          </h2>
          {/* Primera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={bar1}
            alt="Foto bar1"
          />

          {/* alineada a la derecha */}
          <img
            className="w-1/2 ml-auto aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={bar2}
            alt="Foto bar2"
          />

          {/* Tercera imagen */}
          <img
            className="w-1/2 aspect-w-16 aspect-h-9 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            src={bar3}
            alt="Foto bar3"
          />
        </div>

        {/* texto Tours */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-center mt-9 hidden md:block">
            ¡Brinda con el encanto del mar en nuestro bar!
          </h2>
          <p className="text-lg text-gray-800 leading-loose">
            ¡Brinda con el encanto del mar en nuestro bar! Déjate llevar por la
            magia de las olas mientras disfrutas de una experiencia única en
            nuestro bar. Desde bebidas naturales frescas hasta deliciosos
            cócteles cuidadosamente preparados, cada sorbo es un momento para
            saborear. Con el mar como inspiración, te ofrecemos combinaciones
            exclusivas que despiertan tus sentidos, perfectas para relajarte y
            celebrar. Ya sea un refrescante jugo tropical al atardecer o un
            sofisticado cóctel bajo las estrellas, cada bebida es una invitación
            a disfrutar de la esencia de Ecohotel Kocoluu. ¡Ven y vive el sabor
            del paraíso en cada copa! 🍹🌊✨
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
