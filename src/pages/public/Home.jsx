import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  ShieldCheck, 
  UserCheck, 
  Phone, 
  Calendar,
  ArrowRight,
  MapPin,
  Clock,
  Info,
  Activity,
  Syringe,
  Compass,
  Star,
  ExternalLink,
  Sparkles,
  Heart
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Home = () => {
  const { lang, t } = useLanguage();

  const getExpertiseIcon = (iconName) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-[#29463D]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#29463D]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#29463D]" />;
      case 'Syringe': return <Syringe className="w-5 h-5 text-[#29463D]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#29463D]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#29463D]" />;
      default: return <Stethoscope className="w-5 h-5 text-[#29463D]" />;
    }
  };

  const patientSteps = [
    {
      num: "01",
      title: t.patientJourney.step1Title,
      desc: t.patientJourney.step1Desc
    },
    {
      num: "02",
      title: t.patientJourney.step2Title,
      desc: t.patientJourney.step2Desc
    },
    {
      num: "03",
      title: t.patientJourney.step3Title,
      desc: t.patientJourney.step3Desc
    },
    {
      num: "04",
      title: t.patientJourney.step4Title,
      desc: t.patientJourney.step4Desc
    }
  ];

  return (
    <div className="w-full bg-[#FAF9F6] overflow-x-hidden text-[#26302D]">
      
      {/* 1. ELEGANT ANIMATED HERO SECTION WITH BACKGROUND IMAGE & GRADIENT */}
      <section className="relative py-20 md:py-32 border-b border-[#E2DDD5] overflow-hidden">
        
        {/* Full Hero Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
  <img
    src="/images/medical-office.jpg"
    alt="Cabinet médical Dr Sanaa Belabbess background"
    className="
      w-full h-full
      object-cover object-center
      scale-105
      opacity-90
      ltr:-scale-x-105
      rtl:scale-x-105
    "
  />

  {/* Main readability overlay */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-[#FAF9F6]
      via-[#FAF9F6]/70
      to-[#FAF9F6]/10
      rtl:bg-gradient-to-l
      rtl:from-[#FAF9F6]
      rtl:via-[#FAF9F6]/70
      rtl:to-[#FAF9F6]/10
    "
  />

  {/* Bottom fade into page */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-t
      from-[#FAF9F6]
      via-transparent
      to-[#FAF9F6]/10
    "
  />

  {/* Very subtle brand atmosphere */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-br
      from-[#6F8F82]/10
      via-transparent
      to-[#D9B8B2]/10
    "
  />

  {/* Subtle pattern */}
  <div
    className="
      absolute inset-0
      opacity-[0.025]
      bg-[radial-gradient(#29463D_1.5px,transparent_1.5px)]
      [background-size:28px_28px]
    "
  />
</div>

        {/* SWIMMING AMBIENT BACKGROUND BLOBS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#6F8F82]/30 via-[#D9B8B2]/20 to-transparent blur-3xl animate-swim-slow"></div>
          <div className="absolute top-1/4 -right-28 w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-[#29463D]/20 via-[#EDE7DE]/60 to-transparent blur-3xl animate-swim-reverse"></div>
          <div className="absolute -bottom-28 left-1/3 w-80 h-80 rounded-full bg-gradient-to-t from-[#29463D]/15 to-transparent blur-2xl animate-pulse-glow"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT: Text & Typography */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-[#6F8F82]/30 text-[#29463D] px-4 py-2 rounded-full text-[11px] font-sans font-semibold tracking-[0.18em] uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#6F8F82] animate-pulse"></span>
                <Sparkles className="w-3.5 h-3.5 text-[#6F8F82]" />
                <span>{t.hero.eyebrow}</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#26302D] leading-[1.1] tracking-tight">
                  {t.hero.title}
                </h1>

                {/* Animated Baseline Wave Line */}
                <div className="w-full max-w-xs h-4 opacity-60 my-1">
                  <svg className="w-full h-full" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M0 10 H130 L140 3 L150 17 L160 5 L170 14 L180 10 H400"
                      stroke="#6F8F82"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0.2 }}
                      animate={{ pathLength: [0, 1, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </svg>
                </div>

                <p className="text-xl sm:text-2xl font-serif italic text-[#29463D] tracking-wide">
                  {t.hero.subtitle}
                </p>
              </div>

              <p className="text-base md:text-lg text-[#5F6C67] font-sans leading-relaxed max-w-xl">
                {t.hero.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/booking"
                    className="bg-[#29463D] hover:bg-[#1F3730] text-white px-8 py-4 rounded-lg text-sm font-sans font-medium transition-all shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2.5"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.hero.ctaBooking}</span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2.5 text-sm font-sans font-medium text-[#26302D] hover:text-[#29463D] transition-colors py-4 px-5 border border-[#E2DDD5] rounded-lg bg-white/90 backdrop-blur-md hover:bg-white shadow-xs"
                  >
                    <span>{t.hero.discoverProfile}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                </motion.div>
              </div>

              {/* Minimal Phone Lines & Location Note */}
              <div className="pt-4 border-t border-[#E2DDD5] flex flex-wrap items-center gap-6 text-xs text-[#5F6C67]">
                <span className="flex items-center gap-2 font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#29463D]" />
                  <a href="tel:0537296761" dir="ltr" className="hover:text-[#29463D] transition-colors">05 37 29 67 61</a>
                </span>
                <span className="text-[#E2DDD5]">|</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6F8F82]" />
                  <span>Rabat (Hay Sahrij / CYM)</span>
                </span>
              </div>
            </motion.div>

            {/* RIGHT: Standalone Floating Logo & Dynamic Micro-Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-6 flex items-center justify-center py-6 lg:py-10 relative"
            >
              <div className="relative w-full flex items-center justify-center p-2 lg:p-8">
                
                {/* Soft Glowing Pulse Aura */}
                <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-[#6F8F82]/25 via-[#29463D]/15 to-transparent blur-3xl animate-pulse-glow pointer-events-none"></div>

                {/* Main Standalone Floating Logo Image */}
                <motion.img 
                  src="/logo.png" 
                  alt="Logo Dr Sanaa Belabbess Médecin Généraliste Rabat" 
                  className="w-full h-auto max-h-[400px] lg:max-h-[480px] object-contain relative z-10 drop-shadow-sm cursor-pointer"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  whileHover={{ scale: 1.03 }}
                />

                {/* Floating Interactive Micro-Badge 1: Consultation & Bilan */}
                <motion.div 
                  className="absolute -top-2 left-0 sm:left-4 bg-white/95 backdrop-blur-md border border-[#E2DDD5] rounded-xl p-3.5 shadow-md flex items-center gap-3 z-20"
                  animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F1F5F3] text-[#29463D] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#26302D] leading-tight">Consultation & Bilan</p>
                    <p className="text-[10px] text-[#29463D] font-medium flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Prise en charge attentive
                    </p>
                  </div>
                </motion.div>

                {/* Floating Interactive Micro-Badge 2: Cabinet Rabat */}
                <motion.div 
                  className="absolute -bottom-2 right-0 sm:right-4 bg-white/95 backdrop-blur-md border border-[#E2DDD5] rounded-xl p-3.5 shadow-md flex items-center gap-3 z-20"
                  animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F1F5F3] text-[#29463D] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#26302D] leading-tight">Cabinet Médical à Rabat</p>
                    <p className="text-[10px] text-[#5F6C67]">Hay Sahrij / CYM</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / CREDIBILITY BAR */}
      <section className="py-10 bg-white border-b border-[#E2DDD5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center divide-x rtl:divide-x-reverse divide-[#E2DDD5]/60">
            <div className="p-2 space-y-1">
              <p className="text-xs font-sans text-[#5F6C67] uppercase tracking-wider font-semibold">Spécialité</p>
              <p className="text-base sm:text-lg font-serif font-normal text-[#26302D]">Médecine Générale</p>
            </div>
            <div className="p-2 space-y-1">
              <p className="text-xs font-sans text-[#5F6C67] uppercase tracking-wider font-semibold">Ville</p>
              <p className="text-base sm:text-lg font-serif font-normal text-[#26302D]">Rabat, Maroc</p>
            </div>
            <div className="p-2 space-y-1">
              <p className="text-xs font-sans text-[#5F6C67] uppercase tracking-wider font-semibold">Note publique</p>
              <p className="text-base sm:text-lg font-serif font-normal text-[#29463D] flex items-center justify-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4,7 / 5</span>
              </p>
            </div>
            <div className="p-2 space-y-1">
              <p className="text-xs font-sans text-[#5F6C67] uppercase tracking-wider font-semibold">Avis publics répertoriés</p>
              <p className="text-base sm:text-lg font-serif font-normal text-[#26302D]">35 avis</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-b border-[#E2DDD5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-[#E2DDD5] overflow-hidden bg-white p-2 shadow-xs">
                <img 
                  src="/images/medical-care-detail.jpg" 
                  alt="Pratique médicale et consultation à Rabat" 
                  className="w-full h-[380px] object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#29463D] block">
                  {t.profile.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#26302D] leading-tight">
                  {t.profile.heading}
                </h2>
              </div>

              <p className="text-base md:text-lg text-[#5F6C67] leading-relaxed font-sans">
                {t.profile.subtitle}
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {t.profile.bullets.map((bullet, idx) => (
                  <div key={idx} className="p-4 bg-white border border-[#E2DDD5] rounded-xl space-y-1 shadow-xs">
                    <span className="text-[10px] font-sans font-bold text-[#29463D] uppercase tracking-wider block">{bullet.tag}</span>
                    <h4 className="text-sm font-serif font-normal text-[#26302D]">{bullet.title}</h4>
                    <p className="text-xs text-[#5F6C67] font-sans leading-relaxed">{bullet.detail}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-16 md:py-24 bg-[#EDE7DE]/40 border-b border-[#E2DDD5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#29463D] block">
              {t.expertise.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#26302D]">
              {t.expertise.title}
            </h2>
            <p className="text-[#5F6C67] text-base">
              {t.expertise.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.expertise.items.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#E2DDD5] rounded-xl p-7 space-y-4 shadow-xs hover:border-[#6F8F82] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F1F5F3] flex items-center justify-center">
                    {getExpertiseIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-serif font-normal text-[#26302D]">{service.title}</h3>
                  <p className="text-sm text-[#5F6C67] leading-relaxed">{service.desc}</p>
                </div>

                <div className="pt-3 border-t border-[#E2DDD5]">
                  <Link to="/booking" className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#29463D] hover:underline">
                    <span>{t.nav.booking}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white border border-[#E2DDD5] rounded-xl text-xs text-[#5F6C67] max-w-3xl mx-auto flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#6F8F82] shrink-0 mt-0.5" />
            <p className="leading-relaxed font-sans">{t.expertise.notice}</p>
          </div>

        </div>
      </section>

      {/* 5. PATIENT JOURNEY SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2DDD5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#26302D]">
              {t.patientJourney.title}
            </h2>
            <p className="text-[#5F6C67] text-base">
              {t.patientJourney.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {patientSteps.map((step) => (
              <div key={step.num} className="space-y-3 border-t border-[#E2DDD5] pt-6">
                <span className="text-xs font-mono text-[#29463D] font-bold block">{step.num}</span>
                <h3 className="text-lg font-serif font-normal text-[#26302D]">{step.title}</h3>
                <p className="text-xs text-[#5F6C67] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PUBLIC RATING & REVIEWS */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-b border-[#E2DDD5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#29463D] block">
              {t.reviews.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#26302D]">
              {t.reviews.title}
            </h2>
            <p className="text-[#5F6C67] text-sm leading-relaxed">
              {t.reviews.subtitle}
            </p>

            {/* Rating Summary Badge */}
            <div className="inline-flex items-center gap-6 bg-white border border-[#E2DDD5] rounded-xl px-6 py-4 mt-2 shadow-xs">
              <div className="text-center">
                <div className="text-4xl font-serif font-normal text-[#26302D]">{t.reviews.rating}</div>
                <div className="flex items-center justify-center gap-0.5 mt-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <div className="h-10 w-px bg-[#E2DDD5]" />
              <div className="text-left rtl:text-right">
                <p className="text-sm font-sans font-semibold text-[#26302D]">{t.reviews.total}</p>
                <p className="text-xs text-[#5F6C67]">{t.reviews.source}</p>
              </div>
            </div>
          </div>

          {/* Real Patient Reviews Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.reviews.items.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-[#E2DDD5] rounded-xl p-6 space-y-4 shadow-xs hover:border-[#6F8F82] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    {/* Google G icon */}
                    <svg className="w-4 h-4 opacity-40 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>

                  {/* Review Text */}
                  <p className={`text-xs text-[#26302D] leading-relaxed italic ${review.lang === 'ar' ? 'font-arabic text-right' : ''}`} dir={review.lang === 'ar' ? 'rtl' : 'ltr'}>
                    "{review.text}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#E2DDD5]">
                  <div className="w-8 h-8 rounded-full bg-[#F1F5F3] border border-[#6F8F82]/30 flex items-center justify-center shrink-0">
                    <span className="text-xs font-sans font-bold text-[#29463D]">{review.name.charAt(0)}</span>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-sans font-semibold text-[#26302D] truncate">{review.name}</p>
                    <p className="text-[10px] text-[#5F6C67]">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dr+Sanaa+Belabbess+Medecin+Generaliste+Rabat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#29463D] hover:bg-[#1F3730] text-white px-6 py-3 rounded-md text-xs font-sans font-medium transition-colors shadow-xs"
            >
              <span>{t.reviews.viewReviews}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 7. CABINET & LOCATION / OPENING HOURS */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2DDD5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Cabinet Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#29463D] block">
                  {t.address.tag}
                </span>
                <h2 className="text-3xl font-serif font-normal text-[#26302D]">{t.address.title}</h2>
                <p className="text-sm text-[#5F6C67]">{t.address.subtitle}</p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-6 bg-[#FAF9F6] border border-[#E2DDD5] rounded-xl space-y-3">
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#26302D]">
                    {t.address.dirAddressesTitle}
                  </h4>
                  <div className="space-y-2 text-sm text-[#26302D]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#29463D] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{t.address.primaryDetail}</p>
                        <p className="text-xs text-[#5F6C67] mt-0.5">{t.address.secondaryDetail}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#FAF9F6] border border-[#E2DDD5] rounded-xl space-y-3">
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#26302D]">
                    {t.address.dirPhonesTitle}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <a href="tel:0537296761" className="flex items-center gap-2.5 hover:text-[#29463D] font-medium transition-colors text-[#26302D]">
                      <Phone className="w-4 h-4 text-[#29463D]" />
                      <span dir="ltr">05 37 29 67 61</span>
                    </a>
                    <a href="tel:+212537296761" className="flex items-center gap-2.5 hover:text-[#29463D] transition-colors text-[#5F6C67]">
                      <Phone className="w-4 h-4 text-[#6F8F82]" />
                      <span dir="ltr">+212 537 29 67 61</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="tel:0537296761"
                    className="inline-flex items-center gap-2 bg-[#29463D] hover:bg-[#1F3730] text-white px-5 py-2.5 rounded-md text-xs font-sans font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Appeler le cabinet</span>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=218+Avenue+Mohamed+Ben+Abdellah+Rabat+Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white border border-[#E2DDD5] text-[#26302D] hover:bg-[#FAF9F6] px-5 py-2.5 rounded-md text-xs font-sans font-medium transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#29463D]" />
                    <span>{t.map.directions}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#29463D] block">
                  {t.hours.tag}
                </span>
                <h2 className="text-3xl font-serif font-normal text-[#26302D]">{t.hours.title}</h2>
              </div>

              <div className="p-6 bg-[#FAF9F6] border border-[#E2DDD5] rounded-xl space-y-4 shadow-xs">
                <div className="space-y-3 text-sm text-[#26302D]">
                  <div className="flex justify-between border-b border-[#E2DDD5] pb-2.5">
                    <span>{t.hours.mon}</span>
                    <span className="font-semibold">{t.hours.monTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E2DDD5] pb-2.5">
                    <span>{t.hours.tue}</span>
                    <span className="font-semibold">{t.hours.tueTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E2DDD5] pb-2.5">
                    <span>{t.hours.wed}</span>
                    <span className="font-semibold">{t.hours.wedTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E2DDD5] pb-2.5">
                    <span>{t.hours.thu}</span>
                    <span className="font-semibold">{t.hours.thuTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E2DDD5] pb-2.5">
                    <span>{t.hours.fri}</span>
                    <span className="font-semibold">{t.hours.friTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E2DDD5] pb-2.5">
                    <span>{t.hours.sat}</span>
                    <span className="font-semibold">{t.hours.satTime}</span>
                  </div>
                  <div className="flex justify-between text-[#29463D] font-medium pt-1">
                    <span>{t.hours.sun}</span>
                    <span>{t.hours.sunTime}</span>
                  </div>
              </div>

              {/* Verified Location Embed */}
              <div className="rounded-xl overflow-hidden border border-[#E2DDD5] shadow-xs bg-white p-1">
                <iframe
                  title="Localisation Cabinet Dr Sanaa Belabbess Rabat"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.726!2d-6.8780!3d33.9980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c8d37442ad5%3A0x8e8d8930e4450c5a!2sAvenue%20Mohamed%20Ben%20Abdellah%2C%20Rabat!5e0!3m2!1sfr!2sma!4v1698000000000!5m2!1sfr!2sma"
                  width="100%"
                  height="260"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. FINAL CONTACT CTA */}
      <section className="py-16 md:py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-[#29463D] text-white rounded-2xl p-10 md:p-14 text-center space-y-6 shadow-md relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-serif font-normal leading-tight">
              {t.cta.title}
            </h2>
            <p className="text-white/85 text-base max-w-xl mx-auto font-sans leading-relaxed">
              {t.cta.desc}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-[#29463D] hover:bg-slate-50 px-7 py-3.5 rounded-md font-sans text-sm font-medium transition-colors shadow-xs inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.cta.onlineBooking}</span>
              </Link>

              <a
                href="tel:0537296761"
                className="bg-[#1F3730] hover:bg-[#172B26] text-white px-7 py-3.5 rounded-md font-sans text-sm font-medium transition-colors border border-white/20 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t.cta.callBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
