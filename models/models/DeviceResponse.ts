export interface IRating {
    rate: number,
    userId: number,
    deviceId: number
}

export interface ICharacteristic {
    name: string
    description: string
    deviceId: number
}

export interface IDevice {
    name: string;
    picture: string;
    price: number
    typeId: number;
    brandId: number;
    userId: number;
    ratings: IRating[],
    characteristics: ICharacteristic[]
}