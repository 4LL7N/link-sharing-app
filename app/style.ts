export interface loginStyle {
    Email:string
    password:string
}

export interface ContextStyle{
    Login:loginStyle
    setLogin:(Login:loginStyle) =>  void
}

export interface Logininputs {
    Email:string
    password:string
}