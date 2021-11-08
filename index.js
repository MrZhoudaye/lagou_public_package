import axios from 'axios'

const getCat = () => {
    return axios.get('https://aes.random.cat/meow').then((res) => {
        const imageSrc = res.data.file
        const text = 'CAT'
        return {imageSrc,text}
    })
}
const getDog = () => {
    return axios.get('https://random.dog/woof.json').then((res) => {
        const imageSrc = res.data.file
        const text = 'DOG'
        return {imageSrc,text}
    })
}
const getGoat = () => {
    return axios.get('http://placegoat.com/200').then((res) => {
        const imageSrc = res.data.file
        const text = 'GOAT'
        return {imageSrc,text}
    })
}

export default {
    getCat,getDog,getGoat
}