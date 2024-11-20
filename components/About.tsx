import { aboutUsPara } from "@/consts"
import { TextGenerateEffect } from "./ui/text-generate"

const AboutUs = () => {
  return (
    <div className="py-10 my-10" id="about">
      <h1 className="font-bold text-5xl text-center text-blue-950">
        About Us
      </h1>

      <div className="flex flex-col items-center mt-10 md:mx-40">
        
        <TextGenerateEffect 
            className="text-balance text-center text-xl text-slate-950"
            words={aboutUsPara}
        />
       
      </div>
    </div>
  )
}

export default AboutUs