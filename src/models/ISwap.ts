export interface ISwap {
    from:SwapFrom;
    to:SwapTo;
}
type SwapFrom = {
    tokenName: string,
    svg: string,
    fullName: string,
    balance: number,
    amount: number,
    usd:number,
}
type SwapTo = SwapFrom & {
    revenuePercent: number
}