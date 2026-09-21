export const formatWhatsAppTextMessage = (booking) => {
  const name = booking?.fullName || 'Patient';
  const phone = booking?.phone || 'Non renseigné';
  const service = booking?.serviceType || 'Consultation Médicale';
  const date = booking?.appointmentDate || 'A convenir';
  const time = booking?.appointmentTime || 'A convenir';
  const note = booking?.message ? `\n*Note / Symptômes:* ${booking.message}` : '';

  return `*DEMANDE DE RENDEZ-VOUS MEDICAL*
-----------------------------------
*Cabinet Dr. BENTALEB Samia*
Endocrinologie, Diabétologie & Nutrition
Imperial Center, Meknès

*Patient(e):* ${name}
*Téléphone:* ${phone}
*Motif:* ${service}
*Date:* ${date}
*Heure:* ${time}${note}

-----------------------------------
Merci de bien vouloir me confirmer la disponibilité du créneau.`;
};

export const sendWhatsAppTextMessage = (booking) => {
  const textMessage = formatWhatsAppTextMessage(booking);
  const waNumber = "212663559580";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textMessage)}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
};
