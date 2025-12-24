const QRService = require('../services/QRService');

const scanQRCode = async (req, res) => {
    try {
        const { activationCode } = req.body;

        if (!activationCode) {
            return res.status(400).json({ error: "No activation code provided" });
        }

        // Call the service
        const result = await QRService.verifyAndActivate(activationCode);

        if (result.success) {
            return res.status(200).json(result);
        } else {
            return res.status(400).json(result);
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { scanQRCode };