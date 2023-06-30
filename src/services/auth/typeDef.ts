import gql from "graphql-tag";

const AuthTypeDef = gql`

type Mutation{
    userRegistration(data:UserRegInput!):String!
}


type Query{
    getMyDetails:UserRes!
}


input UserRegInput{
    firstName:String!
    lastName:String!
    description:String!
}

type UserRes{
    firstName:String!
    lastName:String!
    description:String!
}
`

export default AuthTypeDef