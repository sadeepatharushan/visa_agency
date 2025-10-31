'use client'
import { createConsultation } from "@/actions/consultation-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { insertConsultationSchema } from "@/lib/zod-schemas"
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import Image from "next/image"
import { useActionState } from "react"
import { Calendar, Mail, Phone, User, GraduationCap, CheckCircle } from "lucide-react"

export default function ConsultationForm() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [lastResult, action] = useActionState(createConsultation, undefined)

  const [form, fields] = useForm({
      lastResult,
      onValidate({ formData }) {
        return parseWithZod(formData, { schema: insertConsultationSchema })
      },
      shouldValidate: 'onBlur',
      shouldRevalidate: 'onInput',
  })
  return (
    <div id="Consultation" className="mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="">
        <Image
          src="/form1.jpg"
          alt="Consultation Image"
          width={400}
          height={400}
          className="rounded-lg w-full h-full"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-3">Book your FREE consultation with Certified Counsellors</h2>
        <p className="mb-5">
            We&apos;re here to support you on your study abroad journey and help you create an extraordinary future for yourself. Fill the form to schedule a free consultation session. Our counselors will get in touch with you soon.
        </p>
        <form id={form.id} onSubmit={form.onSubmit} action={action} className="space-y-5">
                
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <User className="h-4 w-4 text-slate-500" />
                    Full Name
                  </label>
                  <Input 
                    placeholder="Enter your full name"
                    key={fields.name.key}
                    name={fields.name.name}
                    defaultValue={fields.name.initialValue} 
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-colors h-11"
                  />
                  {fields.name.errors && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {fields.name.errors}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-slate-500" />
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    key={fields.email.key}
                    name={fields.email.name}
                    defaultValue={fields.email.initialValue} 
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-colors h-11"
                  />
                  {fields.email.errors && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {fields.email.errors}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-slate-500" />
                    Mobile Number
                  </label>
                  <Input 
                    placeholder="0771223344" 
                    key={fields.phone.key}
                    name={fields.phone.name}
                    defaultValue={fields.phone.initialValue}
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-colors h-11" 
                  />
                  {fields.phone.errors && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {fields.phone.errors}
                    </p>
                  )}
                </div>

                {/* Study Year Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    Preferred Study Year
                  </label>
                  <Select 
                    key={fields.studyYear.key}
                    name={fields.studyYear.name}
                    defaultValue={fields.studyYear.initialValue}
                    error={fields.studyYear.errors as unknown as string | undefined}
                    onValidate={() => form.validate()}
                  >
                    <SelectTrigger className="bg-slate-50 border-slate-200 focus:bg-white h-11">
                      <SelectValue placeholder="Select preferred year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                      <SelectItem value="2028">2028</SelectItem>
                      <SelectItem value="2029">2029</SelectItem>
                      <SelectItem value="2030">2030</SelectItem>
                    </SelectContent>
                  </Select>
                  {fields.studyYear.errors && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {fields.studyYear.errors}
                    </p>
                  )}
                </div>

                {/* Study Intake Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-slate-500" />
                    Preferred Study Intake
                  </label>
                  <Select 
                    key={fields.studyIntake.key}
                    name={fields.studyIntake.name}
                    defaultValue={fields.studyIntake.initialValue} 
                    error={fields.studyIntake.errors as unknown as string | undefined}
                    onValidate={() => form.validate()}
                  >
                    <SelectTrigger className="bg-slate-50 border-slate-200 focus:bg-white h-11">
                      <SelectValue placeholder="Select intake period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="intake1">Intake 1</SelectItem>
                      <SelectItem value="intake2">Intake 2</SelectItem>
                      <SelectItem value="intake3">Intake 3</SelectItem>
                    </SelectContent>
                  </Select>
                  {fields.studyIntake.errors && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {fields.studyIntake.errors}
                    </p>
                  )}
                </div>
          <Button className="w-full bg-[#002244] hover:bg-[#0a2351] text-white">Get Free Consultation</Button>
        </form>
      </div>
    </div>
  )
}

