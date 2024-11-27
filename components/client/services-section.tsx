import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/consts";
import Image from "next/image";

export default function Services() {
  return (
    <section id="Services" className="w-full pt-12 pb-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl font-semibold tracking-tighter text-center mb-12">
          Core services you offer.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="rounded-none w-full max-w-sm hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative h-52 w-full">
                  <Image
                    alt={ service.title + ' image'}
                    className="object-cover"
                    fill
                    src={service.image}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
