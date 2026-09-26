export const formatWhatsAppTextMessage = (booking) => {
  const name = booking?.fullName || 'Patient';
  const phone = booking?.phone || 'Non renseigné';
  const service = booking?.serviceType || 'Consultation Cardiologie';
  const date = booking?.appointmentDate || 'A convenir';
  const time = booking?.appointmentTime || 'A convenir';
  const note = booking?.message ? `\n*Précisions:* ${booking.message}` : '';

  return `🏥 *DEMANDE DE RENDEZ-VOUS - CARDIOLOGIE*
-----------------------------------
*Dr. Aziza L'Aarje - Cardiologue*
📍 Casablanca, Maroc

👤 *Nom du Patient:* ${name}
📞 *Téléphone:* ${phone}
🫀 *Motif de Consultation:* ${service}
📅 *Date souhaitée:* ${date}
⏰ *Heure souhaitée:* ${time}${note}

-----------------------------------
Demande de rendez-vous transmise depuis le site web. Merci de me confirmer le créneau.`;
};

export const getWhatsAppUrl = (booking, phoneNumber = '212612154032') => {
  const text = formatWhatsAppTextMessage(booking);
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
};

export const sendWhatsAppTextMessage = (booking, phoneNumber = '212612154032') => {
  const url = getWhatsAppUrl(booking, phoneNumber);
  window.open(url, '_blank');
};
