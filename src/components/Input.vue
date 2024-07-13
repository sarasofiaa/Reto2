<template>
  <div class="container mt-4">
    <div class="form-group">
      <label for="nombre">Nombre:</label>
      <input 
        id="nombre"
        type="text"
        class="form-control"
        placeholder="Ingrese nombre"
        v-model.trim="pelicula.name"
      >
    </div>
    <div class="form-group">
      <label for="imagen">URL de la Imagen:</label>
      <input 
        id="imagen"
        type="text"
        class="form-control"
        placeholder="Ingrese URL de la imagen"
        v-model.trim="pelicula.image"
      >
    </div>
    <div class="form-group">
      <label for="descripcion">Descripción:</label>
      <textarea 
        id="descripcion"
        class="form-control"
        placeholder="Ingrese la descripción de la película"
        v-model.trim="pelicula.description"
      ></textarea>
    </div>

    <div class="form-group">
      <label>Géneros:</label>
      <div class="form-check">
        <input 
          id="check-1"
          type="checkbox"
          class="form-check-input"
          v-model="pelicula.genres"
          value="Accion"
        >
        <label for="check-1" class="form-check-label">Accion</label>
      </div>
      <div class="form-check">
        <input 
          id="check-2"
          type="checkbox"
          class="form-check-input"
          v-model="pelicula.genres"
          value="Drama"
        >
        <label for="check-2" class="form-check-label">Drama</label>
      </div>
      <div class="form-check">
        <input 
          id="check-3"
          type="checkbox"
          class="form-check-input"
          v-model="pelicula.genres"
          value="Comedia"
        >
        <label for="check-3" class="form-check-label">Comedia</label>
      </div>
      <div class="form-check">
        <input 
          id="check-4"
          type="checkbox"
          class="form-check-input"
          v-model="pelicula.genres"
          value="Terror"
        >
        <label for="check-4" class="form-check-label">Terror</label>
      </div>
    </div>

    <div class="form-group">
    <label for="rating">Rating:</label>
    <div class="rating-buttons">
      <button
        v-for="n in 5"
        :key="n"
        type="button"
        class="btn btn-outline-warning"
        @click="setRating(n)"
        :class="{ 'active': n <= pelicula.rating }"
      >
        ★
      </button>
    </div>
  </div>

    <button 
      class="btn btn-primary btn-block"
      type="submit"
      :disabled="bloquear"
    >
      Subir
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pelicula: Object
  },
  computed: {
    bloquear() {
      return this.pelicula.name.trim() === "";
    }
  },
  methods: {
    setRating(rating) {
      this.pelicula.rating = rating;
    }
  }
};
</script>

<style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    background: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-check {
    margin-bottom: 10px;
  }

  label {
    font-weight: bold;
  }

  button[type="submit"] {
    margin-top: 20px;
  }
  .rating-buttons {
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  }

  .rating-buttons .btn {
    font-size: 20px; /* Ajusta el tamaño de las estrellas según sea necesario */
  }

  .rating-buttons .btn.active {
    color: #ffd700; /* Color dorado para las estrellas activas */
  }
</style>
