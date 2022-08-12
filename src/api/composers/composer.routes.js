const ComposerRoutes = require("express").Router();
const { getAllComposers, getComposerByID, createComposer } = require("./composer.controller");

ComposerRoutes.get('/getAll', getAllComposers);
ComposerRoutes.get('/:id', getComposerByID);
ComposerRoutes.post('/create', createComposer);

module.exports = ComposerRoutes;