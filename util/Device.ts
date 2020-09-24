import { Dimensions } from 'react-native';

export type DeviceType = {
    width: number;
    height: number;
};

export enum DeviceSizes {
    p = 'p',
    m = 'm',
    g = 'g',
}

export const DeviceResolutions: { [key in DeviceSizes]: DeviceType } = {
    p: {
        width: 300,
        height: 500,
    },
    m: {
        width: 400,
        height: 680,
    },
    g: {
        width: 1440,
        height: 2560,
    },
};

export const Device: DeviceType = {
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').height),
};

export default class DeviceUtil {
    /* Shortname for deviceIsEqualOrLarger */
    static deviceIsEOL(deviceSize: DeviceSizes): boolean {
        return (
            Device.width >= DeviceResolutions[deviceSize].width &&
            Device.height >= DeviceResolutions[deviceSize].height
        );
    }
}
