import { api } from "./baseAxios";

const RESOURCE="post"
export default {
    getAllPosts(){
        return api.get(`${post}`);
    }
}