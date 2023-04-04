import { z } from "zod";
const registerValidator = z.object({
    email: z.string().email(),
    password: z.string().min(4),

});

export default registerValidator;