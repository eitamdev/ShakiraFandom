import React from "react";
import styles from "./Shakira360.module.css";

export default function Shakira360() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🌍 Shakira 360°</h2>

      <section className={styles.section}>
        <h3>🎤 Citations marquantes</h3>
        <ul className={styles.list}>
          <li>"Je pense que tout le monde a une mission dans la vie, et la mienne est de connecter les gens à travers la musique."</li>
          <li>"Je suis une femme dans un monde encore dirigé par des hommes. Et je veux le chanter fort."</li>
          <li>"Les mots ont le pouvoir de guérir, d'aimer, de dénoncer, et de libérer."</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3>💫 Anecdotes étonnantes</h3>
        <ul className={styles.list}>
          <li>Shakira parle 7 langues : espagnol, anglais, portugais, arabe, italien, français et catalan.</li>
          <li>Elle a un QI de 140 — un score classé comme "très supérieur".</li>
          <li>Son nom, "Shakira", signifie "pleine de grâce" en arabe.</li>
          <li>Elle a composé sa première chanson à 8 ans, "Tus Gafas Oscuras", dédiée à son père.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3>🌐 Son influence mondiale</h3>
        <ul className={styles.list}>
          <li>Ambassadrice de l'UNICEF depuis 2003.</li>
          <li>Sa fondation <strong>Pies Descalzos</strong> a construit plusieurs écoles en Colombie.</li>
          <li>Elle est la première artiste à avoir chanté à trois Coupes du Monde FIFA (2006, 2010, 2014).</li>
          <li>Elle a une étoile sur le <strong>Hollywood Walk of Fame</strong> depuis 2011.</li>
          <li>Son influence musicale traverse les genres : pop, rock, reggaeton, arabe, électro, andin, etc.</li>
        </ul>
      </section>
    </div>
  );
}
