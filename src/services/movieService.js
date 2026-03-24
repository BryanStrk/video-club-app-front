    import axios from 'axios'

    const API_URL = 'http://localhost:3000/movies'

    // Instancia de Axios con configuración base
    const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    })

    // GET - Obtener todas las películas
    export const getAllMovies = async () => {
    const response = await apiClient.get('/')
    return response.data
    }

    // GET - Obtener una película por ID
    export const getMovieById = async (id) => {
    const response = await apiClient.get(`/${id}`)
    return response.data
    }

    // POST - Crear nueva película
    export const createMovie = async (movieData) => {
    const response = await apiClient.post('/', movieData)
    return response.data
    }

    // PUT - Actualizar película completa
    export const updateMovie = async (id, movieData) => {
    const response = await apiClient.put(`/${id}`, movieData)
    return response.data
    }

    // DELETE - Eliminar película
    export const deleteMovie = async (id) => {
    const response = await apiClient.delete(`/${id}`)
    return response.data
    }
