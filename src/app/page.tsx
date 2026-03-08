"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users,
  Building,
  Heart,
  Activity,
  GraduationCap,
  Stethoscope,
  Microscope,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  User,
  HelpCircle,
  Award,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  TrendingUp
} from "lucide-react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const banners = [
    {
      id: 1,
      title: "Excellence in Medical Education & Healthcare",
      description: "A premier institution dedicated to shaping future healthcare professionals through innovative education, research, and compassionate patient care.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=600&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "Advanced Medical Facilities",
      description: "State-of-the-art infrastructure and modern medical equipment for comprehensive healthcare services.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=600&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "Expert Medical Faculty",
      description: "Renowned professors and experienced medical practitioners committed to academic excellence.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=600&fit=crop&auto=format"
    },
    {
      id: 4,
      title: "Research & Innovation",
      description: "Cutting-edge research facilities and opportunities for medical advancement and discovery.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1920&h=600&fit=crop&auto=format"
    }
  ]

  const newsItems = [
    {
      id: 1,
      title: "MBBS Admission 2024 Now Open - Apply Before Deadline",
      type: "Admission",
      urgency: "high"
    },
    {
      id: 2,
      title: "New Advanced ICU Wing Inaugurated at Hospital",
      type: "Facility",
      urgency: "medium"
    },
    {
      id: 3,
      title: "Faculty Receives National Research Excellence Award",
      type: "Achievement",
      urgency: "medium"
    },
    {
      id: 4,
      title: "Medical Symposium 2024 - Registration Now Open",
      type: "Event",
      urgency: "low"
    },
    {
      id: 5,
      title: "Free Health Camp for Local Community This Weekend",
      type: "Community",
      urgency: "high"
    },
    {
      id: 6,
      title: "New Pediatric Department Fully Operational",
      type: "Service",
      urgency: "medium"
    },
    {
      id: 7,
      title: "Orientation Program for New Students - April 1st",
      type: "Academic",
      urgency: "low"
    },
    {
      id: 8,
      title: "Hospital Achieves ISO Certification for Quality Healthcare",
      type: "Achievement",
      urgency: "high"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Carousel Images */}
        <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[620px]">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Carousel Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6">
          <div className="responsive-container-full py-10 sm:py-14 lg:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg">
                {banners[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-highlight drop-shadow">
                {banners[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-highlight">
                  <Link href="/admission" className="flex items-center">
                    Apply for Admission
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-primary hover:bg-highlight hover:text-darkgreen">
                  <Link href="/appointment" className="flex items-center">
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* News Ticker */}
      <section className="bg-[#EAEAEA] text-[#116C64] py-3 overflow-hidden">
        <div className="flex items-center">
          <div className="bg-[#116C64]/10 px-4 py-2 flex items-center space-x-2 z-10 relative">
            <Megaphone className="w-5 h-5 text-[#116C64]" />
            <span className="font-bold text-sm sm:text-base text-[#116C64]">Latest News</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-ticker flex items-center space-x-8 whitespace-nowrap">
              {[...newsItems, ...newsItems].map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex items-center space-x-3 py-1">
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${
                    item.urgency === 'high' 
                      ? 'bg-[#116C64] text-white' 
                      : item.urgency === 'medium'
                      ? 'bg-[#116C64]/80 text-white'
                      : 'bg-[#116C64]/60 text-white'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-sm sm:text-base">{item.title}</span>
                  {item.urgency === 'high' && (
                    <TrendingUp className="w-4 h-4 text-[#116C64]" />
                  )}
                </div>
              ))}
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
