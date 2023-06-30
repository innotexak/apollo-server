import { Request, Response } from "express"
import { AuthDatasource } from "./datasource.js"
import { IRegAccount } from "./type.js"


export const AccountMutation = {
    async userRegistration(parent: unknown, { data }: { data: IRegAccount }) {
        return await new AuthDatasource().userRegistration(data)
    }

}


export const AccountQuery = {
    async getMyDetails(parent: unknown, noData: unknown, context: { req: Request, res: Response }) {
        return new AuthDatasource().getMyDetails()
    }

}