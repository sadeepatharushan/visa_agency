'use server'

import { consultationSchema } from "@/lib/zod-schemas"
import { parseWithZod } from "@conform-to/zod"

export async function createConsultation(currentState: unknown, formData: FormData) {
    // const { getUser } = getKindeServerSession()
    // const user = await getUser()

    // if (!user && user.email !== 'visurasurajitha@gmail.com') {
    //     return redirect('/') // need to edit this
    // }

    const submission = parseWithZod(formData, {
        schema: consultationSchema
    })

    if (submission.status === 'success') {
        console.log(formData)
        return submission.reply()
    }
}