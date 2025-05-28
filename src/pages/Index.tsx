import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  BarChart3, 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Building,
  DollarSign,
  ExternalLink
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [surveyData, setSurveyData] = useState({
    name: "",
    company: "",
    email: "",
    investmentSize: "",
    timeline: "",
    interests: "",
    feedback: ""
  });

  const handleSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Survey Submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    
    // Reset form
    setSurveyData({
      name: "",
      company: "",
      email: "",
      investmentSize: "",
      timeline: "",
      interests: "",
      feedback: ""
    });
  };

  const handleGoogleFormClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfCmLxgQopCFeLyocBAJc7V03NOc7WG5C9ySdyGrj0ptN6wdw/viewform', '_blank');
  };

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and comprehensive reporting that drives data-driven decisions"
    },
    {
      icon: Target,
      title: "Precision Tracking",
      description: "Accurate monitoring of key metrics with customizable dashboards and alerts"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless workflow management with role-based access and team synchronization"
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "AI-powered recommendations to maximize performance and ROI"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and advanced encryption"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times and 99.9% uptime"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "50M+", label: "Data Points Tracked" },
    { number: "85%", label: "Efficiency Increase" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Series A Funding Opportunity</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              The Future of
              <span className="block">Data Tracking</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Trackith revolutionizes how enterprises monitor, analyze, and optimize their operations with AI-powered insights and real-time analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
                View Investment Deck
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
                onClick={handleGoogleFormClick}
              >
                Take Investor Survey
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features That Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for enterprise-grade performance with the flexibility to adapt to any industry or use case.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  $2.8T Market Opportunity
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  The global data analytics market is experiencing unprecedented growth. Trackith is positioned to capture significant market share in the enterprise segment.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg text-gray-700">40% YoY revenue growth</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg text-gray-700">98% customer retention rate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg text-gray-700">Fortune 500 client base</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">ARR Growth</span>
                    <span className="text-2xl font-bold text-blue-600">+150%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Market Share</span>
                    <span className="text-2xl font-bold text-purple-600">12%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Customer LTV</span>
                    <span className="text-2xl font-bold text-indigo-600">$2.4M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Investor Survey Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Partner With Trackith
              </h2>
              <p className="text-xl text-gray-600">
                Join leading investors in shaping the future of enterprise analytics. Share your investment interests with us.
              </p>
            </div>
            
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <DollarSign className="w-6 h-6 mr-3" />
                  Investment Interest Survey
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Complete our detailed investment survey to help us understand your criteria and timeline
                </CardDescription>
              </CardHeader>
              <CardContent className="p-12 text-center">
                <div className="space-y-6">
                  <div className="text-lg text-gray-600 leading-relaxed">
                    Our comprehensive survey covers investment size, timeline, sector preferences, and specific areas of interest. 
                    This helps us provide you with the most relevant information about Trackith's investment opportunity.
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-12 py-6 text-xl"
                    onClick={handleGoogleFormClick}
                  >
                    Complete Investment Survey
                    <ExternalLink className="ml-3 w-6 h-6" />
                  </Button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    Survey takes approximately 3-5 minutes to complete
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform the Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join us in revolutionizing enterprise data analytics. Let's build the next generation of business intelligence together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
              <Building className="w-5 h-5 mr-2" />
              Download Pitch Deck
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
              Schedule Due Diligence Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
