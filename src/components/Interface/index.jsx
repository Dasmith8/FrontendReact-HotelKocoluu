import React, { useState } from "react";
import axios from "axios";
import koco from "../../Components/Imagenes/koco.png";

const Chatbot = () => {
  const [message, setMessage] = useState(""); // Estado para almacenar el mensaje del usuario
  const [chatHistory, setChatHistory] = useState([]); // Estado para almacenar el historial de mensajes
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la visibilidad del chat

  const toggleChat = () => {
    setIsOpen(!isOpen); // Cambiar el estado al hacer clic en el ícono
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value); // Actualiza el mensaje conforme el usuario escribe
  };

  const sendMessage = async () => {
    if (message.trim() === "") return; // Evita enviar mensajes vacíos
    try {
      console.log("Enviando mensaje:", message); // Verifica el mensaje
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: message,
      });

      const botResponse = response.data.response; // Accede a la respuesta directamente

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "user", text: message },
        { sender: "bot", text: botResponse },
      ]);

      setMessage(""); // Limpia el campo de entrada de texto
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "user", text: message },
        { sender: "bot", text: "Lo siento, hubo un error. Intenta de nuevo." },
      ]);
      setMessage("");
    }
  };

  return (
    <div>
      {/* Botón para abrir/cerrar el chatbot */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 p-0 rounded-full focus:outline-none"
        style={{ background: "none" }}
      >
        <img src={koco} alt="Icono chatbot" className="w-16 h-16" />
      </button>

      {/* Contenedor del chat */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          <button
            onClick={toggleChat}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ❌
          </button>

          {/* Historial de chat */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {chatHistory.map((entry, index) => (
              <div
                key={index}
                className={`flex ${
                  entry.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    entry.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  style={{ maxWidth: "70%" }}
                >
                  {entry.text}
                </div>
              </div>
            ))}
          </div>

          {/* Campo de entrada y botón de enviar */}
          <div className="flex items-center p-2 border-t border-gray-300">
            <input
              type="text"
              value={message}
              onChange={handleInputChange}
              placeholder="Escribe un mensaje..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
