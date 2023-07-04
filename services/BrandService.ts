import $api from "../http";
import {AxiosResponse} from "axios";

export default class BrandService {
    static createBrand = async (name: string): Promise<AxiosResponse<{name: string, id: number}>> => {
        return await $api.post('api/brand/create', {name})
    }

    static fetchBrands = async (): Promise<AxiosResponse<{name: string, id: number}[]>> => {
        return await $api.get('api/brand/all')
    }
}