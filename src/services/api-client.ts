import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: "99e1733bb6bf4a31a8d60fa4d00c7413"
    }
})