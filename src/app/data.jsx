import { FaCut } from "react-icons/fa";
import { GiBeard } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";

export const Services = [
  {
    "title": "Haircuts",
    "icon": <FaCut/>,
    "description": "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    "features": [
      "Classic Cuts",
      "Modern Styles"
    ]
  },
  {
    "title": "Beard Services",
    "icon": <GiBeard/>,  
    "description": "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    "features": [
      "Beard Trims",
      "Beard Shaping"
    ]
  },
  {
    "title": "Premium Services",
    "icon": <FaCrown/>,  
    "description": "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    "features": [
      "Hair Coloring",
      "Scalp Treatments"
    ]
  }
]

export const Testimonials = [
  {
    "name": "Mike Johnson",
    "review": "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming."
  },
  {
    "name": "David Martinez",
    "review": "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!"
  },
  {
    "name": "Chris Taylor",
    "review": "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better."
  }
]

import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

export  const Info = [
    {name:"Address", content:'500 N Bell Ave #109, Denton, TX 76209, United States', icon:<IoLocationOutline/>},
    {name:"Status", content:'Open 8 am ⋅ Closes 7 pm', icon:<FiClock/>},
    {name:"Phone", content:'+1 940-612-9127', icon:<FiPhone/>},
  ]
