import { useEffect, useRef, useState } from "react";

export default function Foundation() {

  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

  }, []);

  const cards = [
    "Sistema PMS para socios",
    "Gestión de servicios",
    "Sistema de reservas",
    "Identificador Digital Operativo",
    "Perfilamiento inteligente",
    "Concierge base",
  ];

  return (

    <section ref={ref} style={styles.section}>

      <div style={styles.container}>

        <h2 style={{
          ...styles.title,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(40px)"
        }}>
          Una base operativa completa
        </h2>

        <p style={{
          ...styles.subtitle,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(40px)"
        }}>
          CAPPI ya permite gestionar servicios, reservas y operaciones en tiempo real.
        </p>

        <div style={styles.grid}>

          {cards.map((card, index) => (

            <div
              key={index}
              style={{
                ...styles.card,
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0px)"
                  : "translateY(60px)",
                transitionDelay: `${index * 150}ms`
              }}
            >
              {card}
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

    background: "#050505",

    color: "white",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    padding: "80px 20px"

  },

  container: {

    maxWidth: "900px",

    textAlign: "center"

  },

  title: {

    fontSize: "48px",

    fontWeight: "600",

    transition: "all 1s ease"

  },

  subtitle: {

    fontSize: "20px",

    opacity: "0.6",

    marginBottom: "50px",

    transition: "all 1s ease"

  },

  grid: {

    display: "grid",

    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",

    gap: "20px"

  },

  card: {

    background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",

    padding: "30px",

    borderRadius: "16px",

    fontSize: "18px",

    backdropFilter: "blur(10px)",

    border: "1px solid rgba(255,255,255,0.1)",

    transition: "all 1s ease"

  }

};