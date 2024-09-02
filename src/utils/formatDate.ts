const formatDate = (date: string): string => {
  type Options = {
    day?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    year?: "numeric" | "2-digit";
  }

  const options: Options = { day: 'numeric', month: 'long' };
  const ye = new Date(date)

  if (new Date().getFullYear() !== ye.getFullYear()) {
    options.year = 'numeric'
  }

  const formattedDate = ye.toLocaleDateString('en-US', options);
  return formattedDate;
}

export default formatDate;