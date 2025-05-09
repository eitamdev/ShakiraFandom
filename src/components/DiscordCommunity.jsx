// src/components/DiscordCommunity.jsx

import React from "react";
import styles from "./DiscordCommunity.module.css";

export default function DiscordCommunity() {
  return (
    <div className={styles.discordPage}>
      <h1 className={styles.title}>🎧 Rejoins la communauté Shakira sur Discord</h1>
      <p className={styles.subtitle}>
        Une communauté de fans passionnés, des débats, des playlists, des lives & plus encore.
      </p>

      <div className={styles.card}>
        <img
          src="https://cdn.discordapp.com/icons/1362191205059793117/e083ccbd90e15995e6dce255af490a6c.png?size=1024"
          alt="Logo Discord"
          className={styles.discordLogo}
        />

        <div className={styles.description}>
          <p><strong>✦━━━✦ PARTENARIATS OUVERTS ✦━━━✦</strong></p>

          <p>♛ Bienvenue sur <strong>Empire of Music 🎵👑</strong> — l’endroit où la musique, l’art et les vibes règnent en maître !</p>

          <p><strong>✨ Fonctions du serveur :</strong><br />
            🎶 ･ Rôles d'artistes avec réactions<br />
            🌎 ･ Chats multilingues (🇬🇧 🇫🇷 🇪🇸 et plus)<br />
            🧡 ･ Hiérarchie royale esthétique (Empereur, Impératrice, Prince...)<br />
            🎉 ･ Événements, giveaways, soirées d’écoute<br />
            🎨 ･ Canaux d'art, de danse et de créativité<br />
            🆕 ･ Propose de nouveaux artistes & obtiens des rôles personnalisés<br />
            🛡️ ･ Communauté bienveillante & safe<br />
            🎵 ･ Bots musicaux, partages de playlists, open mic !
          </p>

          <p><strong>🏰 Pourquoi nous choisir ?</strong><br />
            ➔ Communauté active & chaleureuse<br />
            ➔ Design ultra stylé et bien organisé<br />
            ➔ Ouvert aux collaborations et échanges<br />
            ➔ Staff respectueux et présent<br />
            ➔ Objectif : créer des connexions durables
          </p>

          <p><strong>📩 Pour un partenariat :</strong><br />
            ➔ Contacte notre responsable partenariats dès maintenant !
          </p>
        </div>

        <a
          href="https://discord.gg/nAkF6RqKFm"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.joinBtn}
        >
          🚀 Rejoindre le serveur
        </a>
      </div>
    </div>
  );
}
