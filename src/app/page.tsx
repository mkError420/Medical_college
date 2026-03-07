import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users, 
  GraduationCap, 
  Stethoscope, 
  Microscope, 
  Building, 
  BookOpen,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Calendar,
  Heart,
  Activity
} from "lucide-react"

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="responsive-container-full section-padding">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Excellence in Medical Education & Healthcare
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-highlight">
              A premier institution dedicated to shaping future healthcare professionals through innovative education, research, and compassionate patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-highlight">
                <GraduationCap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-highlight hover:text-primary">
                <Stethoscope className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-white border-b">
        <div className="responsive-container">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-xs sm:text-sm text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-xs sm:text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-xs sm:text-sm text-gray-600">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-xs sm:text-sm text-gray-600">Beds Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="responsive-container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Medical College & Hospital?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive medical education and healthcare services with state-of-the-art facilities and experienced professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <CardTitle>Quality Education</CardTitle>
                <CardDescription>
                  Comprehensive MBBS program with modern curriculum and experienced faculty members dedicated to student success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/admission/local" className="text-primary hover:text-primary-dark font-medium flex items-center">
                  Learn more <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <CardTitle>Advanced Healthcare</CardTitle>
                <CardDescription>
                  State-of-the-art medical facilities providing comprehensive healthcare services across all major specialties.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/hospital" className="text-primary hover:text-primary-dark font-medium flex items-center">
                  Learn more <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Microscope className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <CardTitle>Research Excellence</CardTitle>
                <CardDescription>
                  Cutting-edge research facilities and opportunities for students and faculty to contribute to medical science.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/medical-education" className="text-primary hover:text-primary-dark font-medium flex items-center">
                  Learn more <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Building className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <CardTitle>Modern Facilities</CardTitle>
                <CardDescription>
                  Well-equipped laboratories, modern classrooms, digital library, and comfortable hostel facilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/facilities" className="text-primary hover:text-primary-dark font-medium flex items-center">
                  Learn more <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <CardTitle>Expert Faculty</CardTitle>
                <CardDescription>
                  Renowned professors and medical practitioners with extensive clinical and teaching experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/hospital/doctors" className="text-primary hover:text-primary-dark font-medium flex items-center">
                  Learn more <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
                </div>
                <CardTitle>Patient Care</CardTitle>
                <CardDescription>
                  Compassionate healthcare services with focus on patient wellness and community health programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/hospital/emergency" className="text-primary hover:text-primary-dark font-medium flex items-center">
                  Learn more <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="section-padding bg-white">
        <div className="responsive-container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Academic Departments
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum spans across four phases, covering all essential medical disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">I</span>
                </div>
                <CardTitle>Phase I</CardTitle>
                <CardDescription>
                  Basic Sciences - Anatomy, Physiology, Biochemistry
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">II</span>
                </div>
                <CardTitle>Phase II</CardTitle>
                <CardDescription>
                  Basic Sciences - Anatomy, Physiology, Biochemistry
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">III</span>
                </div>
                <CardTitle>Phase III</CardTitle>
                <CardDescription>
                  Community Medicine, Pathology, Microbiology
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">IV</span>
                </div>
                <CardTitle>Phase IV</CardTitle>
                <CardDescription>
                  Clinical Medicine & Surgery Specialties
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/departments">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                View All Departments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="section-padding">
        <div className="responsive-container">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">MBBS Admission 2024 Open</h3>
                        <p className="text-gray-600 mb-2">Applications are now being accepted for the 2024-2025 academic year.</p>
                        <span className="text-sm text-primary">2 days ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Research Excellence Award</h3>
                        <p className="text-gray-600 mb-2">Our faculty received national recognition for groundbreaking research.</p>
                        <span className="text-sm text-primary">1 week ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">New ICU Wing Inaugurated</h3>
                        <p className="text-gray-600 mb-2">State-of-the-art intensive care facility now operational.</p>
                        <span className="text-sm text-primary">2 weeks ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-base sm:text-lg">15</span>
                        <span className="text-white text-xs">MAR</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Medical Symposium 2024</h3>
                        <p className="text-gray-600 mb-2">Annual medical conference featuring international speakers.</p>
                        <span className="text-sm text-gray-500">9:00 AM - Auditorium</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-base sm:text-lg">22</span>
                        <span className="text-white text-xs">MAR</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Health Camp</h3>
                        <p className="text-gray-600 mb-2">Free health checkup camp for local community.</p>
                        <span className="text-sm text-gray-500">8:00 AM - Hospital Ground</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-base sm:text-lg">01</span>
                        <span className="text-white text-xs">APR</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Orientation Day</h3>
                        <p className="text-gray-600 mb-2">Welcome program for new MBBS students.</p>
                        <span className="text-sm text-gray-500">10:00 AM - Main Hall</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/notice-board">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All News & Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-600 text-white section-padding px-4">
        <div className="responsive-container">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Emergency Services Available 24/7</h2>
            <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 lg:mb-8">Our emergency department is always ready to provide immediate medical care.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
              <a href="tel:+8801234567890" className="flex items-center gap-2 hover:underline">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">+880 1234-567890</span>
              </a>
              <Button size="lg" className="bg-white text-primary hover:bg-highlight">
                <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
