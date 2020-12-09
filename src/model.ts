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

export interface userProfile {
    map(arg0: (entry: any) => JSX.Element): import("react").ReactNode;
    id?: string,
    name?: string,
    isAdmin?: boolean,
    organId: string
}
export interface guestDetail {
    name?: string,
    organization: string
}

export interface orgList {
    map(arg0: (entry: any) => JSX.Element): import("react").ReactNode;
    id: string,
    organId: string,
    name: string,
  
}


export interface reqList {
    map(arg0: (entry: any) => JSX.Element): import("react").ReactNode;
    id: string,    
    name: string,
    idNo: string,
    guestEmail: string,
    guestTele: string,
    requestType: string,
    messageRemark : string,
  
}

