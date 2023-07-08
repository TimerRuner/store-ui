import $api from "../http"
import { AxiosResponse } from "axios"
import {ICharacteristic, IDevice} from "../models/models/DeviceResponse";
import {IBasketDevice} from "../store/types/device.type";

export default class DeviceService {

    static createDevice = async (device): Promise<AxiosResponse<IDevice>> => {
        return await $api.post<IDevice>('/device/create', device)
    }

    static fetchDevices = async (typeId: number | null = null, brandId: number | null = null, offset: number = 0, limit: number = 5): Promise<AxiosResponse<{count: number, rows: IDevice[]}>> => {
        if(brandId && typeId) {
            return await $api.get(`/device/all?limit=${limit}&offset=${offset}&typeId=${typeId}&brandId=${brandId}`)
        } else if(brandId) {
            return await $api.get(`/device/all?limit=${limit}&offset=${offset}&brandId=${brandId}`)
        } else if(typeId) {
            return await $api.get(`/device/all?limit=${limit}&offset=${offset}&typeId=${typeId}`)
        } else {
            return await $api.get(`/device/all?limit=${limit}&offset=${offset}`)
        }
    }

    static addBasketDevice = async (deviceId: number): Promise<AxiosResponse<IBasketDevice>> => {
        return await $api.post('/basketDevice/create', {deviceId})
    }

    static getBasketDevices = async (): Promise<AxiosResponse<IBasketDevice[]>> => {
        return await $api.get('/basketDevice/all')
    }

    static deleteBasketDevice = async (deviceId: number) => {
        return await $api.delete(`/basketDevice/delete/${deviceId}`)
    }

    static fetchOneDevice = async (id): Promise<AxiosResponse<IDevice>> => {
        return await $api.get(`/device/${id}`)
    }

    static addDeviceCharacteristic = async (dto: ICharacteristic) => {
        return await $api.post('/deviceCharacteristic/create', dto)
    }
}