const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long' };
  const ye = new Date(date)

  if (new Date().getFullYear() !== ye.getFullYear()) {
    options.year = 'numeric'
  }

  const formattedDate = ye.toLocaleDateString('en-US', options);
  return formattedDate;
}

export default formatDate;