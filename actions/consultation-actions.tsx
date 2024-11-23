'use server'

import { db } from "@/db"
import { consultations } from "@/db/schema"
import { insertConsultationSchema } from "@/lib/zod-schemas"
import { parseWithZod } from "@conform-to/zod"

export async function createConsultation(prevState: unknown, formData: FormData) {

    const submission = parseWithZod(formData, {
        schema: insertConsultationSchema
    })

    if (submission.status !== 'success') {
        return submission.reply()
    }

    try {
    
        await db.insert(consultations).values({
            name: submission.value.name,
            email: submission.value.email,
            phone: submission.value.phone,
            studyIntake: submission.value.studyIntake,
            studyYear: submission.value.studyYear,
        });

        return submission.reply()

    } catch (error) {
        console.error("Error saving consultation:", error)
        // return {
        //     status: 'error',
        //     message: 'An unexpected error occurred while saving the free consultation. Please try again later.',
        // }
    }
}