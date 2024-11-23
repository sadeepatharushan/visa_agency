'use server'

import { consultationSchema } from "@/lib/zod-schemas"
import { parseWithZod } from "@conform-to/zod"

export async function createConsultation(prevState: unknown, formData: FormData) {

    const submission = parseWithZod(formData, {
        schema: consultationSchema
    })

    if (submission.status !== 'success') {
        return submission.reply()
    }

    try {
        // await prisma.consultation.create({
        //     data: {
        //         name: submission.value.name,
        //         email: submission.value.email,
        //         phone: submission.value.phone,
        //         studyIntake: submission.value.studyIntake,
        //         studyYear: submission.value.studyYear,
        //     },
        // })

        // console.log(`Successfully submitted`)


    } catch (error) {
        console.error("Error saving consultation:", error)
        // return {
        //     status: 'error',
        //     message: 'An unexpected error occurred while saving the free consultation. Please try again later.',
        // }
    }
}