import { useState } from "react";
import styles from "./Discography.module.css";


const albums = [
  // Studio albums
  { title: "Las Mujeres Ya No Lloran", year: 2024, type: "Studio", cover: "https://toutelaculture.com/wp-content/uploads/2024/09/Shakira-Las-Mujeres-Ya-No-Lloran--400x400.jpg" },
  { title: "El Dorado", year: 2017, type: "Studio", cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Shakira_El_Dorado_cover.png" },
  { title: "Shakira", year: 2014, type: "Studio", cover: "https://imgs.search.brave.com/H91RyCZLhf0eXIfEyKwrOj3oLbgmQI2nK9MXeF1iYso/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmlsbGJvYXJkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMy9TaGFraXJh/LXNlbGYtdGl0bGVk/LTIwMTQtYmlsbGJv/YXJkLTEyNDAuanBn/P3c9MzAw" },
  { title: "Sale el Sol", year: 2010, type: "Studio", cover: "https://fastly-s3.allmusic.com/release/mr0003256061/front/400/CxRRmmXGusIxJ-GaQYQsmR_TZlp6n_cq-Emr2zx15tU=.jpg" },
  { title: "She Wolf", year: 2009, type: "Studio", cover: "https://s3-eu-west-1.amazonaws.com/discotecalaziale/images/cover/0196588845819.jpg?21363" },
  { title: "Oral Fixation, Vol. 2", year: 2005, type: "Studio", cover: "https://i.discogs.com/jJujigwJxTxghaQFUNosZKSoLVoiolDjG2dQTyqpe2E/rs:fit/g:sm/q:90/h:495/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMjE3/NTAtMTI3NjgwMDUz/OC5qcGVn.jpeg" },
  { title: "Fijación Oral, Vol. 1", year: 2005, type: "Studio", cover: "https://i.discogs.com/aIUdccg37LgvIt8l9-xFtUyh-NRd37pWwmp5vZW6AMo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxNzkx/MS0xNjQ4OTI0NDUw/LTg4MDIuanBlZw.jpeg" },
  { title: "Laundry Service", year: 2001, type: "Studio", cover: "https://media.hitparade.ch/cover/big/shakira-laundry_service_a.jpg" },
  { title: "¿Dónde Están los Ladrones?", year: 1998, type: "Studio", cover: "https://i.discogs.com/vxii7VtlmEemBNHOYjigHATVYZw3bV_Gm3jxfY6DYJQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1NzM2/Ni0xNTMxMzMwNTAy/LTcyNDEuanBlZw.jpeg" },
  { title: "Pies Descalzos", year: 1995, type: "Studio", cover: "https://i.discogs.com/Pm6caos1vTMudzGelEu3WaIX_Pw6zID-g8Nj3WRb-eQ/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjUy/NTMwLTE2MzA0MzI3/NzktNzYxMC5qcGVn.jpeg" },
  { title: "Peligro", year: 1993, type: "Studio", cover: "https://i.discogs.com/P2_3E2fHz3aV_qPPuc0dbS5HxS3lvIBrDl6GlnCrWp0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzMDg4/NzYtMTY5NzAzOTI5/NC0yMjAyLmpwZWc.jpeg" },
  { title: "Magia", year: 1990, type: "Studio", cover: "https://t2.genius.com/unsafe/498x0/https%3A%2F%2Fimages.genius.com%2Fb075dd64b3816991de8985416d0fb1aa.500x503x1.jpg" },

  // Live albums
  { title: "Shakira in Concert: El Dorado World Tour", year: 2019, type: "Live", cover: "https://upload.wikimedia.org/wikipedia/en/7/7a/El_Dorado_Tour.jpeg" },
  { title: "Live from Paris", year: 2011, type: "Live", cover: "https://imgs.search.brave.com/mm7pSEXBg_2fWUbWd7Hak6yNqrFJif-p1ytcPS8XXU0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3No/YWtpcmEvaW1hZ2Vz/LzQvNDUvTGl2ZV9m/cm9tX1BhcmlzLmpw/Zy9yZXZpc2lvbi9s/YXRlc3Qvc2NhbGUt/dG8td2lkdGgtZG93/bi8yNTA_Y2I9MjAy/MDA5MTYwMjE5NTk.jpeg" },
  { title: "MTV Unplugged", year: 2000, type: "Live", cover: "https://upload.wikimedia.org/wikipedia/en/c/c2/Shakira_MTV_Unplugged.jpg" },

  // Compilations
  { title: "Grandes Éxitos", year: 2002, type: "Compilation", cover: "https://upload.wikimedia.org/wikipedia/en/8/85/Shakira_Grandes_Exitos.jpg" },
  { title: "Laundry Service: Washed and Dried", year: 2002, type: "Compilation", cover: "https://i.discogs.com/RJYeLm9fT5JMM2RiaCq17XI6sJV_LXIKmdgjwAEZI8w/rs:fit/g:sm/q:90/h:526/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyOTM2/NzUtMTQ4NzU0NTAx/NC02ODI5LmpwZWc.jpeg" },

  // Soundtrack
  { title: "Love in the Time of Cholera", year: 2007, type: "Soundtrack", cover: "https://i.discogs.com/NIQHRgLfX5MQG2by2urzAnw1Yy2FEJgBISzt0Yw70uQ/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMTk0/OTQtMTM4MjI5NTIx/Ni04Njk3LmpwZWc.jpeg" },
];

albums.sort((a, b) => b.year - a.year);

export default function Discography() {
  const [filter, setFilter] = useState("All");

  // Filtrage des albums en fonction du type
  const filteredAlbums = filter === "All"
    ? albums
    : albums.filter((album) => album.type.trim().toLowerCase() === filter.toLowerCase());

  return (
    <section className={styles.discographyContainer}> {/* Utilisation de styles */}
      <h2 className={styles.title}>Discographie complète</h2> {/* Utilisation de styles */}
      
      {/* Options de filtre */}
      <div className={styles.filterButtons}>
        <button onClick={() => setFilter("All")}>Tous</button>
        <button onClick={() => setFilter("Studio")}>Albums Studio</button>
        <button onClick={() => setFilter("Live")}>Albums Live</button>
        <button onClick={() => setFilter("Compilation")}>Compilations</button>
        <button onClick={() => setFilter("Soundtrack")}>Bandes son</button>
      </div>

      {/* Affichage des albums filtrés */}
      <div className={styles.albumsGrid}>
        {filteredAlbums.map((album) => (
          <div key={album.title} className={styles.albumCard}>
            <img src={album.cover} alt={album.title} className={styles.albumCover} />
            <p>
              <strong>{album.title}</strong> ({album.year})<br />
              <em>{album.type}</em>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}