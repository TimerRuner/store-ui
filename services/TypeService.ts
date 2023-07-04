import $api from "../http";
import {AxiosResponse} from "axios/index";

export default class TypeService {
    static createType = async (name: string): Promise<AxiosResponse<{name: string, id: number}>> => {
        return await $api.post('api/type/create', {name})
    }

    static fetchTypes = async (): Promise<AxiosResponse<{name: string, id: number}[]>> => {
        return await $api.get('api/type/all')
    }
}