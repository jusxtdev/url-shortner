import { z } from "zod"

const newURLSchema = z.object({
    original_url: z.url()
})

const URLSchema = {
    newURLSchema
}

export default URLSchema
