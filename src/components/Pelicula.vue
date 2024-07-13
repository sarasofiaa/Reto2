<template>
  <div class="pelicula">
    <img :src="pelicula.image" class="pelicula-img" alt="Poster de la película">
    <div class="texto">
      <h3 class="titulo"><strong>{{ pelicula.name }}</strong></h3>
      <div class="generos">
        <span v-for="(genero, index) in pelicula.genres" :key="index" class="genero">{{ genero }}</span>
      </div>
    </div>
    <div class="descripcion">
      <p>{{ pelicula.description }}</p>
    </div>
    <div class="rating">
      <p>Rating:</p>
      <div class="stars">
        <img v-for="n in 5" :key="n" :src="getStarIcon(n)" class="star-icon" alt="Estrella de calificación">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pelicula',
  props: {
    pelicula: Object,
  },
  methods: {
    getStarIcon(n) {
      return n <= Math.round(this.pelicula.rating) 
        ? 'https://webstockreview.net/images/star-icon-png-2.png' 
        : 'https://cdn3.iconfinder.com/data/icons/essentials-volume-i/128/star-3-512.png';
    }
  }
}
</script>

<style scoped>
.pelicula {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: #1e2a38; /* Fondo acorde al diseño general */
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pelicula:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.pelicula-img {
  width: 100%;
  height: 455px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.texto {
  text-align: left;
  margin-bottom: 10px;
  color: #ffffff; /* Color de texto acorde al diseño general */
}

.titulo {
  margin: 5px 0;
  font-size: 20px;
}

.generos {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.genero {
  background-color: #007BFF;
  color: white;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 13px;
}

.descripcion {
  font-size: 14px;
  margin-bottom: 10px;
  color: #cfd8dc; /* Color de texto acorde al diseño general */
}

.rating {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #cfd8dc; /* Color de texto acorde al diseño general */
}

.stars {
  display: flex;
  align-items: center;
}

.star-icon {
  width: 20px;
  margin-left: 5px;
}
</style>
