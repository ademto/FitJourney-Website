import { 
  User,        // For Personalized Plans
  UserCheck,   // For Expert Advice
  Users,       // For Community Support
  Play,        // For Real-Time Preview
  Share,       // For Collaboration Tools
  BarChart,    // For Analytics Dashboard
} from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Fitness Fusion",
    image: user1,
    text: "The personalized workout plans transformed my fitness journey. The expert guidance and support helped me achieve my goals faster than I imagined.",
  },
  {
    user: "Jane Smith",
    company: "Healthy Horizons",
    image: user2,
    text: "I’m thrilled with my progress! The workout routines and nutrition tips were spot-on, and the community support kept me motivated every step of the way.",
  },
  {
    user: "David Johnson",
    company: "Active Innovations",
    image: user3,
    text: "The fitness programs offered exceeded my expectations. Their detailed progress tracking and real-time feedback made it easy to stay on track and see results.",
  },
  {
    user: "Ronee Brown",
    company: "Dynamic Wellness",
    image: user4,
    text: "Joining this fitness program was a game-changer. The flexibility in planning and collaborative tools made reaching my fitness goals enjoyable and effective.",
  },
  {
    user: "Michael Wilson",
    company: "Peak Performance",
    image: user5,
    text: "The level of professional advice and personalized support was exceptional. My fitness routine is now more effective, and I’m seeing results I didn’t think possible.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Fitness",
    image: user6,
    text: "The dedication of the fitness experts and the detailed analytics provided were beyond my expectations. I’m excited to continue this journey with their support.",
  },
];



export const features = [
  {
    icon: <User />,
    text: "Personalized Plans",
    description:
      "Customized workout and nutrition plans designed to fit your individual fitness goals and needs.",
  },
  {
    icon: <UserCheck />,
    text: "Expert Advice",
    description:
      "Access professional fitness tips and guidance to optimize your workouts and diet.",
  },
  {
    icon: <Users />,
    text: "Community Support",
    description:
      "Join a fitness community for motivation, workout challenges, and sharing progress with others.",
  },
  {
    icon: <Play />,
    text: "Real-Time Preview",
    description:
      "View your workout performance and progress in real-time to make immediate adjustments.",
  },
  {
    icon: <Share />,
    text: "Collaboration Tools",
    description:
      "Work with trainers or friends on fitness goals and track progress together in real-time.",
  },
  {
    icon: <BarChart />,
    text: "Analytics Dashboard",
    description:
      "Track and analyze your workout metrics and progress with detailed fitness reports and insights.",
  },
];



export const checklistItems = [
  {
    title: "Personalized Workout Plans",
    description:
      "Receive custom workout plans tailored to your fitness goals and preferences.",
  },
  {
    title: "Expert Fitness Advice",
    description:
      "Access professional guidance and tips to enhance your workout routines and nutrition.",
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your fitness journey with detailed analytics and performance insights.",
  },
  {
    title: "Community Support",
    description:
      "Join a supportive community to share your achievements and stay motivated.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Easily adjust your workout and meal plans to fit your busy lifestyle.",
  },
  {
    title: "Interactive Workouts",
    description:
      "Engage in live and on-demand workout sessions to keep your routine exciting.",
  },
];


export const pricingOptions = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Access to beginner workout plans",
      "5 Workout videos",
      "Basic fitness tracking",
      "Community forums access",
    ],
  },
  {
    title: "Standard",
    price: "$10",
    features: [
      "Access to intermediate workout plans",
      "10 Workout videos",
      "Advanced fitness tracking",
      "Personalized nutrition tips",
      "Priority support",
    ],
  },
  {
    title: "Premium",
    price: "$30",
    features: [
      "Access to all workout plans",
      "Unlimited workout videos",
      "Comprehensive fitness analytics",
      "Personalized coaching",
      "One-on-one fitness consultations",
    ],
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started with Fitness" },
  { href: "#", text: "Workout Plans" },
  { href: "#", text: "Nutrition Guides" },
  { href: "#", text: "Exercise Techniques" },
  { href: "#", text: "Fitness FAQs" },
];

export const platformLinks = [
  { href: "#", text: "Workout Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "App Requirements" },
  { href: "#", text: "Download Workouts" },
  { href: "#", text: "Updates and Releases" },
];

export const communityLinks = [
  { href: "#", text: "Fitness Events" },
  { href: "#", text: "Local Meetups" },
  { href: "#", text: "Fitness Conferences" },
  { href: "#", text: "Workout Challenges" },
  { href: "#", text: "Job Opportunities" },
];
