import { useState, useEffect } from 'react';

// ==========================================
// Custom SVG Icons (Designed to match the branding)
// ==========================================

const HJLogo = ({ className = "w-12 h-12", style }) => (
  <img
    src="/logo.png"
    alt="HJ Parlour Logo"
    className={className}
    style={style}
  />
);

const HairIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18c0-1.7 1.3-3 3-3h6c1.7 0 3 1.3 3 3v2H6v-2z" />
    <path d="M12 2c-3.3 0-6 2.7-6 6v3c0 2 1.5 3.5 3.5 3.5h5c2 0 3.5-1.5 3.5-3.5V8c0-3.3-2.7-6-6-6z" />
    <path d="M9 8h6M9 11h6" strokeLinecap="round" />
  </svg>
);

const MakeupIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    <path d="M17 11h2l-2 10H7L5 11h2c0 2.2 1.8 4 4 4h2c2.2 0 4-1.8 4-4z" />
    <path d="M12 3v8" strokeLinecap="round" />
  </svg>
);

const SkinIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
    <path d="M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
    <path d="M7 15c1 1.5 2.8 2.5 5 2.5s4-1 5-2.5" />
  </svg>
);

const NailIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.2 2 7 4.2 7 7v10c0 2.8 2.2 5 5 5s5-2.2 5-5V7c0-2.8-2.2-5-5-5zm3 15c0 1.7-1.3 3-3 3s-3-1.3-3-3V9h6v8z" />
    <rect x="10" y="4" width="4" height="3" rx="1" />
  </svg>
);

const WaxingIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12h5v8h10v-8h5L12 2z" />
    <path d="M9 14h6M9 17h6" strokeLinecap="round" />
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// ==========================================
// Service Data Configurations
// ==========================================

const SERVICES_DATA = {
  hair: [
    { id: 'h1', name: 'Luxury Cut & Styling', price: 800, duration: 45, gender: 'unisex', desc: 'Precision cut designed around your facial shape and completed with gold oil blowdry.' },
    { id: 'h2', name: 'Premium Hair Spa', price: 1500, duration: 60, gender: 'unisex', desc: 'Ultra-nourishing organic cream and hot steam therapy to revitalize hair roots.' },
    { id: 'h3', name: 'Global Color / Highlights', price: 3500, duration: 120, gender: 'unisex', desc: 'Hand-painted premium color locks with protective moisture shields.' },
    { id: 'h4', name: 'Keratin Nourish Therapy', price: 4500, duration: 180, gender: 'unisex', desc: 'Deep protein reconstruction to delete frizz and add high gloss reflections.' },
    { id: 'h5', name: 'Beard Outline & Styling', price: 300, duration: 25, gender: 'men', desc: 'Sharp trimmer outlines, warm towel finish, and organic beard oil hydration.' }
  ],
  makeup: [
    { id: 'm1', name: 'Bridal HD Complete', price: 15000, duration: 180, gender: 'women', desc: 'Studio grade HD makeup, custom hair design, saree draping, and setting service.' },
    { id: 'm2', name: 'Celebration Glam', price: 3000, duration: 60, gender: 'women', desc: 'Vibrant party style makeup with full premium lash upgrades and glow mist.' },
    { id: 'm3', name: 'Premium Airbrush Finish', price: 6000, duration: 90, gender: 'women', desc: 'Flawless featherlight airbrush application ideal for cameras and longevity.' },
    { id: 'm4', name: 'Groom Grooming & Prep', price: 2500, duration: 50, gender: 'men', desc: 'Subtle high-definition facial corrections, scalp setting, and anti-shine finish.' }
  ],
  skin: [
    { id: 's1', name: 'Gold Radiance Facial', price: 2500, duration: 75, gender: 'unisex', desc: 'Rich 24k gold leaf massage, gentle peeling scrub, and calming cream pack.' },
    { id: 's2', name: 'Hydra-Deep Pore Cleanse', price: 3500, duration: 60, gender: 'unisex', desc: 'Vacuum pore extraction, nutrient water sprays, and skin plumping serums.' },
    { id: 's3', name: 'De-Tan Herbal Scrub', price: 1200, duration: 45, gender: 'unisex', desc: 'Antioxidant skin cooling scrub to reverse environmental sun soot.' },
    { id: 's4', name: 'Bright Eye Repair Lift', price: 1000, duration: 30, gender: 'unisex', desc: 'Chilled massage rollers and hyaluronic pads targeting dark fatigue rings.' }
  ],
  nail: [
    { id: 'n1', name: 'Gel Extensions & Custom Art', price: 2000, duration: 90, gender: 'women', desc: 'Premium overlay extensions featuring custom hand-painted gold graphics.' },
    { id: 'n2', name: 'Luxury Spa Manicure', price: 800, duration: 45, gender: 'unisex', desc: 'Essential nail care, moisturizing hand bath, scrub, and massage.' },
    { id: 'n3', name: 'Luxury Spa Pedicure', price: 1000, duration: 50, gender: 'unisex', desc: 'Sea salt warm foot bath, callus filing, clay mask, and massage.' },
    { id: 'n4', name: 'Chrome Reflective Polish', price: 400, duration: 25, gender: 'unisex', desc: 'Premium metal-powder rub to add chrome shine over gel colors.' }
  ],
  waxing: [
    { id: 'w1', name: 'Full Rica Arms & Legs', price: 1200, duration: 50, gender: 'women', desc: 'Gentle Rica wax hair removal, reducing skin redness and standard tan.' },
    { id: 'w2', name: 'Full Body Luxury Package', price: 3200, duration: 120, gender: 'women', desc: 'Full arms, legs, underarms, back, and neck waxing.' },
    { id: 'w3', name: 'Eyebrow Shaping / Threading', price: 100, duration: 15, gender: 'unisex', desc: 'Professional organic thread styling to contour clean brow lines.' },
    { id: 'w4', name: 'Back Waxing (Men)', price: 800, duration: 30, gender: 'men', desc: 'Quick waxing service for back cleaning, finished with cooling skin cream.' }
  ]
};

