import {User} from '@prisma/client'


type UserData = Omit<User, 'id'>

type UserLogin = Omit<User, 'id' | 'name'>

type CreateUser = {
    name:string,
    email:string,
    password:string,
    confirm_password:string
}

type UserReturn = {
    name:string,
    email:string,
    password?:string
}

export {UserData, CreateUser, UserReturn, UserLogin}