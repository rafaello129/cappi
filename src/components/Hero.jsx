import { useEffect, useState } from "react";

export default function Hero() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, []);

  return (
    <section style={styles.section}>

      <div style={{
        ...styles.container,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)"
      }}>

        <h1 style={styles.title}>
          CAPPI
        </h1>

        <p style={styles.subtitle}>
          The Intelligent Concierge
        </p>

        <p style={styles.description}>
          Una nueva capa de inteligencia que conecta al cliente,
          al socio y al mundo real.
        </p>

      </div>

      <div style={styles.glow}></div>

    </section>
  );
}

const styles = {

  section: {

    height: "100vh",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    background: "#000",

    color: "#fff",

    position: "relative",

    overflow: "hidden"

  },

  container: {

    textAlign: "center",

    transition: "all 1.2s ease"

  },

  title: {

    fontSize: "80px",

    fontWeight: "600",

    letterSpacing: "-2px",

    margin: "0"

  },

  subtitle: {

    fontSize: "28px",

    opacity: "0.7",

    marginTop: "10px"

  },

  description: {

    fontSize: "18px",

    opacity: "0.5",

    marginTop: "20px"

  },

  glow: {

    position: "absolute",

    width: "600px",

    height: "600px",

    background: "radial-gradient(circle, rgba(0,113,227,0.4), transparent)",

    filter: "blur(120px)",

    zIndex: "0"

  }

};