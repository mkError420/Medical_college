"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function TeachersLoungePage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [selectedActivity, setSelectedActivity] = useState<any>(null)

  const sections = [
    { id: 'overview', label: 'Overview', icon: '🏛️', color: 'from-amber-500 to-orange-600' },
    { id: 'facilities', label: 'Facilities', icon: '🛋️', color: 'from-teal-500 to-cyan-600' },
    { id: 'activities', label: 'Activities', icon: '🎯', color: 'from-rose-500 to-pink-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-emerald-500 to-green-600' },
    { id: 'community', label: 'Community', icon: '👥', color: 'from-violet-500 to-purple-600' },
    { id: 'resources', label: 'Resources', icon: '📚', color: 'from-blue-500 to-indigo-600' }
  ]

  const facilities = [
    {
      name: "Main Lounge Area",
      description: "Spacious open-plan lounge with comfortable seating",
      capacity: 50,
      features: ["Comfortable sofas", "Coffee bar", "Reading nooks", "Natural lighting"],
      hours: "24/7 access",
      atmosphere: "Relaxed and professional"
    },
    {
      name: "Quiet Study Zone",
      description: "Dedicated silent area for focused work",
      capacity: 20,
      features: ["Individual desks", "Soundproofing", "Task lighting", "Power outlets"],
      hours: "6:00 AM - 10:00 PM",
      atmosphere: "Quiet and productive"
    },
    {
      name: "Collaboration Hub",
      description: "Interactive space for group discussions",
      capacity: 15,
      features: ["Whiteboard walls", "Projector", "Flexible seating", "Video conferencing"],
      hours: "8:00 AM - 8:00 PM",
      atmosphere: "Dynamic and engaging"
    },
    {
      name: "Wellness Corner",
      description: "Relaxation and stress-relief area",
      capacity: 10,
      features: ["Massage chairs", "Meditation space", "Aromatherapy", "Calming music"],
      hours: "24/7 access",
      atmosphere: "Peaceful and rejuvenating"
    },
    {
      name: "Tech Station",
      description: "Modern technology and multimedia center",
      capacity: 12,
      features: ["High-speed computers", "Printing services", "Scanning", "Video editing"],
      hours: "7:00 AM - 9:00 PM",
      atmosphere: "Modern and efficient"
    },
    {
      name: "Outdoor Terrace",
      description: "Fresh air space with garden views",
      capacity: 25,
      features: ["Outdoor seating", "Garden views", "Shade coverage", "WiFi access"],
      hours: "6:00 AM - 8:00 PM",
      atmosphere: "Fresh and inspiring"
    }
  ]

  const activities = [
    {
      title: "Morning Coffee Sessions",
      time: "7:30 AM - 8:30 AM",
      days: "Monday - Friday",
      type: "social",
      description: "Informal gatherings over coffee to start the day",
      participants: "All faculty members",
      benefits: ["Networking", "Stress relief", "Community building", "Information sharing"]
    },
    {
      title: "Professional Development Workshops",
      time: "3:00 PM - 5:00 PM",
      days: "Tuesdays",
      type: "educational",
      description: "Skill enhancement and knowledge sharing sessions",
      participants: "Interested faculty",
      benefits: ["Skill development", "Career growth", "Innovation", "Best practices"]
    },
    {
      title: "Wellness Wednesday",
      time: "12:00 PM - 1:00 PM",
      days: "Wednesdays",
      type: "wellness",
      description: "Health and wellness activities",
      participants: "All faculty members",
      benefits: ["Stress management", "Physical health", "Mental well-being", "Work-life balance"]
    },
    {
      title: "Research Roundtable",
      time: "2:00 PM - 4:00 PM",
      days: "Thursdays",
      type: "academic",
      description: "Collaborative research discussions and feedback",
      participants: "Research-active faculty",
      benefits: ["Research collaboration", "Peer feedback", "Publication support", "Grant opportunities"]
    },
    {
      title: "Social Friday",
      time: "4:00 PM - 6:00 PM",
      days: "Fridays",
      type: "social",
      description: "Relaxed social gathering to end the week",
      participants: "All faculty members",
      benefits: ["Team building", "Social connection", "Relaxation", "Celebration"]
    },
    {
      title: "Weekend Brunch",
      time: "10:00 AM - 12:00 PM",
      days: "Saturdays",
      type: "social",
      description: "Casual weekend gathering with refreshments",
      participants: "Faculty and families",
      benefits: ["Family inclusion", "Community building", "Relaxed atmosphere", "Networking"]
    }
  ]

  const schedule = [
    {
      day: "Monday",
      date: "2025-02-17",
      events: [
        { time: "7:30 AM", title: "Morning Coffee", type: "social", location: "Main Lounge" },
        { time: "12:00 PM", title: "Lunch Break", type: "meal", location: "Dining Area" },
        { time: "3:00 PM", title: "Department Meeting", type: "meeting", location: "Conference Room" },
        { time: "5:00 PM", title: "Office Hours", type: "work", location: "Individual Offices" }
      ]
    },
    {
      day: "Tuesday",
      date: "2025-02-18",
      events: [
        { time: "7:30 AM", title: "Morning Coffee", type: "social", location: "Main Lounge" },
        { time: "12:00 PM", title: "Lunch Break", type: "meal", location: "Dining Area" },
        { time: "3:00 PM", title: "Professional Development", type: "workshop", location: "Collaboration Hub" },
        { time: "5:00 PM", title: "Research Time", type: "academic", location: "Quiet Study Zone" }
      ]
    },
    {
      day: "Wednesday",
      date: "2025-02-19",
      events: [
        { time: "7:30 AM", title: "Morning Coffee", type: "social", location: "Main Lounge" },
        { time: "12:00 PM", title: "Wellness Wednesday", type: "wellness", location: "Wellness Corner" },
        { time: "2:00 PM", title: "Student Consultations", type: "work", location: "Individual Offices" },
        { time: "4:00 PM", title: "Faculty Meeting", type: "meeting", location: "Conference Room" }
      ]
    },
    {
      day: "Thursday",
      date: "2025-02-20",
      events: [
        { time: "7:30 AM", title: "Morning Coffee", type: "social", location: "Main Lounge" },
        { time: "12:00 PM", title: "Lunch Break", type: "meal", location: "Dining Area" },
        { time: "2:00 PM", title: "Research Roundtable", type: "academic", location: "Collaboration Hub" },
        { time: "5:00 PM", title: "Office Hours", type: "work", location: "Individual Offices" }
      ]
    },
    {
      day: "Friday",
      date: "2025-02-21",
      events: [
        { time: "7:30 AM", title: "Morning Coffee", type: "social", location: "Main Lounge" },
        { time: "12:00 PM", title: "Lunch Break", type: "meal", location: "Dining Area" },
        { time: "3:00 PM", title: "Department Review", type: "meeting", location: "Conference Room" },
        { time: "4:00 PM", title: "Social Friday", type: "social", location: "Main Lounge" }
      ]
    }
  ]

  const community = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lounge Coordinator",
      department: "Medicine",
      experience: "8 years",
      interests: ["Mentoring", "Research collaboration", "Wellness programs"],
      quote: "The lounge is our second home - a place where ideas flow and friendships grow",
      contribution: "Organizes weekly activities and wellness programs"
    },
    {
      name: "Dr. Michael Chen",
      role: "Tech Support Lead",
      department: "Surgery",
      experience: "6 years",
      interests: ["Educational technology", "Innovation", "Digital resources"],
      quote: "Technology should enhance, not replace, human connection",
      contribution: "Manages tech station and digital resources"
    },
    {
      name: "Dr. Lisa Anderson",
      role: "Social Activities Director",
      department: "Pediatrics",
      experience: "5 years",
      interests: ["Community building", "Event planning", "Faculty engagement"],
      quote: "Great teaching happens when great teachers support each other",
      contribution: "Plans social events and community activities"
    },
    {
      name: "Dr. Robert Wilson",
      role: "Wellness Champion",
      department: "Psychiatry",
      experience: "10 years",
      interests: ["Mental health", "Work-life balance", "Stress management"],
      quote: "Taking care of ourselves enables us to better care for others",
      contribution: "Leads wellness programs and stress-relief activities"
    },
    {
      name: "Dr. Emily Taylor",
      role: "Research Facilitator",
      department: "Pathology",
      experience: "7 years",
      interests: ["Academic research", "Publication support", "Grant writing"],
      quote: "Collaboration multiplies the impact of individual research",
      contribution: "Facilitates research discussions and collaborations"
    },
    {
      name: "Dr. David Thompson",
      role: "Resource Manager",
      department: "Radiology",
      experience: "4 years",
      interests: ["Resource optimization", "Facility management", "User experience"],
      quote: "A well-organized space creates a well-organized mind",
      contribution: "Manages lounge resources and facility scheduling"
    }
  ]

  const resources = [
    {
      category: "Comfort & Convenience",
      items: [
        { name: "Premium Coffee Service", availability: "24/7", description: "Fresh coffee, tea, and light refreshments" },
        { name: "Comfortable Seating", availability: "Always", description: "Ergonomic chairs and sofas for relaxation" },
        { name: "Climate Control", availability: "24/7", description: "Optimal temperature and air quality" },
        { name: "High-Speed WiFi", availability: "24/7", description: "Reliable internet for work and leisure" }
      ]
    },
    {
      category: "Work & Study",
      items: [
        { name: "Quiet Study Areas", availability: "24/7", description: "Soundproof spaces for focused work" },
        { name: "Collaboration Spaces", availability: "Scheduled", description: "Flexible areas for group discussions" },
        { name: "Tech Equipment", availability: "Business hours", description: "Computers, printers, and office supplies" },
        { name: "Meeting Rooms", availability: "By reservation", description: "Private spaces for meetings and discussions" }
      ]
    },
    {
      category: "Wellness & Recreation",
      items: [
        { name: "Wellness Programs", availability: "Weekly", description: "Stress management and health activities" },
        { name: "Recreation Area", availability: "24/7", description: "Games, books, and relaxation activities" },
        { name: "Outdoor Space", availability: "Daylight hours", description: "Fresh air area with garden views" },
        { name: "Fitness Corner", availability: "24/7", description: "Basic exercise equipment and yoga mats" }
      ]
    },
    {
      category: "Professional Development",
      items: [
        { name: "Skill Workshops", availability: "Weekly", description: "Professional development and training sessions" },
        { name: "Mentoring Programs", availability: "Ongoing", description: "Faculty-to-faculty mentoring opportunities" },
        { name: "Research Support", availability: "Scheduled", description: "Resources for research collaboration" },
        { name: "Career Counseling", availability: "By appointment", description: "Career guidance and advancement support" }
      ]
    }
  ]

  const renderOverview = () => (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 p-12 mb-12 shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center shadow-xl">
              <Users className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Teachers Lounge</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A sanctuary for faculty to relax, collaborate, and recharge in a supportive community environment
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full text-lg font-semibold">
              <Coffee className="inline w-5 h-5 mr-2" />
              Relax & Recharge
            </div>
            <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full text-lg font-semibold">
              <Lightbulb className="inline w-5 h-5 mr-2" />
              Collaborate & Create
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Coffee className="w-6 h-6 text-amber-600" />
            </div>
            <div className="text-2xl font-bold text-amber-600">24/7</div>
          </div>
          <div className="text-gray-800 font-semibold">Access</div>
          <div className="text-sm text-gray-600">Round-the-clock availability</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-teal-600" />
            </div>
            <div className="text-2xl font-bold text-teal-600">150+</div>
          </div>
          <div className="text-gray-800 font-semibold">Faculty</div>
          <div className="text-sm text-gray-600">Active members</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-rose-600" />
            </div>
            <div className="text-2xl font-bold text-rose-600">6</div>
          </div>
          <div className="text-gray-800 font-semibold">Zones</div>
          <div className="text-sm text-gray-600">Specialized areas</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold text-emerald-600">98%</div>
          </div>
          <div className="text-gray-800 font-semibold">Satisfaction</div>
          <div className="text-sm text-gray-600">Faculty approval rate</div>
        </div>
      </div>

      {/* Featured Activities */}
      <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Star className="w-8 h-8 mr-3 text-amber-500" />
          Featured Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.slice(0, 3).map((activity, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">{activity.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activity.type === 'social' ? 'bg-rose-100 text-rose-700' :
                  activity.type === 'educational' ? 'bg-blue-100 text-blue-700' :
                  activity.type === 'wellness' ? 'bg-emerald-100 text-emerald-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {activity.type}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {activity.time}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {activity.days}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Highlight */}
      <div className="bg-white rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <Heart className="w-8 h-8 mr-3 text-rose-500" />
          Community Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {community.slice(0, 3).map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-teal-600 font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic mb-3">"{member.quote}"</p>
              <p className="text-gray-700 text-sm">{member.contribution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderFacilities = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Lounge Facilities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 flex items-center justify-center">
                <Building className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.name}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Capacity:</span>
                    <span className="text-teal-600 font-bold">{facility.capacity} persons</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Hours:</span>
                    <span className="text-blue-600 font-medium">{facility.hours}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Atmosphere:</span>
                    <span className="text-purple-600 font-medium">{facility.atmosphere}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                  Reserve Space
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  )

  const renderActivities = () => (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Activities & Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activity.type === 'social' ? 'bg-rose-100 text-rose-700' :
                    activity.type === 'educational' ? 'bg-blue-100 text-blue-700' :
                    activity.type === 'wellness' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {activity.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{activity.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-rose-500" />
                    <div>
                      <div className="text-sm text-gray-600">Time</div>
                      <div className="font-semibold">{activity.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-rose-500" />
                    <div>
                      <div className="text-sm text-gray-600">Days</div>
                      <div className="font-semibold">{activity.days}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Participants:</h4>
                  <p className="text-gray-600">{activity.participants}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {activity.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedActivity(activity)}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300"
                >
                  Join Activity
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  )

  const renderSchedule = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Weekly Schedule</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {schedule.map((day, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4">
                <h3 className="text-xl font-bold">{day.day}</h3>
                <p className="text-sm opacity-90">{day.date}</p>
              </div>
              <div className="p-4 space-y-3">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="border-l-4 border-emerald-500 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">{event.time}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        event.type === 'social' ? 'bg-rose-100 text-rose-700' :
                        event.type === 'meal' ? 'bg-orange-100 text-orange-700' :
                        event.type === 'meeting' ? 'bg-blue-100 text-blue-700' :
                        event.type === 'work' ? 'bg-purple-100 text-purple-700' :
                        event.type === 'workshop' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="font-medium text-gray-700">{event.title}</div>
                    <div className="text-sm text-gray-500">{event.location}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderCommunity = () => (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Community Leaders</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {community.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-violet-600 font-medium">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.department}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <blockquote className="border-l-4 border-violet-400 pl-4 italic text-gray-600">
                    "{member.quote}"
                  </blockquote>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Experience</div>
                    <div className="font-semibold text-gray-800">{member.experience} years</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Department</div>
                    <div className="font-semibold text-gray-800">{member.department}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Interests:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.interests.map((interest, interestIndex) => (
                      <span key={interestIndex} className="px-2 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Contribution:</h4>
                  <p className="text-gray-600">{member.contribution}</p>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-violet-600 text-white py-2 rounded-xl font-semibold hover:bg-violet-700 transition-all duration-300">
                    Connect
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )

  const renderResources = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Resources & Amenities</h1>
        
        <div className="space-y-8">
          {resources.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mr-3">
                  {index === 0 && <Coffee className="w-4 h-4" />}
                  {index === 1 && <BookOpen className="w-4 h-4" />}
                  {index === 2 && <Heart className="w-4 h-4" />}
                  {index === 3 && <Award className="w-4 h-4" />}
                </div>
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.availability === '24/7' ? 'bg-emerald-100 text-emerald-700' :
                        item.availability === 'Always' ? 'bg-blue-100 text-blue-700' :
                        item.availability === 'Weekly' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {item.availability}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch(activeSection) {
      case 'overview': return renderOverview()
      case 'facilities': return renderFacilities()
      case 'activities': return renderActivities()
      case 'schedule': return renderSchedule()
      case 'community': return renderCommunity()
      case 'resources': return renderResources()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen">
      {/* Unique Navigation - Different Style */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-center items-center py-4">
            <div className="flex gap-2 bg-gray-100 rounded-full p-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r ' + section.color + ' text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      {renderContent()}
    </div>
  )
}
