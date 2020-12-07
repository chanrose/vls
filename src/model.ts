export interface Entry {
    map(arg0: (entry: any) => JSX.Element): import("react").ReactNode;
    id: string,
    sticker: string,
    vehicleOwner: string,
    ownerRole: string,
    idNo: string
    ownerEmail: string,
    ownerTele: string,
    drivingExpire: string,
    vehicleType: string,
    vehiclePlate: string,
    province: string,
    vehicleBrand: string,
    vehicleModel: string,
    vehicleColour: string,
    taxExpire: string,
    insuranceExpire: string,
    hasGreenBook: string,
    greenBookOwner: string,
    messageRemark: string,
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


export interface guestProfile {
    map(arg0: (entry: any) => JSX.Element): import("react").ReactNode;
    id: string,
    name: string,
    isAdmin: boolean,
    organization: string
}

/* export function toEntry(doc): Entry {
    return { id: doc.id, ...doc.data() };
}
 */
export const toGuestProfile = (doc: { id: any; data: () => any }) => {
    return {id: doc.id, ...doc.data() }
}

export interface orgList {
    map(arg0: (entry: any) => JSX.Element): import("react").ReactNode;
    id: string,
    organId: string,
    name: string,
  
}

export const toOrgList = (doc: { id: any; data: () => any }) => {
    return {id: doc.id, ...doc.data() }
}

