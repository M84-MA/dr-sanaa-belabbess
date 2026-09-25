export const formatWhatsAppTextMessage = (booking) => {
  const name = booking?.fullName || 'Patient';
  const phone = booking?.phone || 'Non renseigné';
  const service = booking?.serviceType || 'Consultation Cardiologie';
  const date = booking?.appointmentDate || 'A convenir';
  const time = booking?.appointmentTime || 'A convenir';
  const note = booking?.message ? `\n*Précisions:* ${booking.message}` : '';

  return `*DEMANDE DE RENDEZ-VOUS CARDIO*
-----------------------------------
*Dr. Aziza L'Aarje - Cardiologue*
Casablanca, Maroc

*Nom du Patient:* ${name}
*Téléphone:* ${phone}
*Motif de Consultation:* ${service}
*Date souhaitée:* ${date}
*Heure souhaitée:* ${time}${note}

-----------------------------------
Demande transmise pour confirmation par téléphone (+212 522 50 33 15 / +212 612 15 40 32).`;
};

export const sendWhatsAppTextMessage = (booking) => {
  console.log('Demande de rendez-vous enregistrée:', booking);
};
