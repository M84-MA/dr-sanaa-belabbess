import { GraduationCap, Award, Building2, ShieldCheck, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { lang, t } = useLanguage();

  const experiences = [
    {
      title: t.profile.bullets[0].title,
      institution: t.profile.bullets[0].detail,
      tag: t.profile.bullets[0].tag,
      icon: <GraduationCap className="w-5 h-5 text-[#7B2638]" />
    },
    {
      title: t.profile.bullets[1].title,
      institution: t.profile.bullets[1].detail,
      tag: t.profile.bullets[1].tag,
      icon: <Award className="w-5 h-5 text-[#7B2638]" />
    },
    {
      title: t.profile.bullets[2].title,
      institution: t.profile.bullets[2].detail,
      tag: t.profile.bullets[2].tag,
      icon: <Building2 className="w-5 h-5 text-[#7897B8]" />
    },
    {
      title: t.profile.bullets[3].title,
      institution: t.profile.bullets[3].detail,
      tag: t.profile.bullets[3].tag,
      icon: <Building2 className="w-5 h-5 text-[#7897B8]" />
    },
    {
      title: t.profile.bullets[4].title,
      institution: t.profile.bullets[4].detail,
      tag: t.profile.bullets[4].tag,
      icon: <ShieldCheck className="w-5 h-5 text-[#7B2638]" />
    }
  ];

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#7B2638] block">
            {t.profile.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-[#17202A]">
            {t.hero.title}
          </h1>
          <p className="text-xl font-serif italic text-[#7B2638]">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Editorial Visual */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-[#E6E3DF] overflow-hidden bg-white p-2 shadow-sm">
              <img 
                src="/images/ultrasound-detail.jpg" 
                alt="Formation médicale Dr Aziza L'Aarje" 
                className="w-full h-[520px] object-cover rounded-lg"
              />
            </div>
            
            <div className="p-6 bg-white border border-[#E6E3DF] rounded-xl space-y-2 text-xs text-[#68727D]">
              <h4 className="font-sans font-semibold text-[#17202A] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#7B2638]" />
                {t.academic.title}
              </h4>
              <p className="leading-relaxed">
                {t.academic.desc}
              </p>
            </div>
          </div>

          {/* Right Presentation & Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-normal text-[#17202A] leading-tight">
                {t.profile.heading}
              </h2>
              <p className="text-[#68727D] text-base leading-relaxed">
                {t.profile.subtitle}
              </p>
            </div>

            {/* Vertical Editorial Timeline */}
            <div className="space-y-8 relative border-l rtl:border-r rtl:border-l-0 border-[#E6E3DF] pl-6 rtl:pr-6 rtl:pl-0 pt-2">
              {experiences.map((exp, index) => (
                <div key={index} className="relative space-y-1">
                  <span className="absolute -left-[31px] rtl:-right-[31px] rtl:left-auto top-1.5 w-2.5 h-2.5 rounded-full bg-[#7B2638]"></span>
                  <span className="text-[11px] font-mono text-[#7B2638] font-semibold uppercase tracking-wider block">
                    {exp.tag}
                  </span>
                  <h3 className="text-lg font-serif font-normal text-[#17202A]">{exp.title}</h3>
                  <p className="text-sm text-[#68727D] font-sans">{exp.institution}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
