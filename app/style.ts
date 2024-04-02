
export interface Logininputs {
    Email:string|undefined
    password:string|undefined
}

export interface ContextStyle{
    acc:AccStyle[]
    setAcc:(Login:AccStyle[]) =>  void,
    noneExAcc:boolean,
    setNoneExAcc:(noneExAcc:boolean) => void
}

export interface links{
    name:string
    image:string
    url:string
    bg:string
}

export interface AccStyle extends Logininputs {
    id:number|undefined
    firstName:string|undefined
    lastName:string|undefined
    links:any,
    picture:string|undefined
}

export interface Links {
    name:string,
    image:string
    bg:string

}

export interface User {
    id: number;
    Email: string;
    password: string;
    firstName: string;
    lastName: string;
    links: any[];
}
