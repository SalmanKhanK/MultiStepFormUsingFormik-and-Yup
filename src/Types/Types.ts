export type signuptype={
    name:string,
    email:string,
    password:string
}

export type Addusers={
    Add:signuptype[],
    addUsersfunc:(users:signuptype)=>void
}