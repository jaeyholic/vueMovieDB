<template>
    <transition name="list" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
        <div>
        <ul>
            <li :key="movie.id" v-for="movie in movies">
                <Movie :movie="movie" />
            </li>
        </ul>
        </div>
    </transition>
</template>

<script>
    import Movie from '../components/Movie.vue'

    export default {
        name: 'MoviesList',
        data() {
            return {
                movies: []
            }
        },
        created: function() {
            this.fetchData();
        },
        methods: {
            fetchData: async function () {
                try {
                    const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=347116112e75d54c7dde7b4d95494af5');
                    const movies = await res.json();
                    this.movies = movies.results;
                } catch(e) {
                    console.log(e);
                }
            }
        }, 
        components: {
            Movie
        }
    }
</script>

<style scoped>
    ul {
        display: grid;
        list-style-type: none;
        padding: 1rem;
        margin: 0;
        grid-row-gap: 1rem;
        grid-template-columns: repeat(6, 1fr);
    }

    .list-in-enter-active {
    animation: bounce-in .5s;
  }
  
  .list-in-leave-active {
    animation: bounce-in .5s;
  }

  @keyframes bounce-in {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(.8);
      }
      100% {
        transform: scale(0);
      }
    }
</style>