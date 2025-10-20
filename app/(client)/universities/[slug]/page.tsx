import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Users, Award, Calendar } from 'lucide-react';
import { universityData } from '@/consts';

type tParams = Promise<{ slug: string }>;

export default async function UniversityPage(props: { params: tParams }) {
  const { slug } = await props.params;
  const university = universityData.find(
    (u) => u.slug.toLowerCase() === slug
  );

  if (!university) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section with Enhanced Visual Appeal */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-10"></div>
        <div className="relative w-full h-[400px] md:h-[600px]">
          <Image
            src={university.image}
            alt={`${university.name} campus`}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Floating Header Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center space-y-6 px-4 max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                {university.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                {university.description}
              </p>
              <div className="mt-8">
                <Button 
                  asChild 
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <a href={university.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-3 h-5 w-5" />
                    Explore University
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Modern Layout */}
      <div className="container mx-auto px-4 py-16 space-y-16 relative -mt-20 z-30">
        
        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, label: "Students", value: "25,000+" },
            { icon: Award, label: "Programs", value: university.departments.length.toString() },
            { icon: MapPin, label: "Campus", value: "Modern" },
            { icon: Calendar, label: "Founded", value: "1850" }
          ].map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Departments Section with Modern Grid */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <CardTitle className="text-3xl md:text-4xl font-bold text-center">
              Academic Departments
            </CardTitle>
            <p className="text-center text-blue-100 mt-2 text-lg">
              Discover our diverse range of academic programs
            </p>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {university.departments.map((department, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-slate-800 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {department}
                    </span>
                  </div>
                  <div className="mt-3 h-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action Section */}
        <div className="text-center py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Join thousands of students who have chosen excellence. Explore our programs and discover your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a href={university.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-3 h-5 w-5" />
                  Visit Official Website
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}