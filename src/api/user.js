import axios from "./axios";

export const getUser = async(id) => axios({
    method: "GET",
    url: `/users/${id}`
})