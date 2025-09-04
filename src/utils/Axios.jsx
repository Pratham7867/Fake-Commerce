import axios  from "axios";

const instant =axios.create({
    baseURL:'https://fakestoreapi.com'
})

export default instant;