export function formatPhoneHref(phoneNumber) {
  const digits = phoneNumber.replace(/\D/g, "");

  if (digits.length === 10) {
    return `tel:+1${digits}`;
  }

  return `tel:${digits}`;
}
