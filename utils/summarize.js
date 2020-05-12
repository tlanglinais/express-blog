const Summarize = (body) => {
  const text = body.slice(0, 255);

  text.replace(/(<([^>]+)>)/gi, "");

  return text + "...";
};

module.exports = Summarize;
