export interface Entry {
    map(arg0: (entry: any) => JSX.Element): import("react").ReactNode;
    id: string,
    sticker: string,
    vehicleOwner: string,
    vehicleType: string,
    vehiclePlate: string,
    vehicleBrand: string,
    vehicleModel: string,
    vehicleColour: string,
    taxExpire: string,
    insuranceExpire: string,
    hasGreenBook: string,
    province: string,
    ownerEmail: string,
    ownerTele: string,
    ownerRole: string,
    messageRemark: string,
    greenBookOwner: string,
    drivingExpire: string,
    idNo: string
}

/* export function toEntry(doc): Entry {
    return { id: doc.id, ...doc.data() };
}
 */
export const toEntry = (doc: { id: any; data: () => any }) => {
    return {id: doc.id, ...doc.data() }
}

export interface PostEntry {
    map(arg0: (entry: any) => JSX.Element): import("react").ReactNode;
    id: string,
    title: string,
    subtitle: string,
    content: string
}

/* export function toEntry(doc): Entry {
    return { id: doc.id, ...doc.data() };
}
 */
export const toPostEntry = (doc: { id: any; data: () => any }) => {
    return {id: doc.id, ...doc.data() }
}