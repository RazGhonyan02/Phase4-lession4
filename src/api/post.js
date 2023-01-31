import axios from "./axios";

export const postUsers = async() => axios({
    method: "GET",
    url: "posts"
})
