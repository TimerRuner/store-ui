import {DeviceActionConst, DeviceActionTypes, IDeviceState} from "../types/device.type";

export const initialDeviceState: IDeviceState = {
    types: [],
    brands: [],
    devices: [],
    selectedType: null,
    selectedBrand: null,
    page: 1,
    totalCount:  0,
    limit: 5,
    loading: false,
    error: "",
    amount: 0
}

export const deviceReducer = (state: IDeviceState = initialDeviceState, action: DeviceActionTypes) => {
    switch (action.type) {
        case DeviceActionConst.SET_TYPES:
            return {...state, types: action.payload}
        case DeviceActionConst.SET_BRANDS:
            return {...state, brands: action.payload}
        case DeviceActionConst.SET_DEVICES:
            return {...state, devices: action.payload}
        case DeviceActionConst.SELECT_TYPE:
            return {...state, selectedType: action.payload}
        case DeviceActionConst.SELECT_BRAND:
            return {...state, selectedBrand: action.payload}
        case DeviceActionConst.SET_PAGE:
            return {...state, page: action.payload}
        case DeviceActionConst.SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case DeviceActionConst.SET_LIMIT:
            return {...state, limit: action.payload}
        case DeviceActionConst.SET_LOADING:
            return {...state, loading: action.payload}
    }
}