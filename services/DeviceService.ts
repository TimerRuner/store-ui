import $api from "../http"
import { AxiosResponse } from "axios"
import {IDevice} from "../models/models/DeviceResponse";

export default class DeviceService {

    static createDevice = async (device): Promise<AxiosResponse<IDevice>> => {
        return await $api.post<IDevice>('api/device/create', device)
    }

    static fetchDevices = async (typeId: number, brandId: number, offset: number = 0, limit: number = 5): Promise<AxiosResponse<IDevice[]>> => {
        return await $api.get(`api/device/all?limit=${limit}&offset=${offset}`, {params: {
           typeId, brandId
        }})
    }

    static fetchOneDevice = async (id): Promise<AxiosResponse<IDevice>> => {
        return await $api.get(`api/device/${id}`)
    }
}