import { useEffect, useRef, useState } from "react";

export default function Intelligence() {

  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          startAnimation();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

  }, []);

  function startAnimation() {

    let index = 0;

    setInterval(() => {

      index++;

      if (index > 3) index = 0;

      setActiveIndex(index);

    }, 2000);

  }

  const items = [

    {
      title: "Matching hiperpersonalizado",
      description: "CAPPI conecta automáticamente al cliente con los servicios más compatibles."
    },

    {
      title: "Concierge que aprende",
      description: "El sistema aprende continuamente del comportamiento del cliente."
    },

    {
      title: "Insights operativos inteligentes",
      description: "CAPPI transforma datos en decisiones útiles para el socio."
    },

    {
      title: "Geointeligencia avanzada",
      description: "El sistema entiende el contexto geográfico y actúa en consecuencia."
    }

  ];

  return (

    <section ref={ref} style={styles.section}>

      <div style={styles.container}>

        <h2 style={{
          ...styles.title,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(40px)"
        }}>
          CAPPI comienza a entender
        </h2>

        <p style={{
          ...styles.subtitle,
          opacity: visible ? 1 : 0
        }}>
          El sistema aprende, interpreta y toma decisiones basadas en contexto.
        </p>

        <div style={styles.visualContainer}>

          <div style={styles.circle}>

            <div style={{
              ...styles.innerCircle,
              transform: `rotate(${activeIndex * 90}deg)`
            }} />

          </div>

          <div style={styles.textContainer}>

            <h3 style={styles.itemTitle}>
              {items[activeIndex].title}
            </h3>

            <p style={styles.itemDescription}>
              {items[activeIndex].description}
            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

const styles = {

  section: {

    minHeight: "100vh",

    background: "linear-gradient(180deg, #000, #020617)",

    color: "white",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

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

    opacity: "0.6",

    marginBottom: "60px",

    transition: "all 1s ease"

  },

  visualContainer: {

    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    gap: "30px"

  },

  circle: {

    width: "200px",

    height: "200px",

    borderRadius: "50%",

    border: "1px solid rgba(255,255,255,0.1)",

    display: "flex",

    alignItems: "center",

    justifyContent: "center"

  },

  innerCircle: {

    width: "120px",

    height: "120px",

    borderRadius: "50%",

    background: "radial-gradient(circle, #0071e3, transparent)",

    transition: "transform 1s ease"

  },

  textContainer: {

    maxWidth: "500px"

  },

  itemTitle: {

    fontSize: "28px",

    marginBottom: "10px"

  },

  itemDescription: {

    opacity: "0.7",

    fontSize: "18px"

  }

};
