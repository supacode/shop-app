const randomStr = strLength => {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let random = '';

  for (let i = 0; i < strLength; i++) {
    random += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return random;
};

module.exports = randomStr;
