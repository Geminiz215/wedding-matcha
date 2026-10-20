import { EventDetail } from '@/types/wedding';

/**
 * Generate URL Google Calendar untuk menambahkan acara
 */
export function getGoogleCalendarUrl(eventObj: EventDetail): string {
  const title = encodeURIComponent(`Wedding of Nadia & Raka (${eventObj.title})`);
  const details = encodeURIComponent(
    `Join us as we celebrate the wedding of Nadia & Raka — A Sweet Little Love Story!\nVenue: ${eventObj.venueName}\nAddress: ${eventObj.address}`
  );
  const location = encodeURIComponent(`${eventObj.venueName}, ${eventObj.address}`);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${eventObj.startISO}/${eventObj.endISO}&details=${details}&location=${location}`;
}

/**
 * Download file .ICS kalender (kompatibel dengan Apple Calendar, Outlook, Google)
 */
export function handleDownloadICS(eventObj: EventDetail): void {
  if (typeof window === 'undefined') return;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Nadia & Raka Wedding//Matcha Strawberry//EN',
    'BEGIN:VEVENT',
    `DTSTART:${eventObj.startISO}`,
    `DTEND:${eventObj.endISO}`,
    `SUMMARY:Nadia & Raka Wedding — ${eventObj.title}`,
    `DESCRIPTION:We would be so happy to celebrate our sweet new chapter with you! (${eventObj.time})`,
    `LOCATION:${eventObj.venueName}, ${eventObj.address}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', `Nadia-Raka-${eventObj.title.toLowerCase().replace(/\s+/g, '-')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
