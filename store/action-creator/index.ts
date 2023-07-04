import * as AuthActionCreator from "./auth"
import * as DeviceActionCreator from "./device"

export default {
    ...AuthActionCreator,
    ...DeviceActionCreator
}