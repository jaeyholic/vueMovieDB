import Vue from 'vue'
import Router from 'vue-router'

//components
import MoviesList from './components/MoviesList.vue'
import MovieDetails from './components/MovieDetails.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: "Movies List",
            component: MoviesList
        },
        {
            path: '/movie/:id',
            name: "Movie Details",
            component: MovieDetails
        }
    ]
})