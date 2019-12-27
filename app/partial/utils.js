const getSocialIcon = social => {
  return social.toLowerCase();
};

const getLink = (title, url) => {
  if (title.toLowerCase() === 'skype') {
    return `skype:${url}?call`;
  }
  return url;
};

export { getSocialIcon, getLink };
