import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    peliculas: [],
    pelicula: {
      id: '',
      name: '',
      description: '',
      genres: [],
      image: '',
      rating: 0,
      inTheaters: false
    }
  },
  mutations: {
    cargar(state, payload) {
      state.peliculas = payload
    },
    set(state, payload) {
      state.peliculas.push(payload)
    },
    eliminar(state, payload) {
      state.peliculas = state.peliculas.filter(item => item.id !== payload)
    },
    pelicula(state, payload) {
      if (!state.peliculas.find(item => item.id === payload)) {
        router.push('/')
        return
      }
      state.pelicula = state.peliculas.find(item => item.id === payload)
    },
    update(state, payload) {
      state.peliculas = state.peliculas.map(item => item.id === payload.id ? payload : item)
      router.push('/')
    }
  },
  actions: {
    async cargarLocalStorage({ commit }) {
      try {
        const res = await fetch('/movies.json')
        const dataDB = await res.json()
        commit('cargar', dataDB.items)
      } catch (error) {
        console.log(error)
      }
    },
    async setPeliculas({ commit }, pelicula) {
      try {
        const res = await fetch(`https://proyecto01-af436-default-rtdb.firebaseio.com/peliculas/${pelicula.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(pelicula)
        })

        const dataDB = await res.json()
        console.log(dataDB)

      } catch (error) {
        console.log(error)
      }
      commit('set', pelicula)
    },
    async deletePeliculas({ commit }, id) {
      try {
        const res = await fetch(`https://proyecto01-af436-default-rtdb.firebaseio.com/peliculas/${id}.json`, {
          method: 'DELETE',
        })
        commit('eliminar', id)
      } catch (error) {
        console.log(error)
      }
    },
    setPelicula({ commit }, id) {
      commit('pelicula', id)
    },
    async updatePelicula({ commit }, pelicula) {
      try {
        const res = await fetch(`https://proyecto01-af436-default-rtdb.firebaseio.com/peliculas/${pelicula.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(pelicula)
        })

        const dataDB = await res.json()
        commit('update', dataDB)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
