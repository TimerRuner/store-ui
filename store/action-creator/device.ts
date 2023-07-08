import {Dispatch} from "react";
import {DeviceActionConst, DeviceActionTypes, IBrand, IType} from "../types/device.type";
import TypeService from "../../services/TypeService";
import BrandService from "../../services/BrandService";
import DeviceService from "../../services/DeviceService";


export const fetchTypes = () => {
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

export const fetchBrands = () => {
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

export const fetchDevices = (typeId: number, brandId: number, offset: number = 0, limit: number = 5) => {
    return async (dispatch: Dispatch<DeviceActionTypes>)=> {
        try {
            dispatch({type: DeviceActionConst.SET_LOADING, payload: true})

            const response = await DeviceService.fetchDevices(typeId, brandId, offset, limit)

            dispatch({type: DeviceActionConst.SET_DEVICES, payload: response.data.rows})
            dispatch({type: DeviceActionConst.SET_AMOUNT, payload: response.data.count})
        } finally {
            dispatch({type: DeviceActionConst.SET_LOADING, payload: false})
        }
    }
}

export const setType = (type: IType) => {
    return async (dispatch: Dispatch<DeviceActionTypes>)=> {
        dispatch({type: DeviceActionConst.SELECT_TYPE, payload: type})
    }
}

export const setBrand = (brand: IBrand) => {
    return async (dispatch: Dispatch<DeviceActionTypes>)=> {
        dispatch({type: DeviceActionConst.SELECT_BRAND, payload: brand})
    }
}

export const setPage = (page: number) => {
    return async (dispatch: Dispatch<DeviceActionTypes>)=> {
        dispatch({type: DeviceActionConst.SET_PAGE, payload: page})
    }
}

