"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2 } from "lucide-react"

export default function OrthopaedicsPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedService, setSelectedService] = useState<any>(null)

  const departmentInfo = {
    name: "Department of Orthopaedics - Phase 4",
    head: "Prof. Dr. M. Ali",
    established: "2013",
    faculty: 10,
    interns: 20,
    beds: 50,
    description: "The Phase 4 Orthopaedics program provides comprehensive internship training in musculoskeletal medicine, trauma surgery, and joint replacement. Interns gain hands-on experience in managing fractures, sports injuries, and degenerative conditions."
  }

  const faculty = [
    {
      id: 1,
      name: "Prof. Dr. M. Ali",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCS",
      experience: "24 years",
      specialization: "Joint Replacement Surgery, Arthroplasty",
      email: "m.ali@rcmc.edu.bd",
      phone: "Ext: 3000",
      publications: 52,
      research: "Joint Replacement Biomaterials, Orthopaedic Implants",
      image: "/faculty/m-ali.jpg",
      achievements: ["Pioneer in Hip Replacement", "International Speaker", "Research Excellence"]
    },
    {
      id: 2,
      name: "Assoc. Prof. Dr. S. Karim",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCS",
      experience: "18 years",
      specialization: "Spine Surgery, Deformity Correction",
      email: "s.karim@rcmc.edu.bd",
      phone: "Ext: 3001",
      publications: 38,
      research: "Spinal Deformities, Minimally Invasive Spine Surgery",
      image: "/faculty/s-karim.jpg",
      achievements: ["Spine Surgery Expert", "Published Author", "Teaching Excellence"]
    },
    {
      id: 3,
      name: "Asst. Prof. Dr. A. Rahman",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "14 years",
      specialization: "Sports Medicine, Arthroscopy",
      email: "a.rahman@rcmc.edu.bd",
      phone: "Ext: 3002",
      publications: 28,
      research: "Sports Injuries, Arthroscopic Techniques",
      image: "/faculty/a-rahman.jpg",
      achievements: ["Arthroscopy Pioneer", "Sports Medicine Expert", "Innovation Award"]
    },
    {
      id: 4,
      name: "Dr. N. Ahmed",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "9 years",
      specialization: "Trauma Surgery, Fracture Management",
      email: "n.ahmed@rcmc.edu.bd",
      phone: "Ext: 3003",
      publications: 18,
      research: "Fracture Healing, Trauma Outcomes",
      image: "/faculty/n-ahmed.jpg",
      achievements: ["Trauma Care Excellence", "Clinical Research", "Patient Safety"]
    }
  ]

  const services = [
    {
      id: 1,
      name: "Joint Replacement Surgery",
      icon: "🦴",
      description: "Total hip, knee, and shoulder replacement surgeries",
      procedures: ["Total Hip Replacement", "Total Knee Replacement", "Partial Knee Replacement", "Shoulder Replacement"],
      outcomes: ["95% Success Rate", "Reduced Pain", "Improved Mobility", "Better Quality of Life"],
      technology: ["Computer-Assisted Surgery", "3D Planning", "Custom Implants", "Navigation Systems"]
    },
    {
      id: 2,
      name: "Spine Surgery",
      icon: "🦴",
      description: "Advanced surgical and non-spinal treatments",
      procedures: ["Spinal Fusion", "Discectomy", "Laminectomy", "Deformity Correction"],
      outcomes: ["90% Success Rate", "Pain Relief", "Neurological Improvement", "Stabilization"],
      technology: ["Minimally Invasive Techniques", "Robotic Assistance", "Intra-op Monitoring", "Navigation"]
    },
    {
      id: 3,
      name: "Sports Medicine",
      icon: "🦴",
      description: "Comprehensive care for sports injuries and athletes",
      procedures: ["ACL Reconstruction", "Meniscus Repair", "Rotator Cuff Repair", "Cartilage Restoration"],
      outcomes: ["92% Return to Sports", "Improved Function", "Reduced Re-injury", "Performance Enhancement"],
      technology: ["Arthroscopic Surgery", "Biologic Treatments", "PRP Therapy", "Advanced Imaging"]
    },
    {
      id: 4,
      name: "Trauma & Fracture Care",
      icon: "🦴",
      description: "24/7 emergency trauma and fracture management",
      procedures: ["Internal Fixation", "External Fixation", "Intramedullary Nailing", "Plating Systems"],
      outcomes: ["Excellent Healing", "Early Mobilization", "Reduced Complications", "Functional Recovery"],
      technology: ["Locking Plates", "Minimally Invasive Fixation", "3D Imaging", "Computer Planning"]
    },
    {
      id: 5,
      name: "Pediatric Orthopaedics",
      icon: "🦴",
      description: "Specialized orthopaedic care for children",
      procedures: ["Congenital Deformity Correction", "Scoliosis Treatment", "Growth Plate Management", "Clubfoot Treatment"],
      outcomes: ["Normal Development", "Improved Function", "Reduced Disability", "Better Growth"],
      technology: ["Growth-Friendly Implants", "Minimally Invasive Techniques", "3D Modeling", "Custom Bracing"]
    },
    {
      id: 6,
      name: "Hand & Microsurgery",
      icon: "🦴",
      description: "Specialized hand surgery and microsurgical procedures",
      procedures: ["Carpal Tunnel Release", "Tendon Repair", "Nerve Repair", "Reconstructive Surgery"],
      outcomes: ["Improved Function", "Reduced Pain", "Better Sensation", "Enhanced Dexterity"],
      technology: ["Microsurgical Techniques", "Arthroscopy", "Nerve Monitoring", "Advanced Imaging"]
    }
  ]

  const statistics = [
    { label: "Surgeries Performed", value: "2,500+", icon: "🔧", color: "bg-blue-500" },
    { label: "Success Rate", value: "94%", icon: "✓", color: "bg-green-500" },
    { label: "Patient Satisfaction", value: "96%", icon: "😊", color: "bg-purple-500" },
    { label: "Research Publications", value: "136", icon: "📚", color: "bg-orange-500" }
  ]

  const technologies = [
    {
      name: "Computer-Assisted Surgery",
      description: "Advanced navigation systems for precise surgical planning and execution",
      benefits: ["Improved Accuracy", "Reduced Surgical Time", "Better Outcomes", "Less Invasive"],
      image: "/tech/cas.jpg"
    },
    {
      name: "3D Printing & Custom Implants",
      description: "Patient-specific implants and surgical guides using 3D printing technology",
      benefits: ["Perfect Fit", "Reduced Surgery Time", "Better Integration", "Customized Solutions"],
      image: "/tech/3d-printing.jpg"
    },
    {
      name: "Robotic Surgery",
      description: "Robotic assistance for enhanced precision in complex procedures",
      benefits: ["Enhanced Precision", "Minimally Invasive", "Reduced Blood Loss", "Faster Recovery"],
      image: "/tech/robotic.jpg"
    },
    {
      name: "Advanced Imaging",
      description: "State-of-the-art imaging for accurate diagnosis and planning",
      benefits: ["Better Visualization", "Accurate Planning", "Reduced Radiation", "Real-time Imaging"],
      image: "/tech/imaging.jpg"
    }
  ]

  const researchAreas = [
    {
      title: "Biomaterials Research",
      description: "Development of new materials for orthopaedic implants",
      projects: 8,
      funding: "BDT 1.2M",
      publications: 15
    },
    {
      title: "Biomechanics Studies",
      description: "Analysis of joint mechanics and implant performance",
      projects: 6,
      funding: "BDT 800K",
      publications: 12
    },
    {
      title: "Clinical Outcomes Research",
      description: "Long-term studies on surgical outcomes and patient satisfaction",
      projects: 10,
      funding: "BDT 900K",
      publications: 18
    },
    {
      title: "Regenerative Medicine",
      description: "Stem cell and tissue engineering applications in orthopaedics",
      projects: 5,
      funding: "BDT 1.5M",
      publications: 8
    }
  ]

  const trainingPrograms = [
    {
      name: "Basic Orthopaedic Skills",
      duration: "4 weeks",
      level: "Beginner",
      modules: ["Anatomy", "Basic Fracture Management", "Plating Techniques", "Post-op Care"],
      certification: "Basic Orthopaedic Skills Certified"
    },
    {
      name: "Advanced Surgical Techniques",
      duration: "6 weeks",
      level: "Advanced",
      modules: ["Joint Replacement", "Spine Surgery", "Arthroscopy", "Trauma Management"],
      certification: "Advanced Surgical Skills Certified"
    },
    {
      name: "Research Methodology",
      duration: "2 weeks",
      level: "Intermediate",
      modules: ["Study Design", "Data Analysis", "Publication Skills", "Grant Writing"],
      certification: "Research Methods Certified"
    },
    {
      name: "Sports Medicine Fellowship",
      duration: "12 weeks",
      level: "Advanced",
      modules: ["Sports Injuries", "Arthroscopy", "Rehabilitation", "Performance Enhancement"],
      certification: "Sports Medicine Fellowship"
    }
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Hero Section with Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Orthopaedics Department</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {departmentInfo.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">Faculty</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">{departmentInfo.faculty}</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Interns</span>
                </div>
                <div className="text-2xl font-bold text-green-600">{departmentInfo.interns}</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Hospital className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-800">Beds</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">{departmentInfo.beds}</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-orange-800">Established</span>
                </div>
                <div className="text-2xl font-bold text-orange-600">{departmentInfo.established}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {statistics.map((stat, index) => (
            <Card key={index} className={`${stat.color} text-white`}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Department Head */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
              <User className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{departmentInfo.head}</h3>
              <p className="text-gray-600 mb-2">Professor & Head of Department</p>
              <p className="text-sm text-gray-500">Leading our department with excellence in orthopaedic care and innovation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderServices = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card 
            key={service.id} 
            className={`cursor-pointer transition-all duration-300 group ${
              selectedService?.id === service.id 
                ? 'ring-2 ring-blue-500 shadow-xl' 
                : 'hover:shadow-lg'
            }`}
            onClick={() => setSelectedService(service)}
          >
            <CardContent className="p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedService && (
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">{selectedService.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedService.name}</h3>
                <p className="text-gray-600">{selectedService.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Procedures
                </h4>
                <ul className="space-y-2">
                  {selectedService.procedures.map((procedure: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {procedure}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedService.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Technology
                </h4>
                <ul className="space-y-2">
                  {selectedService.technology.map((tech: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )

  const renderFaculty = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faculty.map((member) => (
          <Card key={member.id} className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                  <User className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.designation}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.qualifications}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.achievements.map((achievement, index) => (
                      <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  <span><strong>Specialization:</strong> {member.specialization}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span><strong>Experience:</strong> {member.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span><strong>Publications:</strong> {member.publications}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-blue-600">{member.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Research Focus:</strong> {member.research}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    View Profile
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderTechnology = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technologies.map((tech, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Key Benefits:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {tech.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderResearch = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchAreas.map((area, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">{area.title}</h3>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white">
                  <Search className="w-5 h-5" />
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{area.description}</p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">{area.projects}</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-green-600">{area.funding}</div>
                  <div className="text-xs text-gray-600">Funding</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">{area.publications}</div>
                  <div className="text-xs text-gray-600">Publications</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderTraining = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trainingPrograms.map((program, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{program.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      program.level === 'Beginner' 
                        ? 'bg-green-100 text-green-700'
                        : program.level === 'Intermediate'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {program.level}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Modules:</h4>
                <div className="flex flex-wrap gap-2">
                  {program.modules.map((module, moduleIndex) => (
                    <span key={moduleIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {module}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-medium">
                  {program.certification}
                </span>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Enroll Now
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🏥' },
    { id: 'services', label: 'Services', icon: '🦴' },
    { id: 'faculty', label: 'Faculty', icon: '👨‍⚕️' },
    { id: 'technology', label: 'Technology', icon: '🔬' },
    { id: 'research', label: 'Research', icon: '🔍' },
    { id: 'training', label: 'Training', icon: '📚' }
  ]

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview()
      case 'services': return renderServices()
      case 'faculty': return renderFaculty()
      case 'technology': return renderTechnology()
      case 'research': return renderResearch()
      case 'training': return renderTraining()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div style={{backgroundColor: '#E7EEE7'}}>
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Bone className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{departmentInfo.name}</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700">Advanced Orthopaedic Care & Surgical Excellence</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md">
        <div className="responsive-container-full">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center flex-shrink-0 gap-2 px-4 py-4 border-b-2 transition-all duration-300 whitespace-nowrap rounded-t-xl min-w-[80px] md:min-w-[120px] ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg flex-shrink-0">{tab.icon}</span>
                <span className="font-medium hidden md:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Excellence in Orthopaedic Care?</h2>
          <p className="text-xl mb-8 opacity-90">Schedule a consultation with our expert team today</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Appointment
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
