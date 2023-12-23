import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '21cf344843df4516b9385854938b88b2'
    }
})