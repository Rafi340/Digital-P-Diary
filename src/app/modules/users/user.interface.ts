import { Model } from "mongoose"

export type IUser = {
  id: string
  name: string
  email: string
  role: string
  password: string
  avatar?: string
}
export type UserModel = Model<IUser, Record<string, unknown>>;