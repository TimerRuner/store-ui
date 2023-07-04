import {IDevice} from "../../models/models/DeviceResponse";

interface IType {name: string, id: number}
interface IBrand {name: string, id: number}
export interface IDeviceState {
    types: Array<IType>,
    brands: Array<IBrand>,
    devices: Array<IDevice>,
    selectedType: string,
    selectedBrand: string,
    page: number,
    totalCount:  number,
    limit: number,
    loading: false,
    error: string
}

export enum DeviceActionConst {
    SET_TYPES = "SET_TYPES",
    SET_BRANDS = "SET_BRANDS",
    SET_DEVICES = "SET_DEVICES",
    SELECT_TYPE = "SELECT_TYPE",
    SELECT_BRAND = "SELECT_BRAND",
    SET_PAGE = "SET_PAGE",
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
    SET_LIMIT = "SET_LIMIT",
    SET_LOADING = "SET_LOADING"
}

export interface DeviceSetTypes {
    type: DeviceActionConst.SET_TYPES,
    payload: Array<IType>
}

export interface DeviceSetBrands {
    type: DeviceActionConst.SET_BRANDS,
    payload: Array<IBrand>
}

export interface DeviceSetDevice {
    type: DeviceActionConst.SET_DEVICES,
    payload: Array<IDevice>
}

export interface DeviceSelectType {
    type: DeviceActionConst.SELECT_TYPE,
    payload: string
}

export interface DeviceSelectBrand {
    type: DeviceActionConst.SELECT_BRAND,
    payload: string
}

export interface DeviceSetPage {
    type: DeviceActionConst.SET_PAGE,
    payload: number
}

export interface DeviceSetTotalCount {
    type: DeviceActionConst.SET_TOTAL_COUNT,
    payload: number
}

export interface DeviceSetLimit {
    type: DeviceActionConst.SET_LIMIT,
    payload: number
}

export interface DeviceSetLoading {
    type: DeviceActionConst.SET_LOADING,
    payload: boolean
}

export type DeviceActionTypes = DeviceSetTypes | DeviceSetBrands | DeviceSetDevice | DeviceSelectType
 | DeviceSelectBrand | DeviceSetPage | DeviceSetTotalCount | DeviceSetLimit | DeviceSetLoading
