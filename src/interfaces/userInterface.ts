import {User} from '@prisma/client'


type UserData = Omit<User, 'id' | 'createdAt'>


export {UserData}