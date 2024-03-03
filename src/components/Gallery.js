// src/components/Gallery.js
import React from 'react';
import '../styles/Gallery.module.css';

function Gallery() {
  return (
    <div className={styles.gallery}>
      <h1>Galerie</h1>
      <p>Découvrez quelques-uns des moments forts de nos précédentes performances.</p>
      {/* Vous pouvez ajouter ici des éléments <img> pour les photos */}
    </div>
  );
}

export default Gallery;