import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      cabinet: "Cabinet",
      contact: "Contact",
      booking: "Prendre rendez-vous",
      callUs: "Appeler le cabinet",
      langSwitch: "Langue",
    },
    hero: {
      eyebrow: "MÉDECINE GÉNÉRALE · RABAT",
      badge: "Médecin Généraliste à Rabat • Maroc",
      title: "Dr Sanaa Belabbess",
      subtitle: "Médecin Généraliste",
      subHeading: "Consultation, prévention & suivi médical personnalisé",
      desc: "Une prise en charge médicale attentive, accessible et personnalisée à Rabat.",
      ctaBooking: "Prendre rendez-vous",
      discoverProfile: "Découvrir le cabinet",
      ctaCall: "Appeler: 05 37 29 67 61",
      altCall: "+212 537 29 67 61",
    },
    intro: {
      title: "Une médecine générale centrée sur le patient",
      desc: "Prise en charge globale, écoute attentive et soins de proximité pour toute la famille à Rabat.",
      cardioTitle: "Consultation générale",
      cardioDesc: "Évaluation clinique complète, diagnostic et suivi personnalisé de votre état de santé.",
      echoCardioTitle: "Bilan & Prévention",
      echoCardioDesc: "Examens de contrôle, bilan de santé et prévention des facteurs de risque au quotidien.",
      echoVascTitle: "Suivi continu",
      echoVascDesc: "Accompagnement attentif et suivi médical régulier pour le bien-être de chaque patient.",
    },
    expertise: {
      tag: "SERVICES MÉDICAUX",
      title: "Services médicaux",
      subtitle: "Consultations et suivi médical de médecine générale à Rabat.",
      notice: "Services généraux de médecine dispensés au cabinet. Pour toute prestation spécifique, veuillez vous renseigner auprès du secrétariat.",
      ctaTitle: "Besoin d'une consultation ?",
      ctaDesc: "Contactez directement le cabinet pour obtenir des informations ou organiser votre consultation.",
      items: [
        {
          id: "consultation-generale",
          title: "Consultation de médecine générale",
          desc: "Diagnostic, traitement des affections courantes et accompagnement médical global et personnalisé du patient.",
          icon: "Stethoscope"
        },
        {
          id: "suivi-grossesse",
          title: "Suivi de grossesse",
          desc: "Suivi médical complet et attentif tout au long de la grossesse pour la mère et l'enfant.",
          icon: "Heart"
        },
        {
          id: "echographie",
          title: "Échographie (Diplôme)",
          desc: "Réalisation d'échographies au cabinet grâce à un diplôme spécialisé en échographie médicale.",
          icon: "Scan"
        },
        {
          id: "nutrition",
          title: "Nutrition & Diététique (Diplôme)",
          desc: "Conseils nutritionnels personnalisés et suivi diététique avec diplôme en nutrition et hygiène alimentaire.",
          icon: "Apple"
        },
        {
          id: "ecg",
          title: "Électrocardiogramme (ECG)",
          desc: "Réalisation d'ECG au cabinet pour évaluer la santé cardiaque et dépister d'éventuelles anomalies.",
          icon: "Activity"
        },
        {
          id: "aptitude-conduite",
          title: "Visite médicale – Aptitude à la conduite",
          desc: "Médecin agréée pour réaliser les visites médicales d'aptitude à la conduite automobile.",
          icon: "Car"
        }
      ]
    },
    profile: {
      tag: "À PROPOS DU CABINET",
      title: "À propos",
      heading: "Une médecine générale centrée sur le patient",
      subtitle: "Dr Sanaa Belabbess est diplômée de la Faculté de Médecine et de Pharmacie de Casablanca. Médecin généraliste à Rabat, son cabinet est situé au 218, Av. Sidi Mohamed Ben Abdellah, Hay Sehrij / CYM. Elle offre une approche médicale humaine, rigoureuse et rassurante.",
      bullets: [
        {
          title: "Diplômée – Faculté de Médecine de Casablanca",
          detail: "Formation médicale à la Faculté de Médecine et de Pharmacie de Casablanca — compétences académiques et cliniques éprouvées.",
          tag: "Formation"
        },
        {
          title: "Suivi de grossesse & Échographie",
          detail: "Suivi médical complet de la grossesse et réalisation d'échographies au cabinet (diplôme en échographie).",
          tag: "Spécialités"
        },
        {
          title: "Nutrition, ECG & Aptitude à la conduite",
          detail: "Diplôme en nutrition, électrocardiogramme (ECG) et médecine agréée pour la visite d'aptitude à la conduite.",
          tag: "Services"
        }
      ]
    },
    academic: {
      title: "Formation & Diplômes",
      desc: "Diplômée de la Faculté de Médecine et de Pharmacie de Casablanca — médecin généraliste avec des diplômes complémentaires en échographie et en nutrition.",
      note: "Informations issues de la carte de visite officielle du cabinet."
    },
    patientJourney: {
      title: "Votre parcours de soin au cabinet",
      subtitle: "Une démarche simple et transparente de la prise de rendez-vous au suivi.",
      step1Title: "Écoute attentive",
      step1Desc: "Analyse complète de vos symptômes et de vos besoins de santé lors de la consultation.",
      step2Title: "Examen & Diagnostic",
      step2Desc: "Évaluation clinique rigoureuse et conseils adaptés à votre situation.",
      step3Title: "Traitement adapté",
      step3Desc: "Prescription et recommandations médicales claires pour votre rétablissement.",
      step4Title: "Suivi médical",
      step4Desc: "Accompagnement continu pour maintenir votre santé sur le long terme."
    },
    address: {
      tag: "CABINET & LOCALISATION",
      title: "Le cabinet",
      subtitle: "Rabat, Maroc",
      dirPhonesTitle: "Téléphone du cabinet",
      dirAddressesTitle: "Adresse du cabinet",
      primaryTitle: "Adresse officielle",
      primaryDetail: "218, Av. Sidi Mohamed Ben Abdellah, Hay Sehrij, CYM – Rabat",
      secondaryTitle: "Quartier",
      secondaryDetail: "Hay Sehrij / CYM / Yacoub El Mansour, Rabat",
      area: "Hay Sehrij / CYM / Yacoub El Mansour",
      disclaimer: "Adresse issue de la carte de visite officielle du cabinet."
    },
    hours: {
      tag: "HORAIRES DE CONSULTATION",
      title: "Horaires d'ouverture",
      mon: "Lundi",
      monTime: "09:00 – 16:30",
      tue: "Mardi",
      tueTime: "09:00 – 17:00",
      wed: "Mercredi",
      wedTime: "09:00 – 17:00",
      thu: "Jeudi",
      thuTime: "09:00 – 17:00",
      fri: "Vendredi",
      friTime: "09:00 – 17:00",
      sat: "Samedi",
      satTime: "09:00 – 13:00",
      sun: "Dimanche",
      sunTime: "Fermé",
      disclaimer: "Horaires indicatifs d'annuaires publics — à confirmer avec le cabinet."
    },
    contact: {
      tag: "CONTACT & ACCÈS",
      title: "Contactez le cabinet",
      subtitle: "Contactez directement le cabinet pour obtenir des informations ou organiser votre consultation.",
      mainPhone: "Téléphone du cabinet",
      mainSub: "Ligne directe",
      mainNum: "05 37 29 67 61",
      intNum: "+212 537 29 67 61",
      city: "Ville & Secteur",
      cityVal: "Rabat, Maroc (Hay Sahrij / CYM)",
      langSpoken: "Langue parlée",
      langVal: "Français",
      callButtonMain: "Appeler le cabinet (05 37 29 67 61)",
      callButtonInt: "Appeler: +212 537 29 67 61"
    },
    booking: {
      tag: "PRISE DE RENDEZ-VOUS",
      title: "Demande de rendez-vous",
      desc: "Remplissez ce formulaire pour transmettre votre demande de rendez-vous au secrétariat du cabinet.",
      nameLabel: "Nom Complet *",
      phoneLabel: "Numéro de Téléphone *",
      expertiseLabel: "Motif de Consultation *",
      selectExpertise: "Sélectionnez le motif",
      dateLabel: "Date souhaitée *",
      timeLabel: "Créneau horaire *",
      noteLabel: "Message / Précisions (Optionnel)",
      submitButton: "Soumettre la demande",
      confirmNotice: "Votre demande sera transmise pour confirmation avec le secrétariat.",
      modalTitle: "Demande enregistrée",
      modalDesc: "Contactez directement le cabinet pour valider votre rendez-vous :",
      modalClose: "Fermer"
    },
    cta: {
      title: "Besoin d'une consultation ?",
      desc: "Contactez directement le cabinet pour obtenir des informations ou organiser votre consultation.",
      onlineBooking: "Prendre rendez-vous",
      callBtn: "Appeler le cabinet: 05 37 29 67 61"
    },
    onlinePresence: "Informations issues de répertoires publics professionnels.",
    reviews: {
      tag: "AVIS PATIENTS GOOGLE",
      title: "Ce que disent les patients",
      subtitle: "Avis authentiques publiés sur Google Maps — Dr Sanaa Belabbess à Rabat",
      rating: "4,7",
      total: "sur 35 avis",
      source: "Source: Google Maps",
      viewReviews: "Voir tous les avis sur Google Maps",
      items: [
        {
          id: 1,
          name: "blake Saad",
          rating: 5,
          date: "Il y a 5 mois",
          lang: "ar",
          text: "الدكتوره سناء من أطيب خلق الله ،جمعت بين الخبرة و الأخلاق كذلك الفتاة في الإستقبال فتاة طيبة و محترمة و متقنة لعملها جزاكم الله كل خير."
        },
        {
          id: 2,
          name: "mama Ana",
          rating: 5,
          date: "Il y a 2 mois",
          lang: "fr",
          text: "Dr je la recommande forcément toujours à l'écoute, patiente, compréhensive, respectueuse et souriante."
        },
        {
          id: 3,
          name: "Abd Elhak EL KEBBABY",
          rating: 5,
          date: "Il y a 1 an",
          lang: "fr",
          text: "Top professionnelle, je mets 5 pour la capacité d'écoute de Mme SANAA BELABBESS, le patient peut prendre tout le temps nécessaire pour décrire son état de santé."
        },
        {
          id: 4,
          name: "Hanane Lebbali",
          rating: 5,
          date: "Il y a 1 an",
          lang: "fr",
          text: "Médecin compétente, toujours à l'écoute, je la recommande vivement."
        },
        {
          id: 5,
          name: "sabrina sabri",
          rating: 5,
          date: "Il y a 2 ans",
          lang: "en",
          text: "The best doctor for me, she listens to you and gives you solutions before the examination, and she is a non-materialistic person."
        },
        {
          id: 6,
          name: "imane essalami",
          rating: 5,
          date: "Il y a 1 an",
          lang: "fr",
          text: "Je la recommande. Très compétente et humaine."
        },
        {
          id: 7,
          name: "Mustapha benhsain",
          rating: 5,
          date: "Il y a 3 ans",
          lang: "fr",
          text: "Super Docteur à l'écoute, prendre le temps d'examiner avec minutie."
        },
        {
          id: 8,
          name: "Mostafa Ouldkhyi",
          rating: 5,
          date: "Il y a 3 ans",
          lang: "ar",
          text: "لهلا يخطيك علينا ادكتورة"
        }
      ]
    },
    map: {
      tag: "LOCALISATION GOOGLE MAPS",
      title: "Nous trouver à Rabat",
      subtitle: "218 Avenue Mohamed Ben Abdellah, Quartier Yacoub El Mansour / Hay Sahrij, Rabat",
      directions: "Voir l'itinéraire"
    },
    footer: {
      navHeader: "Navigation",
      contactHeader: "Contact",
      langHeader: "Langues",
      rights: "Dr Sanaa Belabbess — Médecin Généraliste à Rabat. Tous droits réservés.",
      disclaimerNote: "Informations réunies à titre informatif selon les données publiques répertoriées."
    }
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن العيادة",
      services: "الخدمات",
      cabinet: "العيادة",
      contact: "التواصل",
      booking: "حجز موعد",
      callUs: "الاتصال بالعيادة",
      langSwitch: "اللغة",
    },
    hero: {
      eyebrow: "طب عام · الرباط",
      badge: "طبيبة عامة بالرباط • المغرب",
      title: "د. سناء بلعباس",
      subtitle: "طبيبة عامة",
      subHeading: "استشارات، وقاية ومتابعة طبية شخصية",
      desc: "رعاية طبية دقيقة، ميسرة ومخصصة بمدينة الرباط.",
      ctaBooking: "حجز موعد طبي",
      discoverProfile: "التعرف على العيادة",
      ctaCall: "الاتصال: 61 67 29 37 05",
      altCall: "+212 537 29 67 61",
    },
    intro: {
      title: "طب عام يضع المريض في صلب الاهتمام",
      desc: "رعاية صحية شاملة، إنصات دقيق ومتابعة قريبة لكافة أفراد العائلة بالرباط.",
      cardioTitle: "استشارة طبية عامة",
      cardioDesc: "تقييم سريري شامل، تشخيص دقيق ومتابعة شخصية لحالتك الصحية.",
      echoCardioTitle: "فحص ووقاية",
      echoCardioDesc: "فحوصات دورية، تقييم شامل للصحة والوقاية من المخاطر الصحية.",
      echoVascTitle: "متابعة مستمرة",
      echoVascDesc: "مواكبة طبية منتظمة لضمان سلامة وصحة كل مريض.",
    },
    expertise: {
      tag: "الخدمات الطبية",
      title: "الخدمات الطبية",
      subtitle: "استشارات ومتابعة طبية عامة بالرباط.",
      notice: "الخدمات المعروضة تشمل الطب العام. للحصول على تفاصيل إضافية، يرجى التواصل مع كتابة العيادة.",
      ctaTitle: "هل تحتاج إلى استشارة طبية؟",
      ctaDesc: "اتصل مباشرة بالعيادة للحصول على معلومات أو تنظيم موعد استشارتك.",
      items: [
        {
          id: "consultation-generale",
          title: "استشارة طبية عامة",
          desc: "تشخيص وعلاج الأمراض الشائعة ومتابعة شاملة ومخصصة للمريض.",
          icon: "Stethoscope"
        },
        {
          id: "suivi-grossesse",
          title: "متابعة الحمل",
          desc: "متابعة طبية متكاملة ودقيقة طوال فترة الحمل لصحة الأم والجنين.",
          icon: "Heart"
        },
        {
          id: "echographie",
          title: "السونار / الإيكوغرافيا (دبلوم)",
          desc: "إجراء فحوصات السونار بالعيادة بفضل دبلوم متخصص في الإيكوغرافيا الطبية.",
          icon: "Scan"
        },
        {
          id: "nutrition",
          title: "التغذية والحمية (دبلوم)",
          desc: "نصائح غذائية مخصصة ومتابعة للحمية مع دبلوم في التغذية والنظام الغذائي.",
          icon: "Apple"
        },
        {
          id: "ecg",
          title: "تخطيط القلب (ECG)",
          desc: "إجراء تخطيط القلب بالعيادة لتقييم الصحة القلبية والكشف عن الاضطرابات.",
          icon: "Activity"
        },
        {
          id: "aptitude-conduite",
          title: "الفحص الطبي للقدرة على السياقة",
          desc: "طبيبة معتمدة لإجراء الفحص الطبي الخاص بالقدرة على قيادة السيارات.",
          icon: "Car"
        }
      ]
    },
    profile: {
      tag: "عن العيادة الطبية",
      title: "عن العيادة",
      heading: "طب عام يضع المريض في صلب الاهتمام",
      subtitle: "د. سناء بلعباس خريجة كلية الطب والصيدلة بالدار البيضاء. طبيبة عامة بالرباط، تقع عيادتها في 218 شارع سيدي محمد بن عبد الله، حي السهريج، CYM. تقدم رعاية طبية إنسانية، دقيقة ومطمئنة.",
      bullets: [
        {
          title: "خريجة كلية الطب والصيدلة بالدار البيضاء",
          detail: "تكوين طبي أكاديمي وسريري متميز من كلية الطب والصيدلة بالدار البيضاء.",
          tag: "الشهادة"
        },
        {
          title: "متابعة الحمل والسونار والتغذية",
          detail: "متابعة الحمل، دبلوم في الإيكوغرافيا ودبلوم في التغذية والنظام الغذائي.",
          tag: "التخصصات"
        },
        {
          title: "تخطيط القلب والسياقة والتغذية",
          detail: "إجراء تخطيط القلب (ECG) وفحص القدرة على السياقة كطبيبة معتمدة.",
          tag: "الخدمات"
        }
      ]
    },
    academic: {
      title: "الشهادة والتكوين",
      desc: "خريجة كلية الطب والصيدلة بالدار البيضاء — طبيبة عامة بدبلومات في الإيكوغرافيا والتغذية.",
      note: "المعلومات مستخرجة من البطاقة الرسمية للعيادة."
    },
    patientJourney: {
      title: "مسار الرعاية الخاصة بك في العيادة",
      subtitle: "خطوات بسيطة وشفافة من طلب الموعد حتى المتابعة.",
      step1Title: "الإنصات الدقيق",
      step1Desc: "دراسة شاملة للأعراض والاحتياجات الصحية خلال الاستشارة.",
      step2Title: "الفحص والتشخيص",
      step2Desc: "فحص سريري دقيق ونصائح طبية مخصصة لحالتك.",
      step3Title: "العلاج المناسب",
      step3Desc: "وصفات وإرشادات طبية واضحة لتعافيك.",
      step4Title: "المتابعة الطبية",
      step4Desc: "متابعة مستمرة للحفاظ على صحتك على المدى الطويل."
    },
    address: {
      tag: "العيادة والموقع",
      title: "العيادة الطبية",
      subtitle: "الرباط، المغرب",
      dirPhonesTitle: "هاتف العيادة",
      dirAddressesTitle: "عنوان العيادة",
      primaryTitle: "العنوان الرسمي",
      primaryDetail: "218، شارع سيدي محمد بن عبد الله، حي السهريج، CYM – الرباط",
      secondaryTitle: "الحي",
      secondaryDetail: "حي السهريج / CYM / يعقوب المنصور، الرباط",
      area: "حي السهريج / CYM / يعقوب المنصور",
      disclaimer: "العنوان مستخرج من البطاقة الرسمية للعيادة."
    },
    hours: {
      tag: "أوقات العيادة والاستشارات",
      title: "أوقات العمل",
      mon: "الإثنين",
      monTime: "09:00 – 16:30",
      tue: "الثلاثاء",
      tueTime: "09:00 – 17:00",
      wed: "الأربعاء",
      wedTime: "09:00 – 17:00",
      thu: "الخميس",
      thuTime: "09:00 – 17:00",
      fri: "الجمعة",
      friTime: "09:00 – 17:00",
      sat: "السبت",
      satTime: "09:00 – 13:00",
      sun: "الأحد",
      sunTime: "مغلق",
      disclaimer: "مواعيد استرشادية من الأدلة العامة — تتطلب التأكيد المباشر مع العيادة."
    },
    contact: {
      tag: "التواصل والعنوان",
      title: "التواصل مع العيادة",
      subtitle: "اتصل مباشرة بالعيادة للحصول على معلومات أو تنظيم موعد استشارتك.",
      mainPhone: "هاتف العيادة",
      mainSub: "الخط المباشر",
      mainNum: "05 37 29 67 61",
      intNum: "+212 537 29 67 61",
      city: "المدينة والحي",
      cityVal: "الرباط، المغرب (حي السهريج / يعقوب المنصور)",
      langSpoken: "اللغة المعروضة",
      langVal: "الفرنسية",
      callButtonMain: "الاتصال بالعيادة (61 67 29 37 05)",
      callButtonInt: "الاتصال: 61 67 29 537 212+"
    },
    booking: {
      tag: "حجز موعد عبر الإنترنت",
      title: "طلب موعد طبي",
      desc: "قم بتعبئة هذا النموذج لإرسال طلب الموعد إلى أمانة العيادة.",
      nameLabel: "الاسم الكامل *",
      phoneLabel: "رقم الهاتف *",
      expertiseLabel: "سبب الاستشارة *",
      selectExpertise: "اختر سبب الاستشارة",
      dateLabel: "التاريخ المطلوب *",
      timeLabel: "التوقيت المفضل *",
      noteLabel: "ملاحظات إضافية (اختياري)",
      submitButton: "إرسال الطلب",
      confirmNotice: "سيتم تحويل طلبك للتأكيد مع كتابة العيادة.",
      modalTitle: "تم تسجيل الطلب بنجاح",
      modalDesc: "يرجى الاتصال المباشر بالعيادة لتأكيد موعدك النهائي:",
      modalClose: "إغلاق"
    },
    cta: {
      title: "هل تحتاج إلى استشارة طبية؟",
      desc: "اتصل مباشرة بالعيادة للحصول على معلومات أو تنظيم موعد استشارتك.",
      onlineBooking: "طلب موعد طبي",
      callBtn: "الاتصال بالعيادة: 61 67 29 37 05"
    },
    onlinePresence: "المعلومات مستخرجة من الأدلة المهنية العامة.",
    reviews: {
      tag: "تقييمات المرضى GOOGLE",
      title: "ما يقوله المرضى",
      subtitle: "تقييمات حقيقية من Google Maps — د. سناء بلعباس بالرباط",
      rating: "4,7",
      total: "من أصل 35 تقييم",
      source: "المصدر: Google Maps",
      viewReviews: "عرض جميع التقييمات على Google Maps",
      items: [
        {
          id: 1,
          name: "blake Saad",
          rating: 5,
          date: "منذ 5 أشهر",
          lang: "ar",
          text: "الدكتوره سناء من أطيب خلق الله ،جمعت بين الخبرة و الأخلاق كذلك الفتاة في الإستقبال فتاة طيبة و محترمة و متقنة لعملها جزاكم الله كل خير."
        },
        {
          id: 2,
          name: "mama Ana",
          rating: 5,
          date: "منذ شهرين",
          lang: "fr",
          text: "Dr je la recommande forcément toujours à l'écoute, patiente, compréhensive, respectueuse et souriante."
        },
        {
          id: 3,
          name: "Abd Elhak EL KEBBABY",
          rating: 5,
          date: "منذ سنة",
          lang: "fr",
          text: "Top professionnelle, je mets 5 pour la capacité d'écoute de Mme SANAA BELABBESS, le patient peut prendre tout le temps nécessaire pour décrire son état de santé."
        },
        {
          id: 4,
          name: "Hanane Lebbali",
          rating: 5,
          date: "منذ سنة",
          lang: "fr",
          text: "Médecin compétente, toujours à l'écoute, je la recommande vivement."
        },
        {
          id: 5,
          name: "sabrina sabri",
          rating: 5,
          date: "منذ سنتين",
          lang: "en",
          text: "The best doctor for me, she listens to you and gives you solutions before the examination, and she is a non-materialistic person."
        },
        {
          id: 6,
          name: "imane essalami",
          rating: 5,
          date: "منذ سنة",
          lang: "fr",
          text: "Je la recommande. Très compétente et humaine."
        },
        {
          id: 7,
          name: "Mustapha benhsain",
          rating: 5,
          date: "منذ 3 سنوات",
          lang: "fr",
          text: "Super Docteur à l'écoute, prendre le temps d'examiner avec minutie."
        },
        {
          id: 8,
          name: "Mostafa Ouldkhyi",
          rating: 5,
          date: "منذ 3 سنوات",
          lang: "ar",
          text: "لهلا يخطيك علينا ادكتورة"
        }
      ]
    },
    map: {
      tag: "الموقع على الخريطة",
      title: "موقع العيادة بالرباط",
      subtitle: "218 شارع محمد بن عبد الله، حي يعقوب المنصور / حي السهريج، الرباط",
      directions: "الحصول على الاتجاهات"
    },
    footer: {
      navHeader: "التنقل",
      contactHeader: "الاتصال",
      langHeader: "اللغات",
      rights: "د. سناء بلعباس — طبيبة عامة بالرباط. جميع الحقوق محفوظة.",
      disclaimerNote: "معلومات مجمعة للأغراض الإعلامية وفقاً للبيانات العامة المتاحة."
    }
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      cabinet: "Practice",
      contact: "Contact",
      booking: "Book Appointment",
      callUs: "Call Practice",
      langSwitch: "Language",
    },
    hero: {
      eyebrow: "GENERAL PRACTICE · RABAT",
      badge: "General Practitioner in Rabat • Morocco",
      title: "Dr Sanaa Belabbess",
      subtitle: "General Practitioner",
      subHeading: "Consultation, prevention & personalized medical follow-up",
      desc: "Attentive, accessible, and personalized medical care in Rabat.",
      ctaBooking: "Book Appointment",
      discoverProfile: "Discover practice",
      ctaCall: "Call: 05 37 29 67 61",
      altCall: "+212 537 29 67 61",
    },
    intro: {
      title: "Patient-centered general medicine",
      desc: "Comprehensive care, attentive listening, and close medical follow-up for the whole family in Rabat.",
      cardioTitle: "General Consultation",
      cardioDesc: "Comprehensive clinical evaluation, accurate diagnosis, and personalized follow-up.",
      echoCardioTitle: "Check-up & Prevention",
      echoCardioDesc: "Routine health examinations, wellness evaluation, and preventive care.",
      echoVascTitle: "Continuous Care",
      echoVascDesc: "Attentive regular medical guidance to preserve long-term health.",
    },
    expertise: {
      tag: "MEDICAL SERVICES",
      title: "Medical Services",
      subtitle: "General medicine consultations and follow-up care in Rabat.",
      notice: "General medical services provided at the practice. For specific inquiries, please consult the secretariat.",
      ctaTitle: "Need a consultation?",
      ctaDesc: "Contact the practice directly to request information or schedule your consultation.",
      items: [
        {
          id: "consultation-generale",
          title: "General Medical Consultation",
          desc: "Diagnosis, treatment of common conditions and comprehensive personalized patient management.",
          icon: "Stethoscope"
        },
        {
          id: "suivi-grossesse",
          title: "Pregnancy Follow-up",
          desc: "Complete and attentive medical monitoring throughout pregnancy for mother and baby.",
          icon: "Heart"
        },
        {
          id: "echographie",
          title: "Ultrasound / Echography (Diploma)",
          desc: "On-site ultrasound examinations with a specialized diploma in medical echography.",
          icon: "Scan"
        },
        {
          id: "nutrition",
          title: "Nutrition & Dietetics (Diploma)",
          desc: "Personalized nutritional advice and dietary follow-up with a diploma in nutrition.",
          icon: "Apple"
        },
        {
          id: "ecg",
          title: "Electrocardiogram (ECG)",
          desc: "On-site ECG for cardiac health assessment and detection of heart anomalies.",
          icon: "Activity"
        },
        {
          id: "aptitude-conduite",
          title: "Driving Medical Fitness Assessment",
          desc: "Accredited physician for official driving fitness medical examinations.",
          icon: "Car"
        }
      ]
    },
    profile: {
      tag: "ABOUT THE PRACTICE",
      title: "About",
      heading: "Patient-centered general medicine",
      subtitle: "Dr Sanaa Belabbess graduated from the Faculty of Medicine and Pharmacy of Casablanca. A general practitioner in Rabat, her practice is at 218 Av. Sidi Mohamed Ben Abdellah, Hay Sehrij, CYM. She delivers human, rigorous, and reassuring medical care.",
      bullets: [
        {
          title: "Graduate – Faculty of Medicine, Casablanca",
          detail: "Medical degree from the Faculty of Medicine and Pharmacy of Casablanca — proven academic and clinical skills.",
          tag: "Education"
        },
        {
          title: "Pregnancy Follow-up & Ultrasound",
          detail: "Full pregnancy medical monitoring and on-site ultrasounds with a specialized echography diploma.",
          tag: "Specialties"
        },
        {
          title: "Nutrition, ECG & Driving Medical",
          detail: "Nutrition diploma, on-site ECG, and accredited medical examinations for driving fitness.",
          tag: "Services"
        }
      ]
    },
    academic: {
      title: "Education & Qualifications",
      desc: "Graduate of the Faculty of Medicine and Pharmacy of Casablanca — general practitioner with additional diplomas in echography and nutrition.",
      note: "Information sourced from the official practice business card."
    },
    patientJourney: {
      title: "Your care journey at the practice",
      subtitle: "A clear and simple approach from appointment to follow-up.",
      step1Title: "Attentive Listening",
      step1Desc: "Comprehensive review of your symptoms and health concerns during your visit.",
      step2Title: "Examination & Diagnosis",
      step2Desc: "Thorough clinical examination and tailored medical recommendations.",
      step3Title: "Adapted Treatment",
      step3Desc: "Clear medical prescriptions and recovery guidance.",
      step4Title: "Ongoing Follow-up",
      step4Desc: "Continuous care to preserve your health over time."
    },
    address: {
      tag: "LOCATION & PRACTICE",
      title: "The Practice",
      subtitle: "Rabat, Morocco",
      dirPhonesTitle: "Practice Phone",
      dirAddressesTitle: "Practice Address",
      primaryTitle: "Official Address",
      primaryDetail: "218, Av. Sidi Mohamed Ben Abdellah, Hay Sehrij, CYM – Rabat",
      secondaryTitle: "District",
      secondaryDetail: "Hay Sehrij / CYM / Yacoub El Mansour, Rabat",
      area: "Hay Sehrij / CYM / Yacoub El Mansour",
      disclaimer: "Address sourced from the official practice business card."
    },
    hours: {
      tag: "OPENING HOURS",
      title: "Opening Hours",
      mon: "Monday",
      monTime: "09:00 – 16:30",
      tue: "Tuesday",
      tueTime: "09:00 – 17:00",
      wed: "Wednesday",
      wedTime: "09:00 – 17:00",
      thu: "Thursday",
      thuTime: "09:00 – 17:00",
      fri: "Friday",
      friTime: "09:00 – 17:00",
      sat: "Saturday",
      satTime: "09:00 – 13:00",
      sun: "Sunday",
      sunTime: "Closed",
      disclaimer: "Provisional schedule from public listings — subject to confirmation with practice."
    },
    contact: {
      tag: "CONTACT & LOCATION",
      title: "Contact the Practice",
      subtitle: "Contact the practice directly to request information or arrange your appointment.",
      mainPhone: "Practice Phone",
      mainSub: "Direct Line",
      mainNum: "05 37 29 67 61",
      intNum: "+212 537 29 67 61",
      city: "City & Area",
      cityVal: "Rabat, Morocco (Hay Sahrij / CYM)",
      langSpoken: "Spoken Language",
      langVal: "French",
      callButtonMain: "Call Practice (05 37 29 67 61)",
      callButtonInt: "Call: +212 537 29 67 61"
    },
    booking: {
      tag: "BOOKING REQUEST",
      title: "Appointment Request",
      desc: "Fill out this form to submit your appointment request to the practice secretariat.",
      nameLabel: "Full Name *",
      phoneLabel: "Phone Number *",
      expertiseLabel: "Reason for Visit *",
      selectExpertise: "Select reason for visit",
      dateLabel: "Preferred Date *",
      timeLabel: "Preferred Time *",
      noteLabel: "Notes / Message (Optional)",
      submitButton: "Submit Request",
      confirmNotice: "Your request will be sent for confirmation with the clinic staff.",
      modalTitle: "Request Submitted",
      modalDesc: "Please call the practice directly to confirm your time slot:",
      modalClose: "Close"
    },
    cta: {
      title: "Need a consultation?",
      desc: "Contact the practice directly to request information or organize your visit.",
      onlineBooking: "Book Appointment",
      callBtn: "Call Practice: 05 37 29 67 61"
    },
    onlinePresence: "Information derived from public professional directories.",
    reviews: {
      tag: "GOOGLE PATIENT REVIEWS",
      title: "What Patients Say",
      subtitle: "Authentic Google Maps reviews — Dr Sanaa Belabbess in Rabat",
      rating: "4.7",
      total: "from 35 reviews",
      source: "Source: Google Maps",
      viewReviews: "View all reviews on Google Maps",
      items: [
        {
          id: 1,
          name: "blake Saad",
          rating: 5,
          date: "5 months ago",
          lang: "ar",
          text: "الدكتوره سناء من أطيب خلق الله ،جمعت بين الخبرة و الأخلاق كذلك الفتاة في الإستقبال فتاة طيبة و محترمة و متقنة لعملها جزاكم الله كل خير."
        },
        {
          id: 2,
          name: "mama Ana",
          rating: 5,
          date: "2 months ago",
          lang: "fr",
          text: "Dr je la recommande forcément toujours à l'écoute, patiente, compréhensive, respectueuse et souriante."
        },
        {
          id: 3,
          name: "Abd Elhak EL KEBBABY",
          rating: 5,
          date: "1 year ago",
          lang: "fr",
          text: "Top professionnelle, je mets 5 pour la capacité d'écoute de Mme SANAA BELABBESS, le patient peut prendre tout le temps nécessaire pour décrire son état de santé."
        },
        {
          id: 4,
          name: "Hanane Lebbali",
          rating: 5,
          date: "1 year ago",
          lang: "fr",
          text: "Médecin compétente, toujours à l'écoute, je la recommande vivement."
        },
        {
          id: 5,
          name: "sabrina sabri",
          rating: 5,
          date: "2 years ago",
          lang: "en",
          text: "The best doctor for me, she listens to you and gives you solutions before the examination, and she is a non-materialistic person."
        },
        {
          id: 6,
          name: "imane essalami",
          rating: 5,
          date: "1 year ago",
          lang: "fr",
          text: "Je la recommande. Très compétente et humaine."
        },
        {
          id: 7,
          name: "Mustapha benhsain",
          rating: 5,
          date: "3 years ago",
          lang: "fr",
          text: "Super Docteur à l'écoute, prendre le temps d'examiner avec minutie."
        },
        {
          id: 8,
          name: "Mostafa Ouldkhyi",
          rating: 5,
          date: "3 years ago",
          lang: "ar",
          text: "لهلا يخطيك علينا ادكتورة"
        }
      ]
    },
    map: {
      tag: "GOOGLE MAPS LOCATION",
      title: "Find Us in Rabat",
      subtitle: "218 Avenue Mohamed Ben Abdellah, Yacoub El Mansour / Hay Sahrij, Rabat",
      directions: "Get Directions"
    },
    footer: {
      navHeader: "Navigation",
      contactHeader: "Contact",
      langHeader: "Languages",
      rights: "Dr Sanaa Belabbess — General Practitioner in Rabat. All rights reserved.",
      disclaimerNote: "Information compiled for informational purposes based on public data."
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang] || translations.fr;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={lang === 'ar' ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
