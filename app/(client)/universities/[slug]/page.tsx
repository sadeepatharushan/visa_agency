import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Users, Award, Calendar, Mail, Globe } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Cleaner, More Professional */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden">
        {/* Image Container */}
        <div className="absolute inset-0">
          <Image
            src={university.image}
            alt={`${university.name} campus`}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>
        
        {/* Hero Content - Bottom Aligned */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 lg:pb-16">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                {university.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mb-6 md:mb-8 leading-relaxed">
                {university.description}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 font-semibold shadow-lg"
                >
                  <a href={university.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
                 <Button 
                  asChild
                  size="lg"
                  className="border-2 border-white bg-white/20 text-white hover:bg-white hover:text-slate-900 font-semibold backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <a href={`mailto:admissions@${university.slug}.edu`} className="flex items-center text-white hover:text-slate-900">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Admissions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        
        {/* Quick Stats Grid - Responsive & Aligned */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { icon: Users, label: "Students", value: "25,000+", color: "blue" },
            { icon: Award, label: "Programs", value: university.departments.length.toString(), color: "purple" },
            { icon: MapPin, label: "Location", value: "Main Campus", color: "green" },
            { icon: Calendar, label: "Established", value: "1850", color: "orange" }
          ].map((stat, index) => (
            <Card 
              key={index} 
              className="group bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center text-center h-full">
                <div className={`p-3 rounded-full bg-${stat.color}-50 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-5 w-5 md:h-6 md:w-6 text-${stat.color}-600`} />
                </div>
                <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Two Column Layout for Better Content Organization */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12 md:mb-16">
          
          {/* Main Content - Departments Section with Modern Grid */}
          <div className="lg:col-span-2">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
          </div>

          {/* Sidebar - Quick Actions & Info */}
          <div className="space-y-6">
            
            {/* Quick Actions Card */}
            <Card className="bg-white border border-slate-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-slate-900">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Campus Life
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Experience a vibrant campus community with state-of-the-art facilities, diverse student organizations, and endless opportunities for growth.
                </p>
                <Button 
                  asChild
                  variant="link" 
                  className="p-0 h-auto text-blue-600 hover:text-blue-700"
                >
                  <a href={`${university.website}/campus-life`}>
                    Learn more →
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-lg text-white overflow-hidden">
          <CardContent className="p-8 md:p-12 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Begin Your Academic Journey?
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join a community of learners, innovators, and leaders. Start your application today and take the first step toward your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-slate-100 font-semibold shadow-lg w-full sm:w-auto"
                >
                  <a href={`${university.website}/apply`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Start Application
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold w-full sm:w-auto"
                >
                  <a href={`${university.website}/brochure.pdf`} download>
                    Download Brochure
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}