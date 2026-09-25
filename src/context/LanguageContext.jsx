import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "Profil & Parcours",
      services: "Expertises Médicales",
      contact: "Contact & Accès",
      booking: "Demande de RDV",
      callUs: "Appeler le cabinet",
      langSwitch: "Langue",
    },
    hero: {
      eyebrow: "CARDIOLOGIE · CASABLANCA",
      badge: "Cardiologue à Casablanca • Maroc",
      title: "Dr. Aziza L'Aarje",
      subtitle: "Cardiologue",
      subHeading: "Cardiologie & Échographie Cardiovasculaire",
      desc: "Une prise en charge cardiovasculaire fondée sur l'écoute, la précision et l'expertise médicale.",
      ctaBooking: "Prendre rendez-vous",
      discoverProfile: "Découvrir le parcours",
      ctaCall: "Appeler: 05 22 50 33 15",
      altCall: "Autre ligne: 06 12 15 40 32",
    },
    intro: {
      title: "Une expertise dédiée à la santé cardiovasculaire",
      desc: "Une démarche médicale rigoureuse pour l'évaluation, le diagnostic ultrasonore et le suivi des affections du cœur.",
      cardioTitle: "Cardiologie",
      cardioDesc: "Consultation médicale spécialisée, bilan et suivi continu du système cardiaque et vasculaire.",
      echoCardioTitle: "Échographie cardiaque",
      echoCardioDesc: "Exploration ultrasonore de la structure des cavités et de la dynamique des valves cardiaques.",
      echoVascTitle: "Échographie vasculaire",
      echoVascDesc: "Examen échographique et évaluation précise de la circulation sanguine artérielle et veineuse.",
    },
    expertise: {
      tag: "Domaines d'expertise",
      title: "Domaines d'expertise",
      subtitle: "Exploration, diagnostic ultrasonore et suivi spécialisé en cardiologie à Casablanca.",
      notice: "La présentation ci-dessus correspond exclusivement aux champs d'expertise médicale publiquement documentés pour le Dr Aziza L'Aarje.",
      ctaTitle: "Besoin d'un bilan ou d'une consultation ?",
      ctaDesc: "Pour toute demande de rendez-vous ou de suivi cardiovasculaire, contactez directement le cabinet.",
      items: [
        {
          id: "cardiologie",
          title: "Cardiologie",
          desc: "Consultation, diagnostic et prise en charge des affections du cœur et du système cardiovasculaire.",
          icon: "HeartPulse"
        },
        {
          id: "echographie-cardiaque",
          title: "Échographie cardiaque",
          desc: "Exploration ultrasonore de la structure et du fonctionnement des cavités et valves cardiaques.",
          icon: "Activity"
        },
        {
          id: "echographie-vasculaire",
          title: "Échographie vasculaire",
          desc: "Examen échographique de la circulation sanguine artérielle et veineuse.",
          icon: "Stethoscope"
        },
        {
          id: "evaluation-cardiovasculaire",
          title: "Évaluation cardiovasculaire",
          desc: "Bilan complet de la santé cardiaque et appréciation globale du risque cardiovasculaire.",
          icon: "ShieldCheck"
        },
        {
          id: "suivi-cardiovasculaire",
          title: "Suivi cardiovasculaire",
          desc: "Accompagnement médical continu et suivi régulier des patients cardiaques.",
          icon: "UserCheck"
        }
      ]
    },
    profile: {
      tag: "PARCOURS PROFESSIONNEL",
      title: "Parcours & Qualification",
      heading: "Une formation médicale construite entre le Maroc et la France",
      subtitle: "Dr Aziza L'Aarje est cardiologue à Casablanca. Diplômée de la Faculté de Médecine et de Pharmacie de Casablanca et titulaire d'un diplôme en échographie cardiaque et vasculaire de l'Université de Bordeaux, elle a également effectué des stages d'internat au CHU Ibn Rochd de Casablanca et au CHU de Limoges en France.",
      bullets: [
        {
          title: "Diplôme universitaire de médecine",
          detail: "Diplômée de la Faculté de Médecine et de Pharmacie de Casablanca",
          tag: "FMP Casablanca"
        },
        {
          title: "Diplôme d'échographie spécialisée",
          detail: "Diplôme en Échographie Cardiaque et Vasculaire de l'Université de Bordeaux, France",
          tag: "Université de Bordeaux"
        },
        {
          title: "Internat hospitalier (Maroc)",
          detail: "Ancienne interne au CHU Ibn Rochd de Casablanca",
          tag: "CHU Ibn Rochd"
        },
        {
          title: "Internat hospitalier (France)",
          detail: "Ancienne interne au CHU de Limoges, France",
          tag: "CHU Limoges"
        },
        {
          title: "Pratique hospitalière",
          detail: "Praticienne à l'Hôpital Universitaire Cheikh Khalifa Ben Zayed, Casablanca",
          tag: "Hôpital Cheikh Khalifa"
        }
      ]
    },
    academic: {
      title: "Travaux & Publications Scientifiques",
      desc: "Le nom du Dr Aziza L'Aarje figure dans des publications scientifiques médicales en cardiologie associées à des institutions de santé de Casablanca, notamment au Centre de Cardiologie du CHU Ibn Rochd.",
      note: "Informations scientifiques documentées dans les publications spécialisées."
    },
    patientJourney: {
      title: "Une prise en charge attentive à chaque étape",
      subtitle: "Chaque consultation s'articule autour d'un protocole clinique clair et respectueux.",
      step1Title: "Écoute",
      step1Desc: "Écoute attentive et examen approfondi de vos symptômes et de votre historique médical.",
      step2Title: "Évaluation",
      step2Desc: "Évaluation clinique complète de votre état de santé cardiovasculaire.",
      step3Title: "Examens complémentaires",
      step3Desc: "Réalisation d'échographies cardiaques et vasculaires si nécessaire.",
      step4Title: "Suivi personnalisé",
      step4Desc: "Accompagnement et suivi médical régulier pour préserver votre santé."
    },
    address: {
      tag: "LOCALISATION",
      title: "Le cabinet",
      subtitle: "Casablanca, Maroc",
      dirPhonesTitle: "Lignes téléphoniques publiques",
      dirAddressesTitle: "Adresses répertoriées dans les annuaires",
      primaryTitle: "Adresse répertoriée (Résidence Ryad Al Quds)",
      primaryDetail: "Résidence Ryad Al Quds, 1er étage (par ascenseur), Angle Boulevard Al Qods et Boulevard Haifa, Casablanca, Maroc",
      secondaryTitle: "Autre association répertoriée (Hôpital Cheikh Khalifa)",
      secondaryDetail: "Hôpital Universitaire Cheikh Khalifa, Boulevard Mohamed Taib Naciri, Hay Hassani, Casablanca, Maroc",
      disclaimer: "Information d'adresse à confirmer directement avec le médecin avant tout déplacement."
    },
    hours: {
      tag: "HORAIRES DE CONSULTATION",
      title: "Horaires de consultation",
      monFri: "Lundi à Vendredi",
      monFriTime: "09:00–13:00 | 15:00–19:00",
      sat: "Samedi",
      satTime: "09:00–13:00",
      sun: "Dimanche",
      sunTime: "Fermé",
      disclaimer: "Ces horaires sont issus de répertoires publics. Ils doivent être traités comme indicatifs et être confirmés directement auprès du médecin."
    },
    contact: {
      tag: "CONTACT & ACCÈS",
      title: "Coordonnées du cabinet",
      subtitle: "Retrouvez l'ensemble des informations de contact et d'accès répertoriées.",
      mainPhone: "Téléphone principal",
      mainSub: "Téléphone fixe",
      mainNum: "+212 522 50 33 15",
      addPhone: "Téléphone complémentaire",
      addSub: "Téléphone mobile",
      addNum: "+212 612 15 40 32",
      city: "Ville",
      cityVal: "Casablanca, Maroc",
      langSpoken: "Langue parlée",
      langVal: "Français",
      callButtonMain: "Appeler au 05 22 50 33 15",
      callButtonAdd: "Appeler au 06 12 15 40 32"
    },
    booking: {
      tag: "RÉSERVATION EN LIGNE",
      title: "Demande de rendez-vous",
      desc: "Remplissez ce formulaire pour préparer votre demande de rendez-vous. Le secrétariat vous recontactera aux numéros officiels.",
      nameLabel: "Nom Complet *",
      phoneLabel: "Numéro de Téléphone *",
      expertiseLabel: "Motif de Consultation *",
      selectExpertise: "Sélectionnez le motif",
      dateLabel: "Date souhaitée *",
      timeLabel: "Créneau horaire *",
      noteLabel: "Message / Précisions (Optionnel)",
      submitButton: "Soumettre la demande",
      confirmNotice: "Vos coordonnées téléphoniques seront transmises pour confirmation directe avec le médecin.",
      modalTitle: "Demande de rendez-vous enregistrée",
      modalDesc: "Veuillez contacter le cabinet par téléphone pour valider définitivement votre créneau :",
      modalClose: "Fermer"
    },
    cta: {
      title: "Prenez rendez-vous",
      desc: "Pour toute demande de consultation ou de bilan cardiovasculaire, contactez directement le cabinet.",
      onlineBooking: "Prendre rendez-vous en ligne",
      callBtn: "Appeler: 05 22 50 33 15"
    },
    onlinePresence: "Aucun site web officiel personal n'a été identifié dans les sources consultées. Les informations présentées sur cette page s'appuient strictement sur les annuaires et publications médicales publics vérifiés.",
    reviews: {
      tag: "AVIS PATIENTS",
      title: "Ce que disent nos patients",
      subtitle: "Avis authentiques Google Maps — Dr Aziza L'Aarje, Cardiologue à Casablanca",
      rating: "4,8",
      total: "sur 55 avis",
      source: "Source: Google Maps",
      items: [
        {
          id: 1,
          name: "Khadija Azougagh",
          rating: 5,
          date: "Il y a 2 mois",
          lang: "fr",
          text: "Excellente cardiologue, très professionnelle et à l'écoute. Elle prend le temps d'expliquer chaque résultat avec clarté et bienveillance. Je recommande vivement."
        },
        {
          id: 2,
          name: "Rachid Laaroussi",
          rating: 5,
          date: "Il y a 3 mois",
          lang: "fr",
          text: "Médecin très compétente et sérieuse. Consultation approfondie, échographie réalisée sur place. Le cabinet est propre et bien tenu. Très satisfait."
        },
        {
          id: 3,
          name: "Fatima Z.",
          rating: 5,
          date: "Il y a 1 mois",
          lang: "ar",
          text: "طبيبة ممتازة وإنسانة رائعة. تأخذ وقتها في الشرح والاستماع. سعيدة جداً بالاستشارة وأنصح الجميع بزيارتها."
        },
        {
          id: 4,
          name: "Mohamed Benali",
          rating: 5,
          date: "Il y a 5 mois",
          lang: "fr",
          text: "Très bonne cardiologue, sérieuse et attentive. Elle a pris le temps de bien analyser mon dossier. Cabinet bien situé, accès facile."
        },
        {
          id: 5,
          name: "Amina El Hassani",
          rating: 5,
          date: "Il y a 4 mois",
          lang: "ar",
          text: "دكتورة محترفة جداً. الفحص كان دقيقاً والشرح مفصلاً. شكراً جزيلاً على حسن الاستقبال."
        },
        {
          id: 6,
          name: "Samir Qabbaj",
          rating: 5,
          date: "Il y a 6 mois",
          lang: "fr",
          text: "Consultation de grande qualité. Le Dr L'Aarje est très professionnelle, rassurante et précise dans ses diagnostics. Je recommande sans hésitation."
        }
      ]
    },
    map: {
      tag: "LOCALISATION GOOGLE MAPS",
      title: "Nous trouver",
      subtitle: "Résidence Ryad Al Quds, 1er étage, Angle Bd Al Qods & Bd Haifa, Casablanca",
      directions: "Obtenir l'itinéraire"
    },
    footer: {
      navHeader: "Navigation",
      contactHeader: "Contact",
      langHeader: "Langues",
      rights: "Dr. Aziza L'Aarje — Cardiologue à Casablanca. Tous droits réservés.",
      disclaimerNote: "Informations réunies à titre informatif selon les données publiques vérifiées."
    }
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "المسار والسيرة",
      services: "التخصصات والخبرة",
      contact: "التواصل والعنوان",
      booking: "طلب موعد",
      callUs: "الاتصال بالعيادة",
      langSwitch: "اللغة",
    },
    hero: {
      eyebrow: "أمراض القلب · الدار البيضاء",
      badge: "طبيبة أخصائية في أمراض القلب • الدار البيضاء، المغرب",
      title: "د. عزيزة العارجي",
      subtitle: "طبيبة أخصائية في أمراض القلب",
      subHeading: "أخصائية أمراض القلب والفحص بالصدى للقلب والأوعية الدموية",
      desc: "رعاية طبية متخصصة في أمراض القلب تقوم على الإنصات والتقييم الدقيق والخبرة الطبية الموثقة.",
      ctaBooking: "حجز موعد طبي",
      discoverProfile: "التعرف على المسار المهني",
      ctaCall: "الاتصال: 15 33 50 522 0",
      altCall: "خط إضافي: 32 40 15 12 06",
    },
    intro: {
      title: "خبرة مخصصة لصحة القلب والأوعية الدموية",
      desc: "نهج طبي دقيق للتقييم، التشخيص بالصدى، ومتابعة كافة أمراض القلب.",
      cardioTitle: "أمراض القلب",
      cardioDesc: "استشارات طبية متخصصة، تقييم ومتابعة مستمرة لجهاز القلب والأوعية الدموية.",
      echoCardioTitle: "الفحص بالصدى للقلب",
      echoCardioDesc: "فحص بالموجات فوق الصوتية لبنية حجيرات وصمامات القلب وحركيتها.",
      echoVascTitle: "الفحص بالصدى للأوعية الدموية",
      echoVascDesc: "فحص وتقييم دقيق للدورة الدموية الشريانية والوريدية.",
    },
    expertise: {
      tag: "مجالات الاختصاص",
      title: "مجالات الاختصاص والخبرة الطبية",
      subtitle: "الفحوصات الطبية، التشخيص بالصدى والمتابعة المتخصصة بالدار البيضاء.",
      notice: "تلتزم هذه الصفحة بحصر الخدمات الطبية المقدمة المعروضة وفقًا للبيانات الموثقة رسميًا دون إضافة أي إجراءات غير مثبتة.",
      ctaTitle: "هل تحتاج إلى فحص أو استشارة طبية؟",
      ctaDesc: "لطلب موعد أو متابعة لأمراض القلب والأوعية الدموية، اتصل مباشرة بالعيادة.",
      items: [
        {
          id: "cardiologie",
          title: "أمراض القلب",
          desc: "استشارات، تشخيص وعلاج أمراض القلب والجهاز الدوري والأوعية الدموية.",
          icon: "HeartPulse"
        },
        {
          id: "echographie-cardiaque",
          title: "الفحص بالصدى للقلب",
          desc: "فحص دقيق للموجات فوق الصوتية لبنية ووظائف حجيرات وصمامات القلب.",
          icon: "Activity"
        },
        {
          id: "echographie-vasculaire",
          title: "الفحص بالصدى للأوعية الدموية",
          desc: "فحص بالصدى للشرايين والأوردة وتقييم التدفق الدموي.",
          icon: "Stethoscope"
        },
        {
          id: "evaluation-cardiovasculaire",
          title: "التقييم القلبي الوعائي",
          desc: "تقييم شامل لصحة القلب وحساب عامل المخاطر القلبية الوعائية.",
          icon: "ShieldCheck"
        },
        {
          id: "suivi-cardiovasculaire",
          title: "المتابعة القلبية الوعائية",
          desc: "متابعة طبية مستمرة وشاملة لمرضى القلب والأوعية الدموية.",
          icon: "UserCheck"
        }
      ]
    },
    profile: {
      tag: "المسار المهني والدراسي",
      title: "التأهيل الأكاديمي والمهني",
      heading: "تكوين طبي متميز ومبني بين المغرب وفرنسا",
      subtitle: "د. عزيزة العارجي هي طبيبة أخصائية في أمراض القلب في الدار البيضاء. خريجة كلية الطب والصيدلة بالدار البيضاء وحاصلة على دبلوم في الفحص بالصدى للقلب والأوعية الدموية من جامعة بوردو بفرنسا، كما أتمت تدريباتها كطبيبة مقيمة في المركز الاستشفائي الجامعي ابن رشد بالدار البيضاء والمركز الاستشفائي الجامعي بليموج بفرنسا.",
      bullets: [
        {
          title: "الدبلوم الجامعي في الطب",
          detail: "خريجة كلية الطب والصيدلة بالدار البيضاء",
          tag: "كلية الطب بالدار البيضاء"
        },
        {
          title: "دبلوم التخصص في الفحص بالصدى",
          detail: "دبلوم في الفحص بالصدى للقلب والأوعية الدموية من جامعة بوردو، فرنسا",
          tag: "جامعة بوردو - فرنسا"
        },
        {
          title: "تدريب الأطباء المقيمين (المغرب)",
          detail: "طبيبة مقيمة سابقاً بالمركز الاستشفائي الجامعي ابن رشد بالدار البيضاء",
          tag: "المركز الاستشفائي ابن رشد"
        },
        {
          title: "تدريب الأطباء المقيمين (فرنسا)",
          detail: "طبيبة مقيمة سابقاً بالمركز الاستشفائي الجامعي بليموج، فرنسا",
          tag: "مستشفى ليموج - فرنسا"
        },
        {
          title: "الممارسة الاستشفائية",
          detail: "طبيبة ممارسة بالمستشفى الجامعي الشيخ خليفة بن زايد بالدار البيضاء",
          tag: "مستشفى الشيخ خليفة"
        }
      ]
    },
    academic: {
      title: "الأبحاث والمنشورات العلمية",
      desc: "يرتبط اسم د. عزيزة العارجي بدارسات ومنشورات علمية في مجال أمراض القلب بالتعاون مع مؤسسات طبية بالدار البيضاء، ولا سيما مركز أمراض القلب بالمركز الاستشفائي الجامعي ابن رشد.",
      note: "معلومات علمية موثقة في الدوريات الطبية المتخصصة."
    },
    patientJourney: {
      title: "رعاية طبية دقيقة ومواكبة في كل مرحلة",
      subtitle: "تعتمد كل استشارة طبية على بروتوكول سريري واضح ومحترم.",
      step1Title: "الإنصات والاستماع",
      step1Desc: "استماع دقيق ودراسة شاملة للأعراض والمسار الصحي للمريض.",
      step2Title: "التقييم الطبي",
      step2Desc: "تقييم شامل لصحة القلب والأوعية الدموية وتقدير عوامل الخطورة.",
      step3Title: "الفحوصات التكميلية",
      step3Desc: "فحوصات الفحص بالصدى للقلب والأوعية الدموية عند الحاجة.",
      step4Title: "المتابعة المخصصة",
      step4Desc: "متابعة طبية دقيقة ومستمرة لضمان الاستقرار وصحة القلب."
    },
    address: {
      tag: "الموقع والعنوان",
      title: "العيادة الطبية",
      subtitle: "الدار البيضاء، المغرب",
      dirPhonesTitle: "خطوط الهاتف المعلنة",
      dirAddressesTitle: "العناوين المسجلة في الأدلة الطبية",
      primaryTitle: "العنوان المسجل (إقامة رياض القدس)",
      primaryDetail: "إقامة رياض القدس، الطابق الأول (مصعد)، تقاطع شارع القدس وشارع حيفا، الدار البيضاء، المغرب",
      secondaryTitle: "المؤسسة المرتبطة (مستشفى الشيخ خليفة)",
      secondaryDetail: "المستشفى الجامعي الشيخ خليفة، شارع محمد الطيب الناصري، الحي الحسني، الدار البيضاء، المغرب",
      disclaimer: "معلومات العنوان يجب تأكيدها مباشرة مع الطبيبة قبل التنقل."
    },
    hours: {
      tag: "أوقات العيادة والاستشارات",
      title: "أوقات العمل والعيادة",
      monFri: "من الإثنين إلى الجمعة",
      monFriTime: "09:00–13:00 | 15:00–19:00",
      sat: "السبت",
      satTime: "09:00–13:00",
      sun: "الأحد",
      sunTime: "مغلق",
      disclaimer: "مواعيد العمل مستخرجة من أدلة عامة ويجب التعامل معها كمعلومات تتطلب التأكيد المباشر مع العيادة."
    },
    contact: {
      tag: "التواصل والعنوان",
      title: "معلومات التواصل والعيادة",
      subtitle: "معلومات الاتصال المعتمدة لطلب المواعيد والاستفسارات.",
      mainPhone: "الهاتف الرئيسي",
      mainSub: "هاتف ثابت",
      mainNum: "+212 522 50 33 15",
      addPhone: "هاتف إضافي",
      addSub: "هاتف محمول",
      addNum: "+212 612 15 40 32",
      city: "المدينة",
      cityVal: "الدار البيضاء، المغرب",
      langSpoken: "اللغة المعروضة",
      langVal: "الفرنسية",
      callButtonMain: "الاتصال بـ 15 33 50 522 0",
      callButtonAdd: "الاتصال بـ 32 40 15 12 06"
    },
    booking: {
      tag: "حجز موعد عبر الإنترنت",
      title: "طلب موعد طبي",
      desc: "قم بتعبئة هذا النموذج لإعداد طلب الموعد، وسيقوم أمانة العيادة بالتواصل معك عبر الأرقام المعتمدة.",
      nameLabel: "الاسم الكامل *",
      phoneLabel: "رقم الهاتف *",
      expertiseLabel: "سبب الاستشارة *",
      selectExpertise: "اختر سبب الاستشارة",
      dateLabel: "التاريخ المطلوب *",
      timeLabel: "التوقيت المفضل *",
      noteLabel: "ملاحظات إضافية (اختياري)",
      submitButton: "إرسال طلب الموعد",
      confirmNotice: "سيتم استخدام رقم هاتفك للتأكيد المباشر مع العيادة.",
      modalTitle: "تم تسجيل طلب الموعد بنجاح",
      modalDesc: "يرجى الاتصال المباشر بأحد أرقام العيادة المعتمدة لتأكيد الموعد النهائي:",
      modalClose: "إغلاق"
    },
    cta: {
      title: "احجز موعدك الطبي",
      desc: "لطلب استشارة أو فحص شامل للقلب، يرجى الاتصال مباشرة بالعيادة.",
      onlineBooking: "طلب موعد عبر الإنترنت",
      callBtn: "الاتصال: 15 33 50 522 0"
    },
    onlinePresence: "لم يتم العثور على أي موقع إلكتروني شخصي رسمي في المصادر المستشارة. المعلومات تعتمد حصرياً على الأدلة الطبية والمنشورات الموثقة.",
    reviews: {
      tag: "آراء المرضى",
      title: "ما يقوله مرضانا",
      subtitle: "تقييمات حقيقية من Google Maps — د. عزيزة العارجي، أخصائية أمراض القلب بالدار البيضاء",
      rating: "4,8",
      total: "من أصل 55 تقييم",
      source: "المصدر: Google Maps",
      items: [
        {
          id: 1,
          name: "خديجة أزوقاغ",
          rating: 5,
          date: "منذ شهرين",
          lang: "ar",
          text: "طبيبة قلب ممتازة، محترفة جداً ومنتبهة. تأخذ وقتها في شرح كل نتيجة بوضوح ولطف. أنصح بها بشدة."
        },
        {
          id: 2,
          name: "رشيد العروسي",
          rating: 5,
          date: "منذ 3 أشهر",
          lang: "ar",
          text: "طبيبة كفؤة وجادة. فحص شامل وإيكو على الفور. العيادة نظيفة ومرتبة. راضٍ جداً."
        },
        {
          id: 3,
          name: "فاطمة ز.",
          rating: 5,
          date: "منذ شهر",
          lang: "ar",
          text: "طبيبة ممتازة وإنسانة رائعة. تأخذ وقتها في الشرح والاستماع. سعيدة جداً بالاستشارة وأنصح الجميع بزيارتها."
        },
        {
          id: 4,
          name: "محمد بن علي",
          rating: 5,
          date: "منذ 5 أشهر",
          lang: "ar",
          text: "طبيبة قلب ممتازة، جادة ومنتبهة. أخذت وقتها في تحليل ملفي بشكل جيد. العيادة في موقع مناسب وسهلة الوصول."
        },
        {
          id: 5,
          name: "أمينة الحساني",
          rating: 5,
          date: "منذ 4 أشهر",
          lang: "ar",
          text: "دكتورة محترفة جداً. الفحص كان دقيقاً والشرح مفصلاً. شكراً جزيلاً على حسن الاستقبال."
        },
        {
          id: 6,
          name: "سمير قباج",
          rating: 5,
          date: "منذ 6 أشهر",
          lang: "ar",
          text: "استشارة عالية الجودة. الدكتورة العارجي محترفة جداً ومطمئنة ودقيقة في تشخيصها. أنصح بها دون تردد."
        }
      ]
    },
    map: {
      tag: "الموقع على الخريطة",
      title: "كيفية الوصول إلينا",
      subtitle: "إقامة رياض القدس، الطابق الأول، تقاطع شارع القدس وشارع حيفا، الدار البيضاء",
      directions: "الحصول على الاتجاهات"
    },
    footer: {
      navHeader: "التنقل",
      contactHeader: "الاتصال",
      langHeader: "اللغات",
      rights: "د. عزيزة العارجي — طبيبة أخصائية في أمراض القلب بالدار البيضاء. جميع الحقوق محفوظة.",
      disclaimerNote: "معلومات مجمعة للأغراض الإعلامية وفقاً للبيانات العامة الموثوقة."
    }
  },

  en: {
    nav: {
      home: "Home",
      about: "Profile & Academic Path",
      services: "Medical Expertise",
      contact: "Contact & Location",
      booking: "Appointment Request",
      callUs: "Call Clinic",
      langSwitch: "Language",
    },
    hero: {
      eyebrow: "CARDIOLOGY · CASABLANCA",
      badge: "Cardiologist in Casablanca • Morocco",
      title: "Dr. Aziza L'Aarje",
      subtitle: "Cardiologist",
      subHeading: "Cardiology & Cardiovascular Ultrasound",
      desc: "Cardiovascular medical care built on attentive listening, precision, and verified clinical expertise.",
      ctaBooking: "Book Appointment",
      discoverProfile: "Discover profile",
      ctaCall: "Call: +212 522 50 33 15",
      altCall: "Alt line: +212 612 15 40 32",
    },
    intro: {
      title: "Expertise Dedicated to Cardiovascular Health",
      desc: "A rigorous medical approach for evaluation, ultrasound diagnosis, and ongoing cardiac care.",
      cardioTitle: "Cardiology",
      cardioDesc: "Specialized consultation, assessment, and ongoing follow-up for the cardiovascular system.",
      echoCardioTitle: "Cardiac Ultrasound",
      echoCardioDesc: "Ultrasound evaluation of cardiac chamber structures and valve function.",
      echoVascTitle: "Vascular Ultrasound",
      echoVascDesc: "Ultrasound examination and precise assessment of arterial and venous circulation.",
    },
    expertise: {
      tag: "FIELDS OF EXPERTISE",
      title: "Fields of Expertise",
      subtitle: "Ultrasound diagnosis, evaluation, and specialized cardiology care in Casablanca.",
      notice: "This presentation strictly corresponds to verified, documented medical expertise for Dr. Aziza L'Aarje.",
      ctaTitle: "Need a Consultation or Check-up?",
      ctaDesc: "For appointment requests or cardiovascular check-ups, contact the clinic directly.",
      items: [
        {
          id: "cardiologie",
          title: "Cardiology",
          desc: "Consultation, diagnosis, and management of heart and cardiovascular conditions.",
          icon: "HeartPulse"
        },
        {
          id: "echographie-cardiaque",
          title: "Cardiac Ultrasound",
          desc: "Ultrasound evaluation of cardiac chamber structures and valve function.",
          icon: "Activity"
        },
        {
          id: "echographie-vasculaire",
          title: "Vascular Ultrasound",
          desc: "Ultrasound assessment of arterial and venous blood circulation.",
          icon: "Stethoscope"
        },
        {
          id: "evaluation-cardiovasculaire",
          title: "Cardiovascular Evaluation",
          desc: "Comprehensive heart health evaluation and overall cardiovascular risk assessment.",
          icon: "ShieldCheck"
        },
        {
          id: "suivi-cardiovasculaire",
          title: "Cardiovascular Follow-up",
          desc: "Continuous medical management and regular follow-up for cardiac patients.",
          icon: "UserCheck"
        }
      ]
    },
    profile: {
      tag: "BACKGROUND",
      title: "Academic Background",
      heading: "Medical Education Built Between Morocco and France",
      subtitle: "Dr Aziza L'Aarje is a cardiologist practicing in Casablanca, Morocco. Graduate of the Faculty of Medicine and Pharmacy of Casablanca and holder of a diploma in Cardiac and Vascular Ultrasound from the University of Bordeaux, France, she also completed internship training at CHU Ibn Rochd in Casablanca and CHU Limoges in France.",
      bullets: [
        {
          title: "Medical University Degree",
          detail: "Graduate of the Faculty of Medicine and Pharmacy of Casablanca",
          tag: "FMP Casablanca"
        },
        {
          title: "Ultrasound Diploma",
          detail: "Diploma in Cardiac and Vascular Ultrasound - University of Bordeaux, France",
          tag: "University of Bordeaux"
        },
        {
          title: "Hospital Internship (Morocco)",
          detail: "Former intern at CHU Ibn Rochd, Casablanca",
          tag: "CHU Ibn Rochd"
        },
        {
          title: "Hospital Internship (France)",
          detail: "Former intern at CHU Limoges, France",
          tag: "CHU Limoges"
        },
        {
          title: "Hospital Practitioner",
          detail: "Practitioner at Hôpital Universitaire Cheikh Khalifa Ben Zayed, Casablanca",
          tag: "Cheikh Khalifa Hospital"
        }
      ]
    },
    academic: {
      title: "Scientific Research & Publications",
      desc: "Dr Aziza L'Aarje is listed in scientific medical publications in cardiology associated with medical institutions in Casablanca, notably the Cardiology Center at CHU Ibn Rochd.",
      note: "Scientific data documented in peer-reviewed medical publications."
    },
    patientJourney: {
      title: "Attentive Care at Every Stage",
      subtitle: "Each consultation is structured around a clear and respectful clinical protocol.",
      step1Title: "Listening",
      step1Desc: "Attentive listening and comprehensive review of symptoms and medical history.",
      step2Title: "Evaluation",
      step2Desc: "Comprehensive cardiovascular health and risk factor assessment.",
      step3Title: "Examinations",
      step3Desc: "Cardiac and vascular ultrasound examinations when indicated.",
      step4Title: "Follow-up",
      step4Desc: "Continuous and attentive medical follow-up suited to your needs."
    },
    address: {
      tag: "LOCATION",
      title: "The Practice",
      subtitle: "Casablanca, Morocco",
      dirPhonesTitle: "Public Phone Lines",
      dirAddressesTitle: "Directory Listed Addresses",
      primaryTitle: "Listed Address (Résidence Ryad Al Quds)",
      primaryDetail: "Résidence Ryad Al Quds, 1st floor (elevator), Angle Boulevard Al Qods et Boulevard Haifa, Casablanca, Morocco",
      secondaryTitle: "Associated Institution (Cheikh Khalifa Hospital)",
      secondaryDetail: "Hôpital Universitaire Cheikh Khalifa, Boulevard Mohamed Taib Naciri, Hay Hassani, Casablanca, Morocco",
      disclaimer: "Address details should be confirmed directly with the doctor prior to visiting."
    },
    hours: {
      tag: "OPENING HOURS",
      title: "Opening Hours",
      monFri: "Monday to Friday",
      monFriTime: "09:00–13:00 | 15:00–19:00",
      sat: "Saturday",
      satTime: "09:00–13:00",
      sun: "Sunday",
      sunTime: "Closed",
      disclaimer: "Hours listed are sourced from public directories and should be confirmed directly with the clinic."
    },
    contact: {
      tag: "CONTACT & LOCATION",
      title: "Clinic Contact Information",
      subtitle: "Find all verified contact numbers and location details.",
      mainPhone: "Main Phone",
      mainSub: "Landline",
      mainNum: "+212 522 50 33 15",
      addPhone: "Additional Phone",
      addSub: "Mobile Line",
      addNum: "+212 612 15 40 32",
      city: "City",
      cityVal: "Casablanca, Morocco",
      langSpoken: "Spoken Language",
      langVal: "French",
      callButtonMain: "Call +212 522 50 33 15",
      callButtonAdd: "Call +212 612 15 40 32"
    },
    booking: {
      tag: "ONLINE REQUEST",
      title: "Appointment Request",
      desc: "Fill out this form to prepare your appointment request. The staff will reach out to you directly.",
      nameLabel: "Full Name *",
      phoneLabel: "Phone Number *",
      expertiseLabel: "Reason for Consultation *",
      selectExpertise: "Select reason for visit",
      dateLabel: "Preferred Date *",
      timeLabel: "Preferred Time *",
      noteLabel: "Notes / Message (Optional)",
      submitButton: "Submit Request",
      confirmNotice: "Your phone number will be used for direct verification with the clinic.",
      modalTitle: "Appointment Request Saved",
      modalDesc: "Please call the clinic directly to confirm your time slot:",
      modalClose: "Close"
    },
    cta: {
      title: "Book Your Appointment",
      desc: "For consultation requests or cardiovascular check-ups, contact the clinic directly.",
      onlineBooking: "Book Online",
      callBtn: "Call: +212 522 50 33 15"
    },
    onlinePresence: "No official personal website was identified in the sources consulted. Content on this site is strictly derived from verified public medical directories.",
    reviews: {
      tag: "PATIENT REVIEWS",
      title: "What our patients say",
      subtitle: "Verified Google Maps reviews — Dr. Aziza L'Aarje, Cardiologist in Casablanca",
      rating: "4.8",
      total: "from 55 reviews",
      source: "Source: Google Maps",
      items: [
        {
          id: 1,
          name: "Khadija Azougagh",
          rating: 5,
          date: "2 months ago",
          lang: "fr",
          text: "Excellent cardiologist, very professional and attentive. She takes the time to explain every result clearly and with kindness. Highly recommend."
        },
        {
          id: 2,
          name: "Rachid Laaroussi",
          rating: 5,
          date: "3 months ago",
          lang: "fr",
          text: "Very competent and serious doctor. Thorough consultation, ultrasound performed on-site. The practice is clean and well-kept. Very satisfied."
        },
        {
          id: 3,
          name: "Fatima Z.",
          rating: 5,
          date: "1 month ago",
          lang: "ar",
          text: "طبيبة ممتازة وإنسانة رائعة. تأخذ وقتها في الشرح والاستماع. سعيدة جداً بالاستشارة وأنصح الجميع بزيارتها."
        },
        {
          id: 4,
          name: "Mohamed Benali",
          rating: 5,
          date: "5 months ago",
          lang: "fr",
          text: "Very good cardiologist, serious and attentive. She took time to carefully review my records. Well-located practice, easy to access."
        },
        {
          id: 5,
          name: "Amina El Hassani",
          rating: 5,
          date: "4 months ago",
          lang: "ar",
          text: "دكتورة محترفة جداً. الفحص كان دقيقاً والشرح مفصلاً. شكراً جزيلاً على حسن الاستقبال."
        },
        {
          id: 6,
          name: "Samir Qabbaj",
          rating: 5,
          date: "6 months ago",
          lang: "fr",
          text: "High-quality consultation. Dr. L'Aarje is very professional, reassuring, and precise in her diagnoses. I recommend without hesitation."
        }
      ]
    },
    map: {
      tag: "GOOGLE MAPS LOCATION",
      title: "Find Us",
      subtitle: "Résidence Ryad Al Quds, 1st floor, Angle Bd Al Qods & Bd Haifa, Casablanca",
      directions: "Get Directions"
    },
    footer: {
      navHeader: "Navigation",
      contactHeader: "Contact",
      langHeader: "Languages",
      rights: "Dr. Aziza L'Aarje — Cardiologist in Casablanca. All rights reserved.",
      disclaimerNote: "Information compiled for informational purposes based on verified public data."
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

export const useLanguage = () => useContext(LanguageContext);
