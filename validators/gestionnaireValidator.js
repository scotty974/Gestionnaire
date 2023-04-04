import { z } from "zod";

const gestionValid = z.object({
    website : z.string(),
    account : z.string(),
    password : z.string(),
  

});

export default gestionValid;