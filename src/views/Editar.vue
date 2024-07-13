<template>
  <div class="editar-container">
    <h1 class="my-5">Editar película: {{pelicula.nombre}}</h1>
    <form @submit.prevent="updatePelicula(pelicula)" class="editar-form">
      <Input :pelicula="pelicula" />
      <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/Input'
export default {
    components:{
        Input
    },
    data() {
        return {
            message: ''
        }
    },
    computed: {
        ...mapState(['pelicula'])
    },
    methods: {
        ...mapActions(['setPelicula', 'updatePelicula']),
        async updatePelicula(pelicula) {
            try {
                await this.$store.dispatch('updatePelicula', pelicula);
                this.message = 'Película actualizada con éxito';
            } catch (error) {
                this.message = 'Error al actualizar la película';
            }
        }
    },
    created(){
        this.setPelicula(this.$route.params.id)
    }
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
  width: 100%;
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
  margin: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #1e2a38;
  border-radius: 70px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cajaPelis:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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