// ==========================================
// FAQ Configuration
// ==========================================

const FAQS_DATA = [
  { question: "Do I need to book an appointment in advance?", answer: "While we do accommodate walk-ins when slots are available, we highly recommend booking in advance to guarantee your preferred stylist and time slot." },
  { question: "What brands of styling products do you use?", answer: "We exclusively use premium, dermatologically tested international brands such as L'Oréal Professional, Wella, Rica, and MAC to ensure superior care and safety." },
  { question: "Is HJ Beauty Parlour a unisex salon?", answer: "Yes, HJ Beauty Parlour is a fully equipped unisex salon. We have specialized styling sections and experts tailored for both men and women." },
  { question: "How can I reschedule or cancel my booking?", answer: "You can reschedule or cancel your booking by calling us directly at +91 94416 49221 at least 2 hours prior to your scheduled time." }
];

const TESTIMONIALS_DATA = [
  { name: "Aarav Sharma", rating: 5, quote: "The luxury hair spa here is next level. The stylists really know what they are doing. The gold-themed ambiance makes you feel like royalty!", role: "Regular Client", pic: "/avatar1.png" },
  { name: "Priya Reddy", rating: 5, quote: "I booked my bridal HD makeup package at HJ and it was flawless. Everyone complimented the look. Highly professional and polite staff!", role: "Bridal Client", pic: "/avatar2.png" },
  { name: "Karan Malhotra", rating: 5, quote: "Excellent haircut and beard shaping. The custom package builder saved me quite a bit of money since I selected three services together.", role: "Regular Client", pic: "/avatar3.png" },
  { name: "Sneha Rao", rating: 5, quote: "Extremely hygienic, beautiful decor, and prompt service. The Rica waxing was virtually painless. Will definitely visit again!", role: "Nail & Waxing Client", pic: "/avatar4.png" },
  { name: "Rahul Verma", rating: 5, quote: "Top-notch unisex grooming salon in Hyd. The master stylists are exceptionally skilled and use only imported premium brands.", role: "Hair & Skin Client", pic: "/avatar5.png" },
  { name: "Ananya Sen", rating: 5, quote: "I love their customized packages and the Hydra-Deep Pore Cleanse facial. My skin felt glowing and refreshed instantly!", role: "Skin Care Client", pic: "/avatar6.png" }
];

// ==========================================
// Main Application Component
// ==========================================

