<template>
  <div class="pagina-web">
    <div class="contenedor-peliculas">
      <div class="cajaPelis" v-for="item in peliculas" :key="item.id">
        <Pelicula :pelicula="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Pelicula from '../components/Pelicula.vue'
import { mapState } from 'vuex'

export default {
  name: 'PaginaWeb',
  components: {
    Pelicula,
  },
  computed: {
    ...mapState(['peliculas'])
  },
}
</script>

<style scoped>
.pagina-web {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  background-color: #13202d;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.contenedor-peliculas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
}

.cajaPelis {
  width: calc(33% - 20px);
  margin: 10px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #1e2a38; /* Fondo de las tarjetas */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transiciones suaves */
}

.cajaPelis:hover {
  transform: translateY(-10px); /* Efecto de elevación al pasar el ratón */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra más intensa */
}

@media (max-width: 1200px) {
  .cajaPelis {
    width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .cajaPelis {
    width: calc(100% - 20px);
  }
}
</style>
