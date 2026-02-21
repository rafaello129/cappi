import { useEffect, useRef, useState } from "react";

export default function Agent() {

  const ref = useRef();

  const [visible, setVisible] = useState(false);

  const [activated, setActivated] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          setTimeout(() => {
            setActivated(true);
          }, 1500);

        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

  }, []);

  const modules = [

    "Gestión automática de reservas",

    "Integración con aerolíneas",

    "Coordinación de transporte",

    "Optimización continua del itinerario",

    "Asistencia inteligente persistente"

  ];

  return (

    <section ref={ref} style={styles.section}>

      <div style={styles.container}>

        <h2 style={{
          ...styles.title,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(40px)"
        }}>
          CAPPI se convierte en un agente autónomo
        </h2>

        <p style={{
          ...styles.subtitle,
          opacity: visible ? 1 : 0
        }}>
          El concierge ahora puede actuar, coordinar y ejecutar por el cliente.
        </p>


        <div style={styles.agentContainer}>

          {/* Núcleo del agente */}

          <div style={{
            ...styles.agentCore,
            transform: activated ? "scale(1)" : "scale(0.6)",
            opacity: activated ? 1 : 0.5
          }}>

            CAPPI

          </div>


          {/* módulos */}

          {modules.map((module, index) => (

            <div
              key={index}
              style={{
                ...styles.module,

                opacity: activated ? 1 : 0,

                transform: activated
                  ? `translateY(${(index - 2) * 60}px)`
                  : "translateY(0px)",

                transitionDelay: `${index * 300}ms`

              }}
            >
              {module}
            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

const styles = {

  section: {

    minHeight: "100vh",

    background: "radial-gradient(circle at center, #001a40, #000)",

    color: "white",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    padding: "80px 20px"

  },

  container: {

    textAlign: "center",

    maxWidth: "900px"

  },

  title: {

    fontSize: "48px",

    marginBottom: "10px",

    transition: "all 1s ease"

  },

  subtitle: {

    fontSize: "20px",

    opacity: "0.7",

    marginBottom: "60px",

    transition: "all 1s ease"

  },

  agentContainer: {

    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    gap: "15px"

  },

  agentCore: {

    width: "140px",

    height: "140px",

    borderRadius: "50%",

    background: "radial-gradient(circle, #0071e3, #003366)",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    fontSize: "24px",

    fontWeight: "600",

    marginBottom: "30px",

    transition: "all 1s ease",

    boxShadow: "0 0 60px rgba(0,113,227,0.6)"

  },

  module: {

    background: "rgba(255,255,255,0.05)",

    padding: "15px 25px",

    borderRadius: "12px",

    fontSize: "16px",

    transition: "all 1s ease"

  }

};
