import { IRegAccount } from "./type.js"

export class AuthDatasource {

    public myData = {
        firstName: 'Innocent',
        lastName: "Akuh",
        description: "I'm a developer based in Nigeria"
    }


    async userRegistration(data: IRegAccount) {
        //database operation goes in here
        console.log(data);

        return 'Registration complete'
    }

    getMyDetails() {
        return this.myData
    }



}