<template>

  <h1 class="my-5">Formulario Pelicula</h1>

  <form @submit.prevent="procesarFormulario">
    <Input :pelicula="pelicula" />
  </form>
  <hr>
  <ListaPeliculas />
</template>

<script>

import Input from '../components/Input'
import ListaPeliculas from '../components/ListaPeliculas'
import {mapActions} from 'vuex'
const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
    Input, ListaPeliculas
  },
  data() {
    return {
      pelicula: {
        id: '',
        name: '',
        description: '',
        genres: [],
        image: '',
        rating: 0,
        inTheaters: false
      }
    }
  },
  methods: {
    ...mapActions(['setPeliculas']),
    procesarFormulario(){
      console.log(this.pelicula)
      if(this.pelicula.name.trim() === ""){
        console.log('Campo vacío')
        return
      }
      console.log('no está vacio')

      // generar id
      this.pelicula.id = shortid.generate()
      console.log(this.pelicula.id)
      
      // envian los datos
      this.setPeliculas(this.pelicula)

      // limpiar datos
      this.pelicula = {
        id: '',
        name: '',
        description: '',
        genres: [],
        image: '',
        rating: 0,
        inTheaters: false
      }
    }
  },

}
</script>
