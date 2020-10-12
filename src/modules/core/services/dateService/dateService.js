const BRAZILIAN_FORMAT = {
  locale: 'pt-BR',
  options: { year: 'numeric', month: '2-digit', day: '2-digit' },
};

const formatDate = (
  date,
  {
    locale,
    options,
  } = BRAZILIAN_FORMAT,
) => date.toLocaleDateString(locale, options);

const getDateFromBrazilianDateString = (brazilianDateString) => {
  const americanDateString = brazilianDateString.split('/').reverse().join('-');
  return new Date(`${americanDateString} 00:00:00`);
};

export const getCurrentDate = () => formatDate(new Date(Date.now()));

export const getFirstDayOfTheWeek = (brazilianDateString) => {
  const targetDate = getDateFromBrazilianDateString(brazilianDateString);
  targetDate.setDate(targetDate.getDate() - targetDate.getDay());
  return formatDate(targetDate);
};

export const getFirstDayOfTheMonth = (brazilianDateString) => {
  const targetDate = getDateFromBrazilianDateString(brazilianDateString);
  targetDate.setDate(1);
  return formatDate(targetDate);
};

export const subtractDays = (numberOfDays, brazilianDateString) => {
  const targetDate = getDateFromBrazilianDateString(brazilianDateString);
  targetDate.setDate(targetDate.getDate() - numberOfDays);
  return formatDate(targetDate);
};
