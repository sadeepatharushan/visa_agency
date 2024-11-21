import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ConsultationForm() {
  return (
    <div className=" mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="pr-6">
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
        <form className="space-y-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <div className="flex space-x-2">
            <Input placeholder="+94" className="w-16" />
            <Input placeholder="Mobile Number" className="flex-1" />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Nearest Office" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="office1">Office 1</SelectItem>
              <SelectItem value="office2">Office 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Preferred Study Destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="destination1">Destination 1</SelectItem>
              <SelectItem value="destination2">Destination 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Preferred Study Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Preferred Study Intake" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="intake1">Intake 1</SelectItem>
              <SelectItem value="intake2">Intake 2</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <Checkbox id="agree" />
            <label htmlFor="agree" className="text-sm">
              By clicking you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms & Conditions</a> *
            </label>
          </div>
          <Button className="w-full bg-purple-700 text-white">Get Started for Free</Button>
        </form>
      </div>
    </div>
  )
}

