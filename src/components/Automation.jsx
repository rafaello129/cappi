import { useEffect, useRef, useState } from "react";

export default function Automation() {

  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          startProgress();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

  }, []);

  function startProgress() {

    let value = 0;

    const interval = setInterval(() => {

      value += 1;

      if (value > 100) {
        clearInterval(interval);
      }

      setProgress(value);

    }, 30);

  }

  const steps = [

    {
      label: "El cliente crea una reserva",
      threshold: 20
    },

    {
      label: "CAPPI analiza el contexto",
      threshold: 40
    },

    {
      label: "CAPPI detecta la siguiente necesidad",
      threshold: 60
    },

    {
      label: "CAPPI coordina transporte automáticamente",
      threshold: 80
    },

    {
      label: "CAPPI optimiza la experiencia completa",
      threshold: 100
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
          CAPPI comienza a actuar
        </h2>

        <p style={{
          ...styles.subtitle,
          opacity: visible ? 1 : 0
        }}>
          El sistema no solo entiende. Ejecuta acciones automáticamente.
        </p>

        <div style={styles.progressContainer}>

          <div style={styles.progressBar}>

            <div style={{
              ...styles.progressFill,
              width: `${progress}%`
            }} />

          </div>

        </div>

        <div style={styles.steps}>

          {steps.map((step, index) => (

            <div
              key={index}
              style={{
                ...styles.step,
                opacity: progress >= step.threshold ? 1 : 0.3,
                transform: progress >= step.threshold
                  ? "translateX(0px)"
                  : "translateX(-20px)"
              }}
            >
              {step.label}
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

    background: "linear-gradient(180deg, #020617, #000)",

    color: "white",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    padding: "80px 20px"

  },

  container: {

    textAlign: "center",

    maxWidth: "800px"

  },

  title: {

    fontSize: "48px",

    marginBottom: "10px",

    transition: "all 1s ease"

  },

  subtitle: {

    fontSize: "20px",

    opacity: "0.6",

    marginBottom: "40px",

    transition: "all 1s ease"

  },

  progressContainer: {

    width: "100%",

    height: "6px",

    background: "rgba(255,255,255,0.1)",

    borderRadius: "10px",

    marginBottom: "40px",

    overflow: "hidden"

  },

  progressBar: {

    width: "100%",

    height: "100%"

  },

  progressFill: {

    height: "100%",

    background: "linear-gradient(90deg, #0071e3, #00c6ff)",

    transition: "width 0.2s ease"

  },

  steps: {

    display: "flex",

    flexDirection: "column",

    gap: "15px",

    textAlign: "left"

  },

  step: {

    fontSize: "18px",

    padding: "15px",

    borderRadius: "10px",

    background: "rgba(255,255,255,0.05)",

    transition: "all 0.5s ease"

  }

};
