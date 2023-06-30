import { AccountMutation, AccountQuery } from "./services/auth/resolve.js"


const Mutation = {
    ...AccountMutation

}
const Query = {
    ...AccountQuery

}

export { Mutation, Query }
