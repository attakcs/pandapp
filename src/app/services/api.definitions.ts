export class Masterdata {
    commodities: Commodity[];   
    cryptocoins: Crypto[];
    indexes: Index[];
    
}

/** to Masterdata
 * ==================================================================
 * Maps the API response to a Masterdata object.
 * ==================================================================
 *
 * @param  {any} r      Response data from Masterdata endpoint.
 * @returns Masterdata
*/
export function toMasterdata(r:any): Masterdata {
    if (!r) { return new Masterdata() }
    let data = <Masterdata>({
        fiats: r.fiats,
        indexes: r.indexes,
        cryptocoins: r.cryptocoins,
        commodities: r.commodities,
    })
    return data;
};

export class Commodity {
    name: string;
    avg_price: number;
    logo: string;
    color: string;
    asset_type_name: string;
}

/** to Commodity
 * ==================================================================
 * Maps the API response to a Commodity object.
 * ==================================================================
 *
 * @param  {any} r   Response data from Commodity attribute from Masterdata.
 * @returns Commodity
*/
export function toCommodity(r:any): Commodity {
    if (!r) { return new Commodity() }
    let data = <Commodity>({
        name: r.attributes.name,
        avg_price: r.attributes.avg_price,
        logo: r.attributes.logo,
        color: r.attributes.color,
        asset_type_name: r.attributes.asset_type_name,
    })
    return data;
};

export class Crypto {
    name: string;
    avg_price: number;
    logo: string;
    color: string;
    asset_type_name: string;
}

/** to Crypto
 * ==================================================================
 * Maps the API response to a Crypto object.
 * ==================================================================
 *
 * @param  {any} r   Response data from Crypto attribute from Masterdata.
 * @returns Crypto
*/
export function toCrypto(r:any): Crypto {
    if (!r) { return new Crypto() }
    let data = <Crypto>({
        name: r.attributes.name,
        avg_price: r.attributes.avg_price,
        logo: r.attributes.logo,
        color: r.attributes.color,
        asset_type_name: r.attributes.asset_type_name,
    })
    return data;
};

export class Index {
    name: string;
    avg_price: number;
    logo: string;
    color: string;
    asset_type_name: string;
}

/** to Index
 * ==================================================================
 * Maps the API response to a Index object.
 * ==================================================================
 *
 * @param  {any} r   Response data from Index attribute from Masterdata.
 * @returns Index
*/
export function toIndex(r:any): Index {
    if (!r) { return new Index() }
    let data = <Index>({
        name: r.attributes.name,
        avg_price: r.attributes.avg_price,
        logo: r.attributes.logo,
        color: r.attributes.color,
        asset_type_name: r.attributes.asset_type_name,
    })
    return data;
};