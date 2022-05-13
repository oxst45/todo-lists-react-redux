export function ts() {
    console.log("is it working?");
    let num: number = 0;
    // num = "";
    let str: string = "";
    let variable: number | null = null;
    variable = 4;
    let newStr: "all" | "empty" = "all";
    newStr = "empty";



    type UserType = {
        age: number
        name: string
        address: AddressType
    }
    type AddressType = {
        city?: string
        country?: string
    }
    const user: UserType = {
        age: 25,
        name: "noname",
        address: {
        }
    }


}