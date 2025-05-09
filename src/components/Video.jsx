export default function Video() {
  return (
    <section id="video">
      <h2>Vidéo</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DUT5rEU6pqM"
          title="Shakira - Waka Waka (This Time for Africa)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
