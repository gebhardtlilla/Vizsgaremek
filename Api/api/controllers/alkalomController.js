const db = require("../../config/db");

/**
 * GET /alkalmak
 * Returns list of occasions (Alkalom)
 */
exports.getAllOccasions = (req, res) => {
  const sql = "SELECT id, nev FROM Alkalom ORDER BY nev";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

/**
 * GET /alkalmak/:id/ajandekok
 * Returns gifts (Ajandek) for a given occasion (alkalom_id)
 */
exports.getGiftsByOccasion = (req, res) => {
  const { id } = req.params;
  const sql = `
    SELECT a.id, a.nev
    FROM Ajandek a
    INNER JOIN Ajandek_Alkalom aa ON a.id = aa.ajandek_id
    WHERE aa.alkalom_id = ?
    ORDER BY a.nev
  `;
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
