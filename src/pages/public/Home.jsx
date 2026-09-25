import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  ShieldCheck, 
  UserCheck, 
  Phone, 
  Calendar,
  ArrowRight,
  MapPin,
  Clock,
  AlertTriangle,
  Info,
  BookOpen,
  Sparkles,
  Award,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Home = () => {
  const { lang, t } = useLanguage();

  const getExpertiseIcon = (iconName) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#7B2638]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#7B2638]" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-[#7B2638]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#7B2638]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#7B2638]" />;
      default: return <HeartPulse className="w-5 h-5 text-[#7B2638]" />;
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
    <div className="w-full bg-[#FAF9F6] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 border-b border-[#E6E3DF] overflow-hidden">
        
        {/* SWIMMING AMBIENT BACKGROUND BLOBS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-[#7B2638]/10 via-[#C98C98]/15 to-transparent blur-3xl animate-swim-slow"></div>
          <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-gradient-to-bl from-[#7897B8]/15 via-[#FAF9F6] to-transparent blur-3xl animate-swim-reverse"></div>
          <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-gradient-to-t from-[#7B2638]/5 to-transparent blur-2xl animate-pulse-glow"></div>
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
              <div className="inline-flex items-center gap-2 bg-[#F9F3F4] border border-[#7B2638]/15 text-[#7B2638] px-3.5 py-1.5 rounded-full text-[11px] font-sans font-semibold tracking-[0.15em] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.hero.eyebrow}</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#17202A] leading-[1.12] tracking-tight">
                  {t.hero.title}
                </h1>
                
                {/* Animated ECG Pulse Line under title */}
                <div className="w-full max-w-md h-6 my-2 opacity-75">
                  <svg className="w-full h-full" viewBox="0 0 500 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M0 15 H140 L150 4 L160 26 L170 8 L180 20 L190 15 H320 L330 4 L340 26 L350 8 L360 20 L370 15 H500"
                      stroke="#7B2638"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0.2 }}
                      animate={{ pathLength: [0, 1, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </svg>
                </div>

                <p className="text-xl font-serif italic text-[#7B2638] tracking-wide">
                  {t.hero.subtitle}
                </p>
              </div>

              <p className="text-base md:text-lg text-[#68727D] font-sans leading-relaxed max-w-xl">
                {t.hero.desc}
              </p>

              {/* Action Links */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/booking"
                    className="bg-[#7B2638] hover:bg-[#681F2E] text-white px-7 py-3.5 rounded-md text-sm font-sans font-medium transition-all shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.hero.ctaBooking}</span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ x: 4 }}>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 text-sm font-sans font-medium text-[#17202A] hover:text-[#7B2638] transition-colors py-3.5 px-4"
                  >
                    <span>{t.hero.discoverProfile}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                </motion.div>
              </div>

              {/* Minimal Phone Lines Note */}
              <div className="pt-4 border-t border-[#E6E3DF] flex flex-wrap items-center gap-6 text-xs text-[#68727D]">
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#7B2638]" />
                  <a href="tel:+212522503315" className="hover:text-[#17202A] font-medium transition-colors">+212 522 50 33 15</a>
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#7897B8]" />
                  <a href="tel:+212612154032" className="hover:text-[#17202A] font-medium transition-colors">+212 612 15 40 32</a>
                </span>
              </div>
            </motion.div>

            {/* RIGHT: Animated Floating Logo Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 flex items-center justify-center py-4 lg:py-8 relative"
            >
              <div className="relative w-full flex items-center justify-center p-2 lg:p-6">
                
                {/* Soft Glowing Pulse Aura */}
                <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-[#7B2638]/12 via-[#C98C98]/10 to-transparent blur-3xl animate-pulse-glow pointer-events-none"></div>

                {/* Main Swimming Logo Image */}
                <motion.img 
                  src="/logo.png" 
                  alt="Logo Cabinet Dr Aziza L'Aarje Casablanca" 
                  className="w-full h-auto max-h-[420px] lg:max-h-[490px] object-contain relative z-10 cursor-pointer drop-shadow-sm"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  whileHover={{ scale: 1.03 }}
                />

                {/* Floating Swimming Badge 1: Échographie & Doppler */}
                <motion.div 
                  className="absolute top-2 left-0 sm:left-2 bg-white/90 backdrop-blur-md border border-[#E6E3DF] rounded-xl p-3 shadow-md flex items-center gap-3 z-20"
                  animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F9F3F4] text-[#7B2638] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#17202A] leading-tight">Échographie & Doppler</p>
                    <p className="text-[10px] text-[#7B2638] font-medium flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Haute Précision
                    </p>
                  </div>
                </motion.div>

                {/* Floating Swimming Badge 2: Cardiologie Spécialisée */}
                <motion.div 
                  className="absolute bottom-4 right-0 sm:right-2 bg-white/90 backdrop-blur-md border border-[#E6E3DF] rounded-xl p-3 shadow-md flex items-center gap-3 z-20"
                  animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F9F3F4] text-[#7B2638] flex items-center justify-center shrink-0">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#17202A] leading-tight">Cardiologie Spécialisée</p>
                    <p className="text-[10px] text-[#68727D]">Suivi Personnalisé</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E6E3DF] relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#17202A]">
              {t.intro.title}
            </h2>
            <p className="text-[#68727D] text-base leading-relaxed">
              {t.intro.desc}
            </p>
          </motion.div>

          {/* 3 Columns */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-[#E6E3DF]">
            
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="pt-6 md:pt-0 md:px-6 first:px-0 space-y-3 transition-transform"
            >
              <span className="text-xs font-mono text-[#7B2638] font-bold block">01</span>
              <h3 className="text-xl font-serif font-normal text-[#17202A]">{t.intro.cardioTitle}</h3>
              <p className="text-sm text-[#68727D] leading-relaxed">
                {t.intro.cardioDesc}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="pt-6 md:pt-0 md:px-6 space-y-3 transition-transform"
            >
              <span className="text-xs font-mono text-[#7B2638] font-bold block">02</span>
              <h3 className="text-xl font-serif font-normal text-[#17202A]">{t.intro.echoCardioTitle}</h3>
              <p className="text-sm text-[#68727D] leading-relaxed">
                {t.intro.echoCardioDesc}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="pt-6 md:pt-0 md:px-6 space-y-3 transition-transform"
            >
              <span className="text-xs font-mono text-[#7B2638] font-bold block">03</span>
              <h3 className="text-xl font-serif font-normal text-[#17202A]">{t.intro.echoVascTitle}</h3>
              <p className="text-sm text-[#68727D] leading-relaxed">
                {t.intro.echoVascDesc}
              </p>
            </motion.div>

          </div>

        </div>
      </section>


      {/* 3. ABOUT / PROFILE SECTION */}
      <section className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E6E3DF] relative overflow-hidden">
        
        {/* Background Swimming Glow */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#7B2638]/5 blur-3xl rounded-full animate-swim-slow pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-xl border border-[#E6E3DF] overflow-hidden bg-white p-2 shadow-sm group">
                <img 
                  src="/images/ultrasound-detail.jpg" 
                  alt="Échographie cardiaque et vasculaire" 
                  className="w-full h-[480px] object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -right-4 bg-white border border-[#E6E3DF] rounded-xl p-4 shadow-lg flex items-center gap-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-full bg-[#7B2638] text-white flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#17202A]">Faculté de Casablanca & Bordeaux</p>
                  <p className="text-[11px] text-[#7B2638]">Diplômes de Spécialité</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Profile & Timeline */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block">
                  {t.profile.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#17202A] leading-tight">
                  {t.profile.heading}
                </h2>
              </div>

              {/* Editorial Vertical Timeline */}
              <div className="space-y-6 relative border-l rtl:border-r rtl:border-l-0 border-[#E6E3DF] pl-6 rtl:pr-6 rtl:pl-0">
                {t.profile.bullets.map((bullet, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative space-y-1"
                  >
                    <span className="absolute -left-[31px] rtl:-right-[31px] rtl:left-auto top-1.5 w-2.5 h-2.5 rounded-full bg-[#7B2638]"></span>
                    <h4 className="text-base font-sans font-medium text-[#17202A]">{bullet.title}</h4>
                    <p className="text-sm text-[#68727D] font-sans">{bullet.detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Publications Note */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="p-5 bg-white border border-[#E6E3DF] rounded-lg space-y-2 text-xs text-[#68727D] shadow-subtle transition-transform"
              >
                <h5 className="font-sans font-semibold text-[#17202A] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#7B2638]" />
                  {t.academic.title}
                </h5>
                <p className="leading-relaxed">
                  {t.academic.desc}
                </p>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* 4. MEDICAL EXPERTISE SECTION */}
      <section className="py-20 md:py-28 bg-[#F4F5F3] border-b border-[#E6E3DF] relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#17202A]">
              {t.expertise.title}
            </h2>
            <p className="text-[#68727D] text-base">
              {t.expertise.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.expertise.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="bg-white border border-[#E6E3DF] rounded-xl p-8 space-y-4 shadow-subtle hover:border-[#7B2638]/40 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-md bg-[#F9F3F4] flex items-center justify-center">
                  {getExpertiseIcon(item.icon)}
                </div>
                <h3 className="text-xl font-serif font-normal text-[#17202A]">{item.title}</h3>
                <p className="text-sm text-[#68727D] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. PATIENT JOURNEY SECTION */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E6E3DF]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#17202A]">
              {t.patientJourney.title}
            </h2>
            <p className="text-[#68727D] text-base">
              {t.patientJourney.subtitle}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {patientSteps.map((step, idx) => (
              <motion.div 
                key={step.num} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="space-y-3 border-t border-[#E6E3DF] pt-6 transition-all"
              >
                <span className="text-xs font-mono text-[#7B2638] font-bold block">{step.num}</span>
                <h3 className="text-lg font-serif font-normal text-[#17202A]">{step.title}</h3>
                <p className="text-xs text-[#68727D] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 6. LOCATION & CONTACT SECTION */}
      <section className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E6E3DF]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column: Cabinet & Phones */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block">
                  {t.address.tag}
                </span>
                <h2 className="text-3xl font-serif font-normal text-[#17202A]">{t.address.title}</h2>
                <p className="text-sm text-[#68727D]">{t.address.subtitle}</p>
              </div>

              <div className="space-y-4 pt-2">
                <motion.div whileHover={{ y: -3 }} className="p-5 bg-white border border-[#E6E3DF] rounded-xl space-y-3 shadow-subtle">
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#17202A]">
                    {t.address.dirPhonesTitle}
                  </h4>
                  <div className="space-y-2 text-sm text-[#17202A]">
                    <a href="tel:+212522503315" className="flex items-center gap-3 hover:text-[#7B2638] font-medium transition-colors">
                      <Phone className="w-4 h-4 text-[#7B2638]" />
                      <span>+212 522 50 33 15</span>
                    </a>
                    <a href="tel:+212612154032" className="flex items-center gap-3 hover:text-[#7B2638] font-medium transition-colors">
                      <Phone className="w-4 h-4 text-[#7897B8]" />
                      <span>+212 612 15 40 32</span>
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -3 }} className="p-5 bg-white border border-[#E6E3DF] rounded-xl space-y-2 text-xs text-[#68727D] shadow-subtle">
                  <h4 className="font-sans font-semibold text-[#17202A] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#7B2638]" />
                    {t.address.dirAddressesTitle}
                  </h4>
                  <p className="leading-relaxed">
                    • {t.address.primaryDetail}<br />
                    • {t.address.secondaryDetail}
                  </p>
                  <div className="pt-2 text-[11px] text-[#7B2638] font-medium flex items-center gap-1.5 border-t border-[#E6E3DF] mt-2">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.address.disclaimer}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Opening Hours */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block">
                  {t.hours.tag}
                </span>
                <h2 className="text-3xl font-serif font-normal text-[#17202A]">{t.hours.title}</h2>
              </div>

              <motion.div whileHover={{ y: -3 }} className="p-6 bg-white border border-[#E6E3DF] rounded-xl space-y-4 shadow-subtle">
                <div className="space-y-3 text-sm text-[#17202A]">
                  <div className="flex justify-between border-b border-[#E6E3DF] pb-3">
                    <span>{t.hours.monFri}</span>
                    <span className="font-semibold">{t.hours.monFriTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E6E3DF] pb-3">
                    <span>{t.hours.sat}</span>
                    <span className="font-semibold">{t.hours.satTime}</span>
                  </div>
                  <div className="flex justify-between text-[#7B2638] font-medium pt-1">
                    <span>{t.hours.sun}</span>
                    <span>{t.hours.sunTime}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E6E3DF] text-[11px] text-[#68727D] flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#7897B8] shrink-0 mt-0.5" />
                  <p>{t.hours.disclaimer}</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 7. PATIENT REVIEWS SECTION */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E6E3DF]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-3"
          >
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block">
              {t.reviews.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#17202A]">
              {t.reviews.title}
            </h2>
            <p className="text-[#68727D] text-sm leading-relaxed">
              {t.reviews.subtitle}
            </p>

            {/* Aggregate Rating Badge */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-4 bg-[#FAF9F6] border border-[#E6E3DF] rounded-xl px-6 py-4 mt-4 shadow-subtle"
            >
              <div className="text-center">
                <div className="text-4xl font-serif font-normal text-[#17202A]">{t.reviews.rating}</div>
                <div className="flex items-center justify-center gap-0.5 mt-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 text-[#F59E0B] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="h-10 w-px bg-[#E6E3DF]" />
              <div className="text-left">
                <p className="text-sm font-sans font-medium text-[#17202A]">{t.reviews.total}</p>
                <p className="text-xs text-[#68727D]">{t.reviews.source}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Review Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.reviews.items.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: review.id * 0.07 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="bg-[#FAF9F6] border border-[#E6E3DF] rounded-xl p-6 space-y-4 hover:border-[#7B2638]/40 shadow-subtle transition-all"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-3.5 h-3.5 text-[#F59E0B] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className={`text-sm text-[#17202A] leading-relaxed ${review.lang === 'ar' ? 'font-arabic text-right' : ''}`} dir={review.lang === 'ar' ? 'rtl' : 'ltr'}>
                  "{review.text}"
                </p>

                {/* Reviewer */}
                <div className="flex items-center justify-between pt-2 border-t border-[#E6E3DF]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7B2638]/10 flex items-center justify-center">
                      <span className="text-xs font-sans font-semibold text-[#7B2638]">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold text-[#17202A]">{review.name}</p>
                      <p className="text-[10px] text-[#68727D]">{review.date}</p>
                    </div>
                  </div>
                  {/* Google G icon */}
                  <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 8. GOOGLE MAPS SECTION */}
      <section className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E6E3DF]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Info */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block">
                  {t.map.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#17202A]">
                  {t.map.title}
                </h2>
                <p className="text-sm text-[#68727D] leading-relaxed">
                  {t.map.subtitle}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-white border border-[#E6E3DF] rounded-xl shadow-subtle">
                  <MapPin className="w-5 h-5 text-[#7B2638] shrink-0 mt-0.5" />
                  <div className="text-sm text-[#17202A]">
                    <p className="font-medium">Résidence Ryad Al Quds</p>
                    <p className="text-[#68727D] text-xs mt-0.5">1er étage (par ascenseur), Angle Bd Al Qods et Bd Haifa, Casablanca 20480</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white border border-[#E6E3DF] rounded-xl shadow-subtle">
                  <Phone className="w-5 h-5 text-[#7B2638] shrink-0" />
                  <div className="text-sm">
                    <a href="tel:+212522503315" className="font-medium text-[#17202A] hover:text-[#7B2638] transition-colors">+212 522 50 33 15</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white border border-[#E6E3DF] rounded-xl shadow-subtle">
                  <Clock className="w-5 h-5 text-[#7B2638] shrink-0" />
                  <div className="text-sm text-[#17202A]">
                    <p className="font-medium">{t.hours.monFri}: {t.hours.monFriTime}</p>
                    <p className="text-[#68727D] text-xs mt-0.5">{t.hours.sat}: {t.hours.satTime}</p>
                  </div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://maps.google.com/?q=Résidence+Ryad+Al+Quds+Angle+Bd+Al+Qods+Bd+Haifa+Casablanca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7B2638] hover:bg-[#681F2E] text-white px-6 py-3 rounded-md text-sm font-sans font-medium transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>{t.map.directions}</span>
              </motion.a>
            </motion.div>

            {/* Right: Map Embed */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden border border-[#E6E3DF] shadow-md bg-white p-1.5"
            >
              <iframe
                title="Localisation Dr Aziza L'Aarje Casablanca"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.868!2d-7.6358!3d33.5679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d282b79e22cb%3A0x7e8b5f2e0ef5e0b3!2sR%C3%A9sidence%20Ryad%20Al%20Quds%2C%20Angle%20Bd%20Al%20Qods%20et%20Bd%20Haifa%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1698000000000!5m2!1sfr!2sma"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

          </div>
        </div>
      </section>


      {/* 9. PREMIER APPOINTMENT CTA */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#7B2638] text-white rounded-xl p-10 md:p-16 text-center space-y-6 shadow-xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl animate-pulse-glow pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-serif font-normal leading-tight relative z-10">
              {t.cta.title}
            </h2>
            <p className="text-white/80 text-base max-w-xl mx-auto font-sans leading-relaxed relative z-10">
              {t.cta.desc}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/booking"
                  className="bg-white text-[#7B2638] hover:bg-slate-50 px-8 py-3.5 rounded-md font-sans text-sm font-medium transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.cta.onlineBooking}</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="tel:+212522503315"
                  className="bg-[#5E1D2A] hover:bg-[#4E1823] text-white px-8 py-3.5 rounded-md font-sans text-sm font-medium transition-colors border border-white/20 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.cta.callBtn}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
