function createController(service) {
  return {
    index: async (req, res, next) => {
      try {
        const data = await service.findAll();
        res.json({ success: true, data });
      } catch (error) {
        next(error);
      }
    },

    show: async (req, res, next) => {
      try {
        const data = await service.findById(req.params.id);
        if (!data) return res.status(404).json({ message: 'No encontrado' });
        res.json({ success: true, data });
      } catch (error) {
        next(error);
      }
    },

    store: async (req, res, next) => {
      try {
        const data = await service.create(req.body);
        res.status(201).json({ success: true, data });
      } catch (error) {
        next(error);
      }
    },

    update: async (req, res, next) => {
      try {
        const data = await service.update(req.params.id, req.body);
        res.json({ success: true, data });
      } catch (error) {
        next(error);
      }
    },

    destroy: async (req, res, next) => {
      try {
        await service.remove(req.params.id);
        res.json({ success: true, message: 'Eliminado' });
      } catch (error) {
        next(error);
      }
    },
  };
}

module.exports = { createController };
