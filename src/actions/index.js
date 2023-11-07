import axios from 'axios'

export const GET_JOKE = `GET_JOKE`
export const GET_JOKE_SUCCESS = `GET_JOKE_SUCCESS`
export const GET_JOKE_ERROR = `GET_JOKE_ERROR`
export const SET_IS_FETCHING = `SET_IS_FETCHING`

const JokesURL = 'https://official-joke-api.appspot.com/random_joke'

export const getJoke = () => dispatch => {

    axios.get(JokesURL)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

    return { type: GET_JOKE }
}

export const setIsFetching = isFetching => {
    return { type: SET_IS_FETCHING, payload: isFetching}
}

export const getJokeSuccess = joke => {
    return { type: GET_JOKE_SUCCESS, payload: joke}
}

export const getJokeError = error => {
    return { type: GET_JOKE_ERROR, payload: error}
}
