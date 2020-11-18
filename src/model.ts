export interface Entry {
    map(arg0: (entry: any) => JSX.Element): import("react").ReactNode;
    id: string,
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
    greenBookOwner: string
}

/* export function toEntry(doc): Entry {
    return { id: doc.id, ...doc.data() };
}
 */
export const toEntry = (doc: { id: any; data: () => any }) => {
    return {id: doc.id, ...doc.data() }
}