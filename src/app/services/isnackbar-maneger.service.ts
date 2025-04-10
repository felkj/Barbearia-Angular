export interface ISnackbarManegerService{

    show(message: string, action?: string, duration?:number): void

}