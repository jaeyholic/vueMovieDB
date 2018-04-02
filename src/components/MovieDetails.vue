<template>
 <transition name="fade" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
    <div class="movie-wrapper" :style="styles">
        <div class="movie-info">
            <h1>{{ movie.title }}</h1>
            <h3>Release Date: {{ movie.release_date }}</h3>
            <h3>Budget: ${{ movie.budget}}</h3>
            <h3>Status: {{ movie.status }}</h3>
            <p>{{ movie.overview }}</p>
        </div>
    </div>
 </transition>
</template>

<script>
    const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";
    export default {
        data() {
            return {
                movie: {}
            }
        },
        created: function() {
            this.fetchData();
        },
        computed: {
            styles() {
                return {
                    background: `url(${BACKDROP_PATH}${this.movie.backdrop_path}) 
                    no-repeat`
                }
            }
        },
        methods: {
            fetchData: async function () {
                try {
                    const res = await fetch(`https://api.themoviedb.org/3/movie/
                    ${this.$route.params.id}
                    ?api_key=347116112e75d54c7dde7b4d95494af5`);
                    const movie = await res.json();
                    this.movie = movie;
                } catch(e) {
                    console.log(e);
                }
            }
        }
    }
</script>

<style scoped>
    @import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css");
    .movie-wrapper {
        position: relative;
        padding-top: 50vh;
        background-position: cover;
        width: 100%;
    }

    .movie-info {
        background: #fff;
        color: #222;
        padding: 2rem 10%;
    }

    .fade-in-enter-active {
    animation: bounce-in .5s;
  }
  
  .fade-in-leave-active {
    animation: bounce-in .5s;
  }

  @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
</style>