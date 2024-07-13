<template>
  <div class="container mt-4">
    <!-- Comentario opcional: {{peliculas}} -->
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Géneros</th>
          <th scope="col">Rating</th>
          <th scope="col">Imagen</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in peliculas" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <span v-for="(cat, index) in item.genres" :key="index">
              {{ index > 0 ? ', ' : '' }}{{ cat }}
            </span>
          </td>
          <td>
            <span class="star-rating">
              {{ getRatingStars(item.rating) }}
            </span>
          </td>
          <td>
            <img :src="item.image" alt="Imagen de {{ item.name }}" style="max-width: 100px; height: auto;">
          </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deletePeliculas(item.id)">
              Eliminar
            </button>
            <router-link
              class="btn btn-warning btn-sm"
              :to="{
                name: 'Editar',
                params: {
                  id: item.id
                }
              }"
            >
              Editar
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['peliculas'])
  },
  methods: {
    ...mapActions(['deletePeliculas']),
    getRatingStars(rating) {
      return '★'.repeat(rating) + '☆'.repeat(5 - rating); // ★ para estrellas llenas, ☆ para estrellas vacías
    }
  }
};
</script>

<style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .table th,
  .table td {
    padding: 10px;
    text-align: left;
    vertical-align: middle;
  }

  .table th {
    background-color: #343a40;
    color: #ffffff;
  }

  .table-striped tbody tr:nth-of-type(odd) {
    background-color: #f8f9fa;
  }

  .star-rating {
    font-size: 20px; /* Ajusta el tamaño de las estrellas según sea necesario */
    color: #ffd700; /* Color dorado para las estrellas */
  }
  .btn {
    padding: 6px;
    margin: 5px;
    font-size: 14px;
  }
</style>
