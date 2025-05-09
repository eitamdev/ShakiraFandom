import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.title}>✨ Biographie de Shakira</h2>

      <div className={styles.bioContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Shakira_-_Rock_in_Rio_2008_02.jpg/800px-Shakira_-_Rock_in_Rio_2008_02.jpg?20091228230225"
          alt="Shakira"
          className={styles.shakiraImg}
        />

        <div className={styles.bioText}>
          <p>
            <strong>Shakira Isabel Mebarak Ripoll</strong>, née le 2 février 1977 à Barranquilla, en Colombie,
            est une auteure-compositrice-interprète, danseuse, productrice, actrice et philanthrope mondialement reconnue.
            Issue d’un père d’origine libanaise et d’une mère colombienne, elle incarne la fusion culturelle entre l’Amérique latine et le Moyen-Orient.
          </p>

          <p>
            Dès l’âge de 8 ans, elle compose ses premières chansons. À 13 ans, elle sort son premier album <strong>"Magia"</strong> (1990),
            suivi de <strong>"Peligro"</strong> (1993). Bien que peu diffusés, ces disques marquent le début d’une carrière singulière. 
            C’est en 1995, avec <strong>"Pies Descalzos"</strong>, qu’elle explose dans toute l’Amérique latine grâce à des tubes comme <em>"Estoy Aquí"</em>.
          </p>

          <p>
            En 1998, <strong>"¿Dónde Están los Ladrones?"</strong> consolide son statut d’icône pop hispanophone. Elle y allie textes introspectifs,
            rock énergique et rythmes latins. Cet album est acclamé par la critique et précède son passage au marché anglophone.
          </p>

          <p>
            En 2001, Shakira conquiert le monde anglophone avec <strong>"Laundry Service"</strong> et des titres devenus cultes comme <em>"Whenever, Wherever"</em>
            et <em>"Underneath Your Clothes"</em>. Avec une voix inimitable, une danse du ventre devenue sa signature et une esthétique singulière,
            elle devient une star mondiale.
          </p>

          <p>
            Elle poursuit avec les albums <strong>"Fijación Oral Vol. 1"</strong> et <strong>"Oral Fixation Vol. 2"</strong> (2005),
            contenant <em>"La Tortura"</em> et <em>"Hips Don’t Lie"</em>, qui reste l’un des singles les plus vendus de tous les temps.
          </p>

          <p>
            En 2009, elle propose un son plus électro avec <strong>"She Wolf"</strong>, puis revient à ses racines latines avec <strong>"Sale el Sol"</strong> (2010),
            où elle collabore notamment avec El Cata et Pitbull. En 2014, elle participe à la Coupe du Monde avec <em>"La La La"</em>.
          </p>

          <p>
            En 2017, <strong>"El Dorado"</strong> la ramène en haut des charts avec <em>"Chantaje"</em> (feat. Maluma),
            <em>"Me Enamoré"</em>, et <em>"Perro Fiel"</em>. Malgré une grave blessure aux cordes vocales, elle entame une tournée mondiale
            à guichets fermés et sort un documentaire sur cette période.
          </p>

          <p>
            En 2020, elle enflamme la mi-temps du Super Bowl aux côtés de Jennifer Lopez. Cette performance, ovationnée,
            est perçue comme un hommage vibrant à la culture latine.
          </p>

          <p>
            En 2024, Shakira revient avec un album personnel et puissant : <strong>"Las Mujeres Ya No Lloran"</strong>.
            Ce disque marque un tournant dans sa carrière : féministe, introspectif et reggaeton, il témoigne de sa résilience
            après sa séparation très médiatisée d’avec Gérard Piqué.
          </p>

          <p>
            Avec plus de 80 millions d’albums vendus, elle détient 3 Grammy Awards, 12 Latin Grammys, plus de 300 prix
            internationaux, et une étoile sur le <strong>Hollywood Walk of Fame</strong>. Elle est également la première artiste sud-américaine à performer
            au Super Bowl.
          </p>

          <p>
            Engagée, elle fonde la <strong>Fundación Pies Descalzos</strong> à 18 ans, qui aide des milliers d’enfants défavorisés à accéder à l’éducation.
            Elle est aussi ambassadrice de bonne volonté pour l’UNICEF, et prend régulièrement la parole sur les questions de paix, d’égalité
            et de justice sociale.
          </p>

          <p>
            Shakira a marqué l’histoire de la musique non seulement par son talent vocal et scénique,
            mais aussi par sa capacité à réunir les peuples autour de la danse, de la diversité et de l’espoir.
            Elle demeure aujourd’hui une figure incontournable de la pop mondiale, inspirant des millions de fans à travers le globe.
          </p>
        </div>
      </div>
    </section>
  );
}
