const gravatar = require('gravatar');

/**
 * @param {Object} req - Express request object
 * @param {Object} req.body - Express request body
 * @param {string} req.body.email - User email
 * @returns {string} - Gravatar URL
 */
export default function (req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const avatar = gravatar.url(
        email,
        { s: '100', r: 'x', d: 'retro' },
        true
      );
      res.status(200).json({ avatar });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
