import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Star, Zap, BookOpen, Users, Target, TrendingUp, Rocket } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isAdult: string;
  experience: string;
  instagram: string;
  readyToStart: string;
  whyJoin: string;
  capital: string;
};

const QuestionnairePage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isAdult: '',
    experience: '',
    instagram: '',
    readyToStart: '',
    whyJoin: '',
    capital: '',
  });
  const [showOffers, setShowOffers] = useState(false);

  const validateStep = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim() !== '' && 
               formData.lastName.trim() !== '' && 
               formData.email.trim() !== '' &&
               /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
               formData.phone.trim() !== '' &&
               formData.isAdult !== '';
      case 2:
        return formData.experience !== '' && formData.instagram.trim() !== '';
      case 3:
        return formData.readyToStart !== '' && formData.whyJoin.trim() !== '';
      case 4:
        return formData.capital !== '';
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      setShowOffers(true);
    }
  };

  const selectClass = "w-full px-4 py-2 rounded-lg bg-blue-900/20 border border-blue-500/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white [&>option]:bg-blue-900 [&>option]:text-white";
  const inputClass = "w-full px-4 py-2 rounded-lg bg-blue-900/20 border border-blue-500/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">First Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your first name"
                className={inputClass}
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your last name"
                className={inputClass}
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                className={inputClass}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="DE"
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value || '' })}
                placeholder="Enter phone number"
                className="[&_.PhoneInputInput]:bg-blue-900/20 [&_.PhoneInputInput]:border [&_.PhoneInputInput]:border-blue-500/50 [&_.PhoneInputInput]:rounded-lg [&_.PhoneInputInput]:px-4 [&_.PhoneInputInput]:py-2 [&_.PhoneInputInput]:text-white [&_.PhoneInputInput]:w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Age Verification *</label>
              <select
                required
                className={selectClass}
                value={formData.isAdult}
                onChange={(e) => setFormData({ ...formData, isAdult: e.target.value })}
              >
                <option value="">Select your age range</option>
                <option value="under18">Under 18 years old</option>
                <option value="over18">18 years or older</option>
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Business Experience *</label>
              <select
                required
                className={selectClass}
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              >
                <option value="">Select your experience level</option>
                <option value="none">No experience</option>
                <option value="started">Already started a business</option>
                <option value="experienced">Experienced entrepreneur</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Instagram Handle *</label>
              <input
                type="text"
                required
                placeholder="@yourusername"
                className={inputClass}
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Are you ready to start with PBM right away? *</label>
              <select
                required
                className={selectClass}
                value={formData.readyToStart}
                onChange={(e) => setFormData({ ...formData, readyToStart: e.target.value })}
              >
                <option value="">Select your answer</option>
                <option value="yes">Yes, I'm ready to start now</option>
                <option value="no">No, I need more time</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Why do you want to join PBM? *</label>
              <textarea
                required
                placeholder="Share your motivation and goals..."
                className={inputClass}
                rows={4}
                value={formData.whyJoin}
                onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
              ></textarea>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">How much capital do you have to invest in the program? *</label>
              <select
                required
                className={selectClass}
                value={formData.capital}
                onChange={(e) => setFormData({ ...formData, capital: e.target.value })}
              >
                <option value="">Select your investment range</option>
                <option value="20-100">€20 - €100</option>
                <option value="100-500">€100 - €500</option>
                <option value="500-1000">€500 - €1000</option>
              </select>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (showOffers) {
    return (
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-pulse">
              Special One-Time Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Congratulations! You've Been Selected
            </h2>
            <p className="text-gray-300">
              Based on your answers, you're a perfect fit for our exclusive VIP program.
              Join now and get instant access to our complete system.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20 blur-3xl" />
            <div className="relative bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                7 Spots Left
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    <h3 className="text-xl md:text-2xl font-bold">Complete Personal Brand System</h3>
                  </div>
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                    Your Journey to <span className="text-blue-400">5-Figure Months</span> Starts Here
                  </h4>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                      <h5 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                        Step-by-Step Course Curriculum
                      </h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Module 1: Personal Brand Foundation & Positioning
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Module 2: Content Creation & Viral Growth Strategy
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Module 3: Audience Building & Engagement
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          Module 4: Monetization & Business Systems
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Instant Access to All Materials</p>
                          <p className="text-sm text-gray-400">Start building your brand within minutes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Proven Content Templates</p>
                          <p className="text-sm text-gray-400">Copy our viral post formulas</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Private Community Access</p>
                          <p className="text-sm text-gray-400">Network with successful members</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Growth Analytics Dashboard</p>
                          <p className="text-sm text-gray-400">Track your progress & optimize</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Rocket className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Weekly Live Q&A Sessions</p>
                          <p className="text-sm text-gray-400">Get your questions answered</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-gray-400 line-through text-lg">Regular Price: €97/month</p>
                        <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">Save 79%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-3xl md:text-4xl font-bold">€19.99</p>
                        <span className="text-gray-400">/month</span>
                      </div>
                      <p className="text-yellow-500 text-sm font-semibold mt-1 animate-pulse">
                        ⚡ Limited Time Offer - Only 7 Spots Left
                      </p>
                    </div>
                    
                    <button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 text-center group font-bold text-lg shadow-lg hover:shadow-blue-500/50"
                      onClick={() => alert('Thank you for your interest! This is a demo version.')}
                    >
                      Start Your Journey To Freedom
                      <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src="https://i.ibb.co/0M6M7Bj/Kian.jpg"
                      alt="VIP Success Story"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <p className="text-yellow-400 font-semibold text-sm">VIP Success Story</p>
                    </div>
                    <p className="text-sm text-gray-300">
                      "I was skeptical at first, but within just 2 months of joining PBM, I built a community of 100k+ followers and now make €6,000/month. The step-by-step system made it easy to follow and implement."
                    </p>
                    <p className="text-blue-400 font-semibold mt-2">- Kian, PBM VIP Member</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30">
                    <h5 className="font-semibold mb-2 text-green-400">What You'll Achieve:</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Build a loyal following of 10,000+ in 60 days
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Create viral content that reaches millions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Generate your first €1,000 online
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Scale to €5,000+ monthly recurring revenue
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-gradient-to-br from-blue-900/40 to-black p-8 rounded-xl">
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i <= step ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <form onSubmit={handleSubmit}>
            {renderStep()}
            
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Back
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!validateStep(step)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full ml-auto flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!validateStep(step)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full ml-auto flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;