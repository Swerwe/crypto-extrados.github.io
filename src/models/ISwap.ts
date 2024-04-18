export interface ISwap {
    from:SwapFromType;
    to:SwapToType;
}
export type SwapFromType = {
    tokenName: string,
    svg: string,
    fullName: string,
    balance: number,
    amount: number,
    usd:number,
}
export type SwapToType = SwapFromType & {
    revenuePercent: number
}