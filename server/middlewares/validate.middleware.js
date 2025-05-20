const validate = (req, res, next) => {
  const { amount, description, date } = req.body;
  if (!amount || !description || !date)
    return res.status(400).json({ messages: "Champ requis manquant." });

  if (isNaN(amount) || amount <= 0)
    return res.status(400).json({ message: "Montant invalide" });
  next();
};

module.exports = { validate };
