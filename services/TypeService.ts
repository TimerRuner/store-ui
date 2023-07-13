import $api from "../http";
import {AxiosResponse} from "axios/index";

export default class TypeService {
    static createType = async (name: string): Promise<AxiosResponse<{name: string, id: number}>> => {
        return await $api.post('/type/create', {name})
    }

    static fetchTypes = async (): Promise<AxiosResponse<{name: string, id: number}[]>> => {
        return await $api.get('/type/all')
    }
}