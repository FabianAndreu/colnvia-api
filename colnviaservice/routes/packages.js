const express = require('express');
const router = express.Router();

// Registrar un paquete
router.post('/', (req, res) => {
  const paquete = req.body;
  res.status(201).json({
    mensaje: 'Paquete registrado exitosamente',
    datos: paquete
  });
});

// Rastrear paquete por número de guía
router.get('/track/:guia', (req, res) => {
  const guia = req.params.guia;
  res.json({
    guia: guia,
    estado: 'En tránsito',
    ciudad: 'Bogotá'
  });
});

module.exports = router;
