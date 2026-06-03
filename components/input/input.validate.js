export const validateEmail = (e) => {
  const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(e.target.value);
};

export const validatePhoneNumber = (event) => {
  const regexp = /^[0-9]{9}$/;
  return regexp.test(event.target.value);
};

export const formatRut = (text) => {
  const clean = text.replace(/[^0-9kK]/g, '');
  if (clean.length < 2) return clean;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1).toUpperCase();
  return body.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + dv;
};

export const isValidRut = (rut) => {
  const clean = rut.replace(/[^0-9kK]/g, '');
  if (clean.length < 2) return false;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1).toUpperCase();
  let sum = 0;
  let multiplier = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }
  const expected = 11 - (sum % 11);
  const calculated = expected === 11 ? '0' : expected === 10 ? 'K' : String(expected);
  return dv === calculated;
};
