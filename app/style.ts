
export interface Logininputs {
    Email:string
    password:string
}

export interface ContextStyle{
    acc:AccStyle
    setAcc:(Login:AccStyle) =>  void,
    noneExAcc:boolean,
    setNoneExAcc:(noneExAcc:boolean) => void
}

interface links{
    name:string
    image:string
    url:string
    bg:string
}

export interface AccStyle extends Logininputs {
    firstName:string
    lastName:string
    links:links[]
}
