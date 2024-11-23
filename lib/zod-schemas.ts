import { z } from 'zod'; 

export const consultationSchema = z.object({
    // type: z.enum(['POOL', 'GAME', 'DRINK']),
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number is required'),
    studyYear: z.string().min(1, 'Please select a study year'),
    studyIntake: z.string().min(1, 'Please select a study intake'),
  })