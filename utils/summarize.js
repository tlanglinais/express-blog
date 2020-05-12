const Summarize = (body) => {
  console.log(body);
  const text = body.slice(0, 250);

  text.replace(/(<([^>]+)>)/gi, "");

  return text + "...";
};

module.exports = Summarize;
