import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  HomeIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  StarIcon,
  UserGroupIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  UsersIcon,
  UserIcon,
  SparklesIcon,
  LockClosedIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  TrophyIcon,
  ArrowRightIcon,
  UserPlusIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: '24/7 Live In Maid Services | EzyHelpers',
  description: 'Live-in maid services with 24/7 support. Trained and Background verified professionals for complete home care. Quick placement in 24-72 hours guaranteed.',
  keywords: 'live in maid, 24/7 maid service, live-in domestic help, round the clock maid, residential maid services',
}

export default function LiveInMaidsPage() {
  const services = [
    {
      title: "Housekeeping & Deep Cleaning",
      description: "Regular sweeping, mopping, dusting, and deep cleaning services. Laundry and ironing handled with care.",
      icon: HomeIcon
    },
    {
      title: "Cooking and Meal Preparation", 
      description: "Nutritious meals tailored to dietary preferences, including grocery shopping and meal planning.",
      icon: HeartIcon
    },
    {
      title: "Child Care Assistance",
      description: "Engaging activities, homework help, school pickup/drop-off, and extracurricular coordination.",
      icon: ShieldCheckIcon
    },
    {
      title: "Elderly Care Support",
      description: "Companionship, personal care assistance, medication management, and doctor visit coordination.",
      icon: ClockIcon
    }
  ]

  const benefits = [
    "24/7 household assistance",
    "Complete home care and supervision", 
    "All-in-one domestic assistance",
            "Quick placement within 24-72 hours",
    "Trusted and verified professionals",
    "One reliable person for everything"
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div className="text-center lg:text-left">
                {/* Trust Badge */}
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <StarIcon className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-semibold">Trusted by 10,000+ Families</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  24×7 Support at Home
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">
                    Hire Verified Live-In Maids
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Experience peace of mind with our trusted live-in maids who provide consistent, 24/7 household support tailored to your family's unique needs.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Background Verified
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ 24-72 Hour Placement
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ All-in-One Support
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Live-In Maid Now</span>
                      <span className="sm:hidden">Book Maid</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call Now</span>
                    <span className="sm:hidden">Call</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-primary-200 text-sm">Happy Families</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-primary-200 text-sm">Support Available</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">5★</div>
                    <div className="text-primary-200 text-sm">Average Rating</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <HomeIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-blue-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-blue-100">House Cleaning</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-600 hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-red-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-red-100">Meal Preparation</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-green-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-green-100">Child Care</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-violet-600 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-purple-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-purple-100">Elderly Care</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 rounded-full p-3 shadow-lg">
                    <ClockIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg">
                    <CheckCircleIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose EzyHelpers' Live-in Maid Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience trusted, 24/7 home assistance with verified live-in maids tailored to your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-success-600 mt-1 shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Services Offered By Our Live-in Maids
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of 24 hrs maid services designed to meet your specific needs and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Who Benefits Most from a Live-In Maid?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Live-in maids are the ideal solution for households that need dependable, all-day support with minimal hassle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Working Professionals",
                description: "Perfect for those who leave early, return late, or travel for work",
                icon: BriefcaseIcon,
                gradient: "from-blue-500 to-indigo-600",
                bgColor: "bg-blue-50",
                iconColor: "text-blue-600",
                shadowColor: "shadow-blue-500/25"
              },
              {
                title: "Dual-Income Families", 
                description: "Reliable support for both partners working full-time",
                icon: UsersIcon,
                gradient: "from-emerald-500 to-teal-600",
                bgColor: "bg-emerald-50",
                iconColor: "text-emerald-600",
                shadowColor: "shadow-emerald-500/25"
              },
              {
                title: "Parents with Young Children",
                description: "Consistent childcare including feeding, bathing, and school prep",
                icon: AcademicCapIcon,
                gradient: "from-pink-500 to-rose-600",
                bgColor: "bg-pink-50",
                iconColor: "text-pink-600",
                shadowColor: "shadow-pink-500/25"
              },
              {
                title: "Homes with Elderly Members",
                description: "Daily assistance, medication reminders, and companionship",
                icon: UserIcon,
                gradient: "from-amber-500 to-orange-600",
                bgColor: "bg-amber-50",
                iconColor: "text-amber-600",
                shadowColor: "shadow-amber-500/25"
              },
              {
                title: "Busy Individuals",
                description: "Takes over all routine tasks from cleaning to grocery runs",
                icon: SparklesIcon,
                gradient: "from-purple-500 to-violet-600",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
                shadowColor: "shadow-purple-500/25"
              },
              {
                title: "Security & Consistency",
                description: "Round-the-clock help with household stability and privacy",
                icon: LockClosedIcon,
                gradient: "from-slate-500 to-gray-600",
                bgColor: "bg-slate-50",
                iconColor: "text-slate-600",
                shadowColor: "shadow-slate-500/25"
              }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div 
                  key={index} 
                  className={`group relative ${item.bgColor} rounded-xl p-6 border border-transparent hover:border-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}
                  style={{
                    background: `${index === 0 ? 'var(--hover-bg-0)' : 
                                index === 1 ? 'var(--hover-bg-1)' : 
                                index === 2 ? 'var(--hover-bg-2)' : 
                                index === 3 ? 'var(--hover-bg-3)' : 
                                index === 4 ? 'var(--hover-bg-4)' : 'var(--hover-bg-5)'}`
                  }}

                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 ${item.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 transition-all duration-300`}>
                      <IconComponent className={`h-6 w-6 ${item.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 font-display transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <StarIcon className="h-4 w-4 text-white" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Our Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Finding a trustworthy 24-hour maid is easy with our guided, step-by-step process designed for your comfort and peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We discuss your household needs and create a plan that suits your lifestyle"
              },
              {
                step: "2", 
                title: "Matching",
                description: "We select 2–3 verified live-in maids who fit your criteria"
              },
              {
                step: "3",
                title: "Interviews", 
                description: "Meet shortlisted candidates through in-person or online interviews"
              },
              {
                step: "4",
                title: "Onboarding",
                description: "Trial period with ongoing support and regular check-ins"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our live-in maid services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What is a live-in maid service?",
                  answer: "A live-in maid stays in your home 24/7, providing round-the-clock household support including cleaning, cooking, childcare, elderly care, and general home management. They have their own living space within your home and are available whenever needed."
                },
                {
                  question: "What accommodation do live-in maids need?",
                  answer: "Live-in maids need a separate room with basic amenities like a bed, storage space, and access to a bathroom. The accommodation should provide privacy and comfort for the maid while living in your home."
                },
                {
                  question: "What tasks do live-in maids handle?",
                  answer: "Live-in maids handle comprehensive household management including daily cleaning, cooking, laundry, childcare, elderly care, grocery shopping, pet care, and maintaining overall home organization. Their duties can be customized based on your family's needs."
                },
                {
                  question: "How much does a live-in maid cost?",
                  answer: "Live-in maid costs vary based on experience, duties, and location. The package typically includes salary, accommodation, meals, and other benefits. EzyHelpers provides transparent pricing with no hidden costs."
                },
                {
                  question: "Are live-in maids background-verified?",
                  answer: "Yes, all our live-in maids undergo comprehensive background verification including police checks, reference validation, medical checkups, and skill assessments to ensure your family's safety and security."
                },
                {
                  question: "Do live-in maids get time off?",
                  answer: "Yes, live-in maids typically get one day off per week and time for personal activities. The schedule can be discussed and agreed upon during the hiring process to ensure both parties are comfortable."
                },
                {
                  question: "Can live-in maids handle multiple family members?",
                  answer: "Absolutely! Live-in maids are trained to manage households with multiple family members, including children, elderly parents, and extended family. They adapt to your family's routine and preferences."
                },
                {
                  question: "What if the live-in maid doesn't work out?",
                  answer: "We provide a replacement guarantee. If you're not satisfied with the live-in maid's performance or compatibility, we'll arrange a suitable replacement at no additional cost."
                },
                {
                  question: "Do live-in maids cook meals?",
                  answer: "Yes, most live-in maids can prepare meals according to your family's preferences and dietary requirements. They can cook various cuisines and adapt to specific nutritional needs or restrictions."
                },
                {
                  question: "Can live-in maids handle emergencies?",
                  answer: "Live-in maids are trained to handle household emergencies and can provide immediate assistance. However, for medical emergencies, they will contact appropriate emergency services and family members."
                },
                {
                  question: "Is there a trial period for live-in maids?",
                  answer: "Yes, we offer a trial period to ensure compatibility between the maid and your family. This allows both parties to assess the working relationship before making a long-term commitment."
                },
                {
                  question: "Do live-in maids work during festivals and holidays?",
                  answer: "Live-in maids typically work during festivals and holidays but may request time off for their own celebrations. This can be discussed and planned in advance to ensure smooth household management."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Related Services */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23818cf8' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-800 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Complete Home Care Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Explore Our Other Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete your home care needs with our wide range of professional domestic help services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              {
                title: "Full-Time Maid Services",
                description: "Daily household help without live-in commitment",
                href: "/services/full-time-maids",
                icon: BuildingOffice2Icon,
                bgColor: "bg-orange-50",
                iconColor: "text-orange-600",
                borderColor: "border-orange-200"
              },
              {
                title: "Part-Time Maid Services", 
                description: "Flexible cleaning on your schedule without full commitment",
                href: "/services/part-time-maids",
                icon: SparklesIcon,
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
                borderColor: "border-purple-200"
              },
              {
                title: "Cook Services",
                description: "Delicious, hassle-free meals every day from professional cooks",
                href: "/services/cooks",
                icon: UserPlusIcon,
                bgColor: "bg-pink-50",
                iconColor: "text-pink-600",
                borderColor: "border-pink-200"
              }
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link
                  key={index}
                  href={service.href}
                  className={`group relative ${service.bgColor} rounded-2xl p-8 border-2 ${service.borderColor} hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                  </div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${service.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${service.borderColor} group-hover:border-white/20`}>
                      <IconComponent className={`h-8 w-8 ${service.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 font-display transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className={`${service.iconColor} group-hover:text-white font-semibold transition-colors duration-300`}>
                        Learn More About {service.title}
                      </span>
                      <ArrowRightIcon className={`h-5 w-5 ${service.iconColor} group-hover:text-white group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>

                  {index === 1 && (
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-12 shadow-lg">
                      Popular
                    </div>
                  )}
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We have more services available!
            </p>
            <Link
              href="/hire-helper"
              className="inline-flex items-center bg-primary-600 text-white hover:bg-primary-700 font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Services
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  )
} 