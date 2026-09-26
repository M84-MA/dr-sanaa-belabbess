export const formatWhatsAppTextMessage = (booking) => {
  const name = booking?.fullName || 'Patient';
  const phone = booking?.phone || 'Non renseigné';
  const service = booking?.serviceType || 'Consultation Médecine Générale';
  const date = booking?.appointmentDate || 'A convenir';
  const time = booking?.appointmentTime || 'A convenir';
  const note = booking?.message ? `\n*Précisions:* ${booking.message}` : '';

  return `🏥 *DEMANDE DE RENDEZ-VOUS - MÉDECINE GÉNÉRALE*
-----------------------------------
*Dr Sanaa Belabbess - Médecin Généraliste*
📍 Rabat, Maroc (Hay Sahrij / CYM)

👤 *Nom du Patient:* ${name}
📞 *Téléphone:* ${phone}
🩺 *Motif de Consultation:* ${service}
📅 *Date souhaitée:* ${date}
⏰ *Heure souhaitée:* ${time}${note}

-----------------------------------
Demande de rendez-vous transmise depuis le site web. Merci de me confirmer le créneau.`;
};

export const getWhatsAppUrl = (booking, phoneNumber = '212537296761') => {
  const text = formatWhatsAppTextMessage(booking);
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
};

export const sendWhatsAppTextMessage = (booking, phoneNumber = '212537296761') => {
  const url = getWhatsAppUrl(booking, phoneNumber);
  window.open(url, '_blank');
};
