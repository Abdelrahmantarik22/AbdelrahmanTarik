import { z} from "zod"


export const SendSchema =z.object({
    name:z.string().nonempty("this field is required").min(2,"min length is 2 characters").max(35,"max length is 35 characters"),
    email:z.string().nonempty("this field is required").email("not valid email"),
    subject:z.string().nonempty("this field is required").min(2,"min length is 2 characters").max(25,"max length is 25 characters"),
    message:z.string().nonempty("this field is required").min(2,"min length is 2 characters"),


})