function App() {
  // Navigation & Tabs state
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('hair');
  const [genderFilter, setGenderFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'booking'
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardsPerView = () => {
    if (windowWidth < 600) return 1;
    if (windowWidth < 900) return 2;
    return 3;
  };

  const cardsPerView = getCardsPerView();
  const maxSlide = TESTIMONIALS_DATA.length - cardsPerView;

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const navigateToSection = (hash) => {
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Custom Package Builder state
  const [selectedServices, setSelectedServices] = useState([]);

  // Testimonials active slide
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePopupIndex, setActivePopupIndex] = useState(null);

  // FAQs active state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Bookings list state
  const [bookings, setBookings] = useState([]);

  // Appointment form state
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '',
    stylist: 'Any Stylist',
    gender: 'Prefer not to say',
    notes: ''
  });

  // Confirmed booking modal state
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Bookings query state
  const [searchPhone, setSearchPhone] = useState('');
  const [searchedBookings, setSearchedBookings] = useState(null);

  // Booking page active service tab state
  const [bookingServiceTab, setBookingServiceTab] = useState('hair');

  // Scroll Listener for Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Retrieve bookings from localstorage on load
  useEffect(() => {
    const saved = localStorage.getItem('hj_bookings');
    if (saved) {
      setBookings(JSON.parse(saved));
    }
  }, []);

  // Auto scroll testimonials
  useEffect(() => {
    if (maxSlide <= 0) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        if (prev >= maxSlide) return 0;
        return prev + 1;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [maxSlide]);

  // Sync Package Builder changes to the form
  const handleToggleService = (service) => {
    setSelectedServices(prev => {
      const exists = prev.find(item => item.id === service.id);
      if (exists) {
        return prev.filter(item => item.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  // Helper calculation for packages
  const rawPrice = selectedServices.reduce((sum, item) => sum + item.price, 0);
  const totalDuration = selectedServices.reduce((sum, item) => sum + item.duration, 0);
  const hasDiscount = selectedServices.length >= 3;
  const finalPrice = hasDiscount ? Math.round(rawPrice * 0.9) : rawPrice;

  // Sync selected package services to appointment form
  const handleAddPackageToBooking = () => {
    if (selectedServices.length === 0) return;
    setCurrentPage('booking');
  };

  // Form Submit Handler
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (!bookingForm.name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!/^\d{10}$/.test(bookingForm.phone.trim())) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!bookingForm.date) {
      alert("Please pick a preferred date.");
      return;
    }
    if (!bookingForm.timeSlot) {
      alert("Please select a preferred time slot.");
      return;
    }

    if (selectedServices.length === 0) {
      alert("Please select at least one service from the list to book your appointment.");
      return;
    }

    const selectedSvs = selectedServices;

    const bookingId = 'HJ-' + Math.floor(1000 + Math.random() * 9000);

    const newBooking = {
      id: bookingId,
      customerName: bookingForm.name,
      customerPhone: bookingForm.phone,
      customerEmail: bookingForm.email,
      date: bookingForm.date,
      timeSlot: bookingForm.timeSlot,
      stylist: bookingForm.stylist,
      gender: bookingForm.gender,
      notes: bookingForm.notes,
      services: selectedSvs,
      totalPrice: selectedServices.length > 0 ? finalPrice : 0,
      status: 'Confirmed'
    };

    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem('hj_bookings', JSON.stringify(updatedBookings));

    // Show receipt
    setConfirmedBooking(newBooking);

    // Reset Form
    setBookingForm({
      name: '',
      phone: '',
      email: '',
      date: '',
      timeSlot: '',
      stylist: 'Any Stylist',
      gender: 'Prefer not to say',
      notes: ''
    });
    setSelectedServices([]);
  };

  // Look up bookings
  const handleLookup = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(searchPhone.trim())) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    const filtered = bookings.filter(b => b.customerPhone === searchPhone.trim());
    setSearchedBookings(filtered);
  };

  // Check if date is in past
  const getMinDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <>
      {/* ========================================== */}
      {/* Navigation Bar */}
      {/* ========================================== */}
      <nav className={`navbar ${navbarScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); navigateToSection('#hero'); }}>
            <HJLogo className="w-10 h-10" />
            <span className="nav-brand-text">HJ Parlour</span>
          </a>

          <ul className="nav-links">
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToSection('#about'); }}>About Us</a></li>
            <li><a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToSection('#services'); }}>Services</a></li>
            <li><a href="#packages" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToSection('#packages'); }}>Package Builder</a></li>
            <li><a href="#booking" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('booking'); }}>Book Now</a></li>
            <li><a href="#lookup" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToSection('#lookup'); }}>My Bookings</a></li>
            <li><a href="#faqs" className="nav-link" onClick={(e) => { e.preventDefault(); navigateToSection('#faqs'); }}>FAQs</a></li>
          </ul>

          <button onClick={() => setCurrentPage('booking')} className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}>
            Book Slot
          </button>
        </div>
      </nav>

      {currentPage === 'home' && (
        <>
          {/* ========================================== */}
          {/* Hero Section */}
          {/* ========================================== */}
          <section id="hero" className="hero-section">
            <div className="container">
              <div className="hero-grid">
                <div className="hero-content">
                  <span className="hero-badge">Unisex Luxury Salon</span>
                  <h1>Enhancing Your Beauty, Elevating Your Confidence</h1>
                  <p className="hero-tagline">Experience state-of-the-art styling, organic skin remedies, and customized makeups by Hyd's master stylists.</p>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button onClick={() => setCurrentPage('booking')} className="btn btn-primary">Book Appointment Now</button>
                    <a href="#services" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); navigateToSection('#services'); }}>Explore Menu</a>
                  </div>
                </div>

                <div className="hero-logo-box">
                  <HJLogo className="animate-float" />
                  <div className="hero-slogan-circle">
                    Look Beautiful
                    <span>Feel Confident</span>
                    <span style={{ fontSize: '0.6rem', color: '#FFF' }}>Be You</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* Quick Info Bar */}
          {/* ========================================== */}
          <section className="info-strip">
            <div className="container">
              <div className="info-grid">
                <div className="info-card glass-panel">
                  <div className="info-icon"><LocationIcon /></div>
                  <div>
                    <div className="info-title">Location</div>
                    <div className="info-desc">Reddy Colony, Hyd</div>
                  </div>
                </div>

                <div className="info-card glass-panel">
                  <div className="info-icon"><PhoneIcon /></div>
                  <div>
                    <div className="info-title">Phone</div>
                    <div className="info-desc">94416 49221</div>
                  </div>
                </div>

                <div className="info-card glass-panel">
                  <div className="info-icon"><InstagramIcon /></div>
                  <div>
                    <div className="info-title">Instagram</div>
                    <div className="info-desc">@hj_beautyparlour</div>
                  </div>
                </div>

                <div className="info-card glass-panel">
                  <div className="info-icon"><ClockIcon /></div>
                  <div>
                    <div className="info-title">Hours</div>
                    <div className="info-desc">Mon-Sun 10AM-8PM</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* About Us Section */}
          {/* ========================================== */}
          <section id="about">
            <div className="container">
              <div className="about-grid">
                <div className="about-img-container">
                  <div className="about-decor-circle"></div>
                  <div className="about-img-placeholder">
                    <HJLogo style={{ width: '120px', height: '120px', opacity: 0.3 }} />
                    <span className="font-serif" style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>YOUR BEAUTY, OUR PASSION</span>
                  </div>
                </div>

                <div className="about-content">
                  <span style={{ color: 'var(--gold-light)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Welcome to HJ Parlour</span>
                  <h2 style={{ textAlign: 'left', marginBottom: '1.5rem' }} className="font-serif">Unisex Grooming &amp; Styling Specialists</h2>
                  <p>At HJ Beauty Parlour, we believe that grooming is an art form. We combine modern hair care, customized skin therapies, and high-definition makeups to bring out the best version of you.</p>
                  <p>Our salon is structured to cater to both men and women with individual, private zones. From quick shape-ups to premium bridal packages, our certified stylists ensure you leave looking beautiful and feeling confident.</p>

                  <div className="about-highlights">
                    <div className="highlight-item">
                      <div className="highlight-bullet"></div>
                      <span className="highlight-text">Premium Certified Stylists</span>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-bullet"></div>
                      <span className="highlight-text">100% Hygienic Sanitized Zones</span>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-bullet"></div>
                      <span className="highlight-text">Luxury Imported Brands Only</span>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-bullet"></div>
                      <span className="highlight-text">Custom Bridal &amp; Groom Suites</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* Services Menu Section */}
          {/* ========================================== */}
          <section id="services" className="services-section">
            <div className="container">
              <h2>Our Exquisite Services</h2>

              {/* Service Category Tabs */}
              <div className="tabs-container">
                <button className={`tab-btn ${activeServiceTab === 'hair' ? 'active' : ''}`} onClick={() => setActiveServiceTab('hair')}>
                  <HairIcon />
                  <span className="tab-label">Hair Care</span>
                </button>
                <button className={`tab-btn ${activeServiceTab === 'makeup' ? 'active' : ''}`} onClick={() => setActiveServiceTab('makeup')}>
                  <MakeupIcon />
                  <span className="tab-label">Makeup</span>
                </button>
                <button className={`tab-btn ${activeServiceTab === 'skin' ? 'active' : ''}`} onClick={() => setActiveServiceTab('skin')}>
                  <SkinIcon />
                  <span className="tab-label">Skin Care</span>
                </button>
                <button className={`tab-btn ${activeServiceTab === 'nail' ? 'active' : ''}`} onClick={() => setActiveServiceTab('nail')}>
                  <NailIcon />
                  <span className="tab-label">Nail Art</span>
                </button>
                <button className={`tab-btn ${activeServiceTab === 'waxing' ? 'active' : ''}`} onClick={() => setActiveServiceTab('waxing')}>
                  <WaxingIcon />
                  <span className="tab-label">Waxing</span>
                </button>
              </div>

              {/* Gender Filter Buttons */}
              <div className="filter-container">
                <button className={`filter-btn ${genderFilter === 'all' ? 'active' : ''}`} onClick={() => setGenderFilter('all')}>All Services</button>
                <button className={`filter-btn ${genderFilter === 'women' ? 'active' : ''}`} onClick={() => setGenderFilter('women')}>Women</button>
                <button className={`filter-btn ${genderFilter === 'men' ? 'active' : ''}`} onClick={() => setGenderFilter('men')}>Men</button>
              </div>

              {/* Services Grid */}
              <div className="services-grid grid">
                {SERVICES_DATA[activeServiceTab]
                  .filter(svc => genderFilter === 'all' || svc.gender === 'unisex' || svc.gender === genderFilter)
                  .map(svc => {
                    const isSelected = selectedServices.some(item => item.id === svc.id);
                    return (
                      <div key={svc.id} className="service-card glass-panel">
                        <div>
                          <div className="service-header">
                            <h3 className="service-title">{svc.name}</h3>
                            <span className="service-price">₹{svc.price}</span>
                          </div>
                          <div className="service-meta">
                            <span className="badge badge-gender">{svc.gender}</span>
                            <span className="badge badge-duration">{svc.duration} mins</span>
                          </div>
                          <p className="service-desc">{svc.desc}</p>
                        </div>

                        <div className="service-action">
                          {isSelected ? (
                            <button className="btn-card-action btn-card-remove" onClick={() => handleToggleService(svc)}>
                              Remove from Package
                            </button>
                          ) : (
                            <button className="btn-card-action btn-card-add" onClick={() => handleToggleService(svc)}>
                              Add to Package
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* Custom Package Builder */}
          {/* ========================================== */}
          <section id="packages" className="package-builder-section">
            <div className="container">
              <h2>Create Your Custom Package</h2>

              <div className="package-grid">
                <div className="package-info">
                  <p>Design a bespoke beauty ritual tailored specifically to your needs. Add multiple items from our menu above to build a custom bundle. When you add **3 or more services**, you will unlock a **10% premium discount** on your total bill.</p>

                  <div className="package-cards-scroll">
                    {selectedServices.length === 0 ? (
                      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', gridColumn: '1 / -1' }}>
                        <p style={{ fontStyle: 'italic' }}>No services added yet. Click "Add to Package" on services above to build your package!</p>
                      </div>
                    ) : (
                      selectedServices.map(svc => (
                        <div key={svc.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '4px solid var(--gold)' }}>
                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                              <span style={{ fontWeight: '600', fontSize: '0.95rem', color: '#FFF' }}>{svc.name}</span>
                              <span style={{ color: 'var(--gold-light)', fontWeight: '600', fontFamily: 'var(--font-serif)' }}>₹{svc.price}</span>
                            </div>
                            <span className="badge badge-duration" style={{ fontSize: '0.6rem' }}>{svc.duration} mins</span>
                          </div>
                          <button className="btn-card-action btn-card-remove" style={{ marginTop: '1rem', padding: '0.4rem', fontSize: '0.7rem' }} onClick={() => handleToggleService(svc)}>
                            Remove
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Calculations Card */}
                <div className="package-summary-card glass-panel gold-glow">
                  <h3 className="font-serif" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem', fontSize: '1.4rem' }}>Package Summary</h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '0.5rem 0' }}>
                    <div className="pkg-calc-line">
                      <span>Selected Services:</span>
                      <span style={{ fontWeight: '600' }}>{selectedServices.length}</span>
                    </div>
                    <div className="pkg-calc-line">
                      <span>Total Duration:</span>
                      <span style={{ fontWeight: '600' }}>{totalDuration} mins</span>
                    </div>
                    <div className="pkg-calc-line">
                      <span>Subtotal Price:</span>
                      <span style={{ fontWeight: '600' }}>₹{rawPrice}</span>
                    </div>
                    {hasDiscount && (
                      <div className="pkg-discount-badge">
                        🎉 10% Multi-service Discount Applied
                      </div>
                    )}
                    <div className="pkg-calc-line total">
                      <span>Total Amount:</span>
                      <span className="price">₹{finalPrice}</span>
                    </div>
                  </div>

                  <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={selectedServices.length === 0} onClick={handleAddPackageToBooking}>
                    Book Package Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {currentPage === 'booking' && (
        <section className="booking-hero-section">
          <div className="container">
            <span className="hero-badge">Reservations</span>
            <h1 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 1.2rem + 3vw, 3.2rem)', marginBottom: '1rem' }}>Book An Appointment</h1>
            <p className="hero-tagline" style={{ maxWidth: '600px', marginInline: 'auto', fontSize: '1.1rem' }}>
              Secure your slot at HJ Beauty Parlour. Select your desired stylist, date, and preferred time slot.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <button onClick={() => setCurrentPage('home')} className="btn btn-secondary" style={{ padding: '0.6rem 1.4rem' }}>
                ← Back to Home
              </button>
            </div>
          </div>
        </section>
      )}

      {currentPage === 'booking' && (
<section id="booking" className="booking-section">
          <div className="container">
            <h2>Secure Your Appointment Slot</h2>

            <div className="booking-wrapper glass-panel">
              <form onSubmit={handleBookingSubmit} className="booking-form">

                {/* Interactive Service Selector */}
                <div className="booking-service-selector-group form-group">
                  <label>Select Services for Your Appointment</label>
                  <p className="field-desc" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '-0.25rem', marginBottom: '0.5rem' }}>
                    Choose one or more services. Select 3 or more services to unlock a <strong>10% package discount</strong>!
                  </p>
                  
                  {/* Category tabs */}
                  <div className="booking-service-tabs">
                    {Object.keys(SERVICES_DATA).map(category => (
                      <button
                        key={category}
                        type="button"
                        className={`booking-tab-btn ${bookingServiceTab === category ? 'active' : ''}`}
                        onClick={() => setBookingServiceTab(category)}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Services list under active tab */}
                  <div className="booking-services-list">
                    {SERVICES_DATA[bookingServiceTab].map(svc => {
                      const isChecked = selectedServices.some(item => item.id === svc.id);
                      return (
                        <div 
                          key={svc.id} 
                          className={`booking-service-item ${isChecked ? 'selected' : ''}`}
                          onClick={() => handleToggleService(svc)}
                        >
                          <div className="booking-service-item-left">
                            <input 
                              type="checkbox" 
                              checked={isChecked} 
                              onChange={() => {}} /* Handled by item onClick */
                              onClick={(e) => e.stopPropagation()} 
                              style={{ pointerEvents: 'none', accentColor: 'var(--gold)' }}
                            />
                            <div className="booking-service-info">
                              <span className="booking-service-name">{svc.name}</span>
                              <span className="booking-service-duration">{svc.duration} mins</span>
                            </div>
                          </div>
                          <span className="booking-service-price">₹{svc.price}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Services & Pricing Summary Box */}
                <div className="booking-summary-box">
                  <h4 className="summary-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold-light)', marginBottom: '1rem', borderBottom: '1px solid rgba(229, 200, 101, 0.2)', paddingBottom: '0.5rem' }}>Selected Package Summary</h4>
                  {selectedServices.length === 0 ? (
                    <div className="no-services-warning" style={{ color: 'var(--gold-light)', fontStyle: 'italic', fontSize: '0.9rem' }}>
                      No services selected yet. Please select at least one service above to proceed.
                    </div>
                  ) : (
                    <>
                      <div className="summary-list">
                        {selectedServices.map(svc => (
                          <div key={svc.id} className="summary-item" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--cream)' }}>
                            <span>{svc.name} <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>({svc.duration}m)</span></span>
                            <span>₹{svc.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="summary-divider" style={{ borderTop: '1px dashed rgba(229, 200, 101, 0.2)', margin: '1rem 0' }}></div>
                      <div className="summary-stats" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                        <div className="summary-stat-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Services Selected:</span>
                          <span style={{ fontWeight: 600, color: 'var(--white)' }}>{selectedServices.length}</span>
                        </div>
                        <div className="summary-stat-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Estimated Duration:</span>
                          <span style={{ fontWeight: 600, color: 'var(--white)' }}>{totalDuration} mins</span>
                        </div>
                        <div className="summary-stat-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Subtotal:</span>
                          <span style={{ fontWeight: 600, color: 'var(--white)' }}>₹{rawPrice}</span>
                        </div>
                        {hasDiscount && (
                          <div className="summary-stat-row discount" style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981' }}>
                            <span>10% Package Discount (3+ services):</span>
                            <span>-₹{rawPrice - finalPrice}</span>
                          </div>
                        )}
                        <div className="summary-stat-row total" style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(229, 200, 101, 0.3)', paddingTop: '0.5rem', marginTop: '0.25rem', fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold-light)' }}>
                          <span>Final Total:</span>
                          <span>₹{finalPrice}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Enter your full name" value={bookingForm.name} onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (10 digits)</label>
                    <input type="tel" id="phone" className="form-control" placeholder="e.g. 9441649221" value={bookingForm.phone} onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address (Optional)</label>
                    <input type="email" id="email" className="form-control" placeholder="yourname@gmail.com" value={bookingForm.email} onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="stylist">Stylist Preference</label>
                    <select id="stylist" className="form-control" value={bookingForm.stylist} onChange={(e) => setBookingForm(prev => ({ ...prev, stylist: e.target.value }))}>
                      <option value="Any Stylist">Any Available Stylist</option>
                      <option value="Senior Stylist">Senior Stylist (Hair specialist)</option>
                      <option value="Master Stylist">Master Stylist (Skin/Makeup specialist)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Booking Date</label>
                    <input type="date" id="date" className="form-control" min={getMinDate()} value={bookingForm.date} onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="gender">Gender Selector</label>
                    <select id="gender" className="form-control" value={bookingForm.gender} onChange={(e) => setBookingForm(prev => ({ ...prev, gender: e.target.value }))}>
                      <option value="Prefer not to say">Prefer not to say</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                {/* Time Slots (Within 10AM - 8PM) */}
                <div className="form-group">
                  <label>Preferred Time Slot</label>
                  <div className="time-grid">
                    {['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'].map((slot) => (
                      <div key={slot} className={`time-slot ${bookingForm.timeSlot === slot ? 'selected' : ''}`} onClick={() => setBookingForm(prev => ({ ...prev, timeSlot: slot }))}>
                        {slot}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Custom Notes / Special Instructions</label>
                  <textarea id="notes" className="form-control" rows="3" placeholder="Tell us if you have any allergies or specific styling requirements..." value={bookingForm.notes} onChange={(e) => setBookingForm(prev => ({ ...prev, notes: e.target.value }))}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                  Confirm Appointment Slot
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {currentPage === 'home' && (
        <>
          {/* ========================================== */}
          {/* Booking Lookup & Management Panel */}
          {/* ========================================== */}
          <section id="lookup" className="lookup-section">
            <div className="container">
              <h2>Manage Your Bookings</h2>
              <div className="lookup-wrapper glass-panel" style={{ padding: '2.5rem' }}>
                <p>Enter your registered 10-digit mobile number below to retrieve and verify your booking status.</p>

                <form onSubmit={handleLookup} className="lookup-box">
                  <input type="tel" className="form-control" placeholder="Enter phone number" value={searchPhone} onChange={(e) => setSearchPhone(e.target.value)} required />
                  <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Search Bookings</button>
                </form>

                {searchedBookings !== null && (
                  <div className="bookings-list">
                    {searchedBookings.length === 0 ? (
                      <p style={{ textAlign: 'center', fontStyle: 'italic' }}>No bookings found for this number.</p>
                    ) : (
                      searchedBookings.map(b => (
                        <div key={b.id} className="booking-item-card">
                          <div className="booking-item-left">
                            <span className="booking-item-title">{b.services.map(s => s.name).join(', ')}</span>
                            <span className="booking-item-date">📅 {b.date} at {b.timeSlot}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--cream-muted)' }}>ID: {b.id} | Stylist: {b.stylist}</span>
                          </div>

                          <div className="booking-item-right">
                            <span className="booking-item-price">₹{b.totalPrice}</span>
                            <span className="status-tag">{b.status}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* Gallery / Visual Showcase */}
          {/* ========================================== */}
          <section id="gallery" className="gallery-section">
            <div className="container">
              <h2>Signature Gallery</h2>

              <div className="gallery-grid grid">
                <div className="gallery-card">
                  <img src="./src/assets/salon_hero_bg.png" alt="HJ Salon Suite" />
                  <div className="gallery-overlay">
                    <span className="gallery-category">Salon Interior</span>
                    <span className="gallery-title">Luxury Styling Suite</span>
                  </div>
                </div>

                <div className="gallery-card">
                  {/* CSS Gradient Art to represent hair styling styling */}
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #4A0620 0%, #12010A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HairIcon style={{ width: '48px', height: '48px', stroke: 'var(--gold)', opacity: 0.3 }} />
                  </div>
                  <div className="gallery-overlay">
                    <span className="gallery-category">Hair Design</span>
                    <span className="gallery-title">Precision Cut &amp; Style</span>
                  </div>
                </div>

                <div className="gallery-card">
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1A020B 0%, #590B2A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MakeupIcon style={{ width: '48px', height: '48px', stroke: 'var(--gold)', opacity: 0.3 }} />
                  </div>
                  <div className="gallery-overlay">
                    <span className="gallery-category">Makeup Artistry</span>
                    <span className="gallery-title">HD Bridal Glow</span>
                  </div>
                </div>

                <div className="gallery-card">
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #3D051A 0%, #12010A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SkinIcon style={{ width: '48px', height: '48px', stroke: 'var(--gold)', opacity: 0.3 }} />
                  </div>
                  <div className="gallery-overlay">
                    <span className="gallery-category">Skin Therapy</span>
                    <span className="gallery-title">24K Gold Radian Facial</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* Testimonials Section */}
          {/* ========================================== */}
          <section className="testimonials-section">
            <div className="container">
              <h2>Voices of Beauty</h2>

              <div className="testimonials-carousel-wrapper">
                <button 
                  onClick={() => setActiveSlide(prev => Math.max(prev - 1, 0))}
                  className="carousel-nav-btn prev-btn"
                  disabled={activeSlide === 0}
                  aria-label="Previous testimonials"
                >
                  ◀
                </button>

                <div className="testimonials-viewport">
                  <div 
                    className="testimonials-slider-track" 
                    style={{ 
                      transform: `translateX(-${activeSlide * (100 / TESTIMONIALS_DATA.length)}%)`,
                      display: 'flex',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      width: `${(TESTIMONIALS_DATA.length / cardsPerView) * 100}%`
                    }}
                  >
                    {TESTIMONIALS_DATA.map((t, idx) => (
                      <div 
                        key={idx} 
                        className="testimonial-card-outer"
                        style={{ 
                          width: `${100 / TESTIMONIALS_DATA.length}%`,
                          padding: '0 0.75rem' 
                        }}
                      >
                        <div className="testimonial-card-inner glass-panel gold-glow" onClick={() => setActivePopupIndex(idx)}>
                          <div className="testimonial-card-image-box">
                            <img src={t.pic} alt={t.name} />
                          </div>
                          
                          <div className="testimonial-card-content-box">
                            <div className="testimonial-card-header-small">
                              <span className="testimonial-name-small">{t.name}</span>
                              <span className="testimonial-role-small">{t.role}</span>
                            </div>
                            
                            <div className="stars">
                              {Array(t.rating).fill(0).map((_, i) => (
                                <span key={i} style={{ fontSize: '0.9rem', color: 'var(--gold-light)' }}>★</span>
                              ))}
                            </div>
                            
                            <blockquote className="testimonial-quote">
                              "{t.quote}"
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setActiveSlide(prev => Math.min(prev + 1, maxSlide))}
                  className="carousel-nav-btn next-btn"
                  disabled={activeSlide >= maxSlide}
                  aria-label="Next testimonials"
                >
                  ▶
                </button>
              </div>

              <div className="carousel-dots" style={{ marginTop: '2.5rem' }}>
                {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                  <button 
                    key={idx} 
                    className={`carousel-dot ${activeSlide === idx ? 'active' : ''}`} 
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* FAQs Section */}
          {/* ========================================== */}
          <section id="faqs" className="faq-section">
            <div className="container">
              <h2>Frequently Asked Questions</h2>

              <div className="faq-wrapper">
                {FAQS_DATA.map((faq, idx) => (
                  <div key={idx} className="faq-item">
                    <button className="faq-question" onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}>
                      <span>{faq.question}</span>
                      <span className={`faq-icon ${openFaqIndex === idx ? 'open' : ''}`}>▼</span>
                    </button>
                    <div className={`faq-answer ${openFaqIndex === idx ? 'open' : ''}`}>
                      <div className="faq-answer-inner">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================== */}
      {/* Footer Section */}
      {/* ========================================== */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-grid">

            {/* Column 1 - Brand Slogan */}
            <div className="footer-column">
              <div className="footer-logo-area">
                <HJLogo style={{ width: '45px', height: '45px' }} />
                <span className="nav-brand-text" style={{ fontSize: '1.2rem' }}>HJ Parlour</span>
              </div>
              <p style={{ fontSize: '0.92rem' }}>Enhancing Your Beauty, Elevating Your Confidence. Experience Hyd's premium unisex salon services matching your distinct elegance.</p>
              <div style={{ marginTop: '1rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Slogan</span>
                <p className="font-serif" style={{ color: '#FFF', fontStyle: 'italic', fontSize: '1.1rem', marginTop: '0.25rem' }}>"Your Beauty, Our Passion"</p>
              </div>
            </div>

            {/* Column 2 - Contacts */}
            <div className="footer-column">
              <h3 className="footer-title">Salon Details</h3>
              <ul className="footer-contacts-list">
                <li className="footer-contact-item">
                  <LocationIcon />
                  <span>RAMM's Sri Krishna Residency,<br />Reddy Colony, Hyderabad</span>
                </li>
                <li className="footer-contact-item">
                  <PhoneIcon />
                  <span>+91 94416 49221<br />+91 8019955800</span>
                </li>
                <li className="footer-contact-item">
                  <InstagramIcon />
                  <span>@hj_beautyparlour</span>
                </li>
                <li className="footer-contact-item">
                  <ClockIcon />
                  <span>Mon - Sun: 10:00 AM - 08:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Column 3 - Stylized Map */}
            <div className="footer-column">
              <h3 className="footer-title">Salon Map Location</h3>
              <div className="footer-map-placeholder">
                <LocationIcon style={{ width: '28px', height: '28px', color: 'var(--gold)' }} />
                <span style={{ fontSize: '0.9rem', color: '#FFF', margin: '0.5rem 0 0.2rem' }}>Reddy Colony - Hyd</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--cream-muted)' }}>Sri Krishna Residency</span>
                <a href="https://maps.google.com" target="_blank" className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.7rem', marginTop: '1rem' }}>Open Maps</a>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} HJ Beauty Parlour. All rights reserved. Designed for Premium Unisex Styling.
            </div>
            <div className="footer-socials">
              <a href="https://instagram.com" className="social-link" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================== */}
      {/* Booking Receipt Modal */}
      {/* ========================================== */}
      {confirmedBooking && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel gold-glow">
            <button className="pkg-remove-item" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }} onClick={() => setConfirmedBooking(null)}>
              <CloseIcon />
            </button>

            <div className="receipt-header">
              <div className="receipt-badge">
                <CheckIcon />
              </div>
              <h3 className="font-serif">Booking Confirmed</h3>
              <div className="receipt-id">{confirmedBooking.id}</div>
            </div>

            <div className="receipt-details">
              <div className="receipt-line">
                <span>Guest Name:</span>
                <span>{confirmedBooking.customerName}</span>
              </div>
              <div className="receipt-line">
                <span>Phone:</span>
                <span>{confirmedBooking.customerPhone}</span>
              </div>
              <div className="receipt-line">
                <span>Date &amp; Time:</span>
                <span>{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
              </div>
              <div className="receipt-line">
                <span>Stylist:</span>
                <span>{confirmedBooking.stylist}</span>
              </div>
              <div className="receipt-line">
                <span>Services:</span>
                <span style={{ textAlign: 'right', maxWidth: '240px', wordBreak: 'break-word' }}>
                  {confirmedBooking.services.map(s => s.name).join(', ')}
                </span>
              </div>
              <div className="receipt-line" style={{ borderTop: '1px dashed rgba(255,255,255,0.15)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
                <span style={{ color: 'var(--gold-light)', fontWeight: '600' }}>Amount to Pay:</span>
                <span style={{ color: 'var(--gold-light)', fontWeight: '600', fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>
                  ₹{confirmedBooking.totalPrice}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>A confirmation receipt has been saved in your browser. We look forward to welcoming you to HJ Parlour!</p>

            <button className="btn btn-primary" onClick={() => setConfirmedBooking(null)}>
              Done
            </button>
          </div>
        </div>
      )}

      {activePopupIndex !== null && (
        <div className="testimonial-popup-overlay" onClick={() => setActivePopupIndex(null)}>
          <div className="testimonial-popup-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={() => setActivePopupIndex(null)} aria-label="Close popup">
              &times;
            </button>
            
            <button 
              className="popup-nav-btn prev" 
              onClick={() => setActivePopupIndex(prev => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length)}
              aria-label="Previous testimonial"
            >
              ◀
            </button>

            <div className="testimonial-popup-content">
              <div className="testimonial-popup-image-wrapper">
                <img 
                  src={TESTIMONIALS_DATA[activePopupIndex].pic} 
                  alt={TESTIMONIALS_DATA[activePopupIndex].name} 
                  className="testimonial-popup-img" 
                />
                <div className="testimonial-popup-caption-box">
                  <div className="testimonial-popup-client-info">
                    <span className="testimonial-popup-name">{TESTIMONIALS_DATA[activePopupIndex].name}</span>
                    <span className="testimonial-popup-role">{TESTIMONIALS_DATA[activePopupIndex].role}</span>
                    <div className="stars" style={{ marginTop: '0.25rem' }}>
                      {Array(TESTIMONIALS_DATA[activePopupIndex].rating).fill(0).map((_, i) => (
                        <span key={i} style={{ color: 'var(--gold-light)' }}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="testimonial-popup-quote">
                    "{TESTIMONIALS_DATA[activePopupIndex].quote}"
                  </p>
                </div>
              </div>
            </div>

            <button 
              className="popup-nav-btn next" 
              onClick={() => setActivePopupIndex(prev => (prev + 1) % TESTIMONIALS_DATA.length)}
              aria-label="Next testimonial"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
