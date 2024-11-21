import { Calendar, Home, Inbox, User, Settings, } from "lucide-react"

export const aboutUsPara = 'Welcome to [Agency Name], a trusted visa consultancy agency in Sri Lanka dedicated to helping students achieve their academic dreams in Russia. With a commitment to excellence and personalized service, we specialize in guiding students through every step of the process, from selecting the perfect university to securing a student visa. Our experienced team works closely with top Russian universities to provide access to diverse educational opportunities in fields like medicine, engineering, IT, and more. We pride ourselves on transparency, reliability, and a deep understanding of the unique challenges faced by Sri Lankan students. At [Agency Name], we don’t just help you get to Russia; we ensure you are fully prepared for your academic journey, offering support in documentation, language preparation, and cultural orientation. Join us to turn your study-abroad aspirations into reality.'


export const services = [
    {
      title: "Service One",
      description: "Description of service one and its key benefits to your customers.",
      image: "/service1.png"
    },
    {
      title: "Service Two",
      description: "Description of service two and its key benefits to your customers.",
      image: "/service2.jpg"
    },
    {
      title: "Service Three",
      description: "Description of service three and its key benefits to your customers.",
      image: "/service3.jpg"
    }
  ]


  export const faqItems = [
    {
      question: "Why study abroad?",
      answer: "Studying abroad offers unique opportunities for personal growth, cultural immersion, and academic excellence. You'll gain international experience, learn new languages, and develop a global perspective that's valuable for your future career."
    },
    {
      question: "Where and what to study?",
      answer: "Choose from a wide range of destinations and programs based on your academic interests, career goals, and personal preferences. Consider factors like language of instruction, course availability, and cultural environment."
    },
    {
      question: "How do I apply?",
      answer: "The application process involves selecting your program, preparing necessary documents (transcripts, letters of recommendation, language certificates), and submitting your application by the deadline. Our advisors can guide you through each step."
    },
    {
      question: "After receiving an offer",
      answer: "Once you receive an offer, you'll need to accept it formally, pay any required deposits, and begin planning for your stay abroad. This includes arranging accommodation and applying for your student visa."
    },
    {
      question: "Prepare to depart",
      answer: "Preparation involves securing your visa, booking flights, arranging accommodation, and ensuring you have all necessary documentation. We provide a pre-departure checklist to help you stay organized."
    },
    {
      question: "Arrive and thrive",
      answer: "Upon arrival, attend orientation sessions, set up your living space, and begin exploring your new environment. We offer support services to help you adjust and make the most of your study abroad experience."
    }
  ]


  export const testimonials = [
    {
      text: "Thanks to [Agency Name], my dream of studying medicine in Russia came true! The team was incredibly supportive, guiding me through every step of the application and visa process. They made everything so easy and stress-free. I highly recommend their services to any student looking to study abroad.",
      name: "BINADI CHITHMA",
      location: "SRI LANKA",
      image: "/testimonial1.jpg"
    },
    {
      text: "I was overwhelmed by the thought of studying in a foreign country, but [Agency Name] made it all possible. From choosing the right university to preparing my visa documents, they were with me every step of the way. Now, I’m pursuing my engineering degree in Russia, and it’s all thanks to them!",
      name: "VIMUKTHI PERERA",
      location: "SRI LANKA",
      image: "/testimonial2.jpeg"
    },
    {
      text: "What sets [Agency Name] apart is their personalized approach. They genuinely cared about my goals and helped me secure admission to a top IT program in Russia. The team even prepared me for life in a new country, which made my transition so smooth. I couldn’t have done it without them!",
      name: "RAVEESHA DISSANAYAKE",
      location: "SRI LANKA",
      image: "/testimonial3.jpg"
    }
  ]


  export const dashboardMenuItems = [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Consultations",
      icon: Inbox,
      subItems: [
          { title: "Add Consultation", url: "/dashboard/consultations/add" },
          { title: "All Consultations", url: "/dashboard/consultations" },
        ],
    },
    {
      title: "Blogs",
      icon: Calendar,
      subItems: [
        { title: "Add Blog", url: "/dashboard/blogs/add" },
        { title: "All Blogs", url: "/dashboard/blogs" },
      ],
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: User,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]