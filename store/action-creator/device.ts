import {Dispatch} from "react";
import {DeviceActionConst, DeviceActionTypes} from "../types/device.type";
import TypeService from "../../services/TypeService";
import BrandService from "../../services/BrandService";
import DeviceService from "../../services/DeviceService";


export const setTypes = () => {
    return async (dispatch: Dispatch<DeviceActionTypes>)=> {
        try {
            dispatch({type: DeviceActionConst.SET_LOADING, payload: true})

            const response = await TypeService.fetchTypes()

            dispatch({type: DeviceActionConst.SET_TYPES, payload: response.data})
        } finally {
            dispatch({type: DeviceActionConst.SET_LOADING, payload: false})
        }
    }
}

export const setBrands = () => {
    return async (dispatch: Dispatch<DeviceActionTypes>)=> {
        try {
            dispatch({type: DeviceActionConst.SET_LOADING, payload: true})

            const response = await BrandService.fetchBrands()

            dispatch({type: DeviceActionConst.SET_BRANDS, payload: response.data})
        } finally {
            dispatch({type: DeviceActionConst.SET_LOADING, payload: false})
        }
    }
}

export const setDevices = (typeId: number, brandId: number, offset: number = 0, limit: number = 5) => {
    return async (dispatch: Dispatch<DeviceActionTypes>)=> {
        try {
            dispatch({type: DeviceActionConst.SET_LOADING, payload: true})

            const response = await DeviceService.fetchDevices(typeId, brandId, offset, limit)

            dispatch({type: DeviceActionConst.SET_DEVICES, payload: response.data})
        } finally {
            dispatch({type: DeviceActionConst.SET_LOADING, payload: false})
        }
    }
}