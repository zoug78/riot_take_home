import express from 'express';
import * as controller from './controller';

const router = express.Router();
router.use(express.json());

router.post('/encrypt', (req, res) => {
    try {
        const encrypted = controller.encrypt(req);
        res.send(encrypted);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/decrypt', (req, res) => {
    try {
        const decrypted = controller.decrypt(req);
        res.send(decrypted);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/sign', (req, res) => {
    try {
        const signed = controller.sign(req);
        res.send(signed);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/verify', (req, res) => {
    try {
        controller.verify(req);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
