const Composer = require("./composer.model")
const { setError } = require("../../helpers/utils")

const getAllComposers = async (req, res, next) => {
    try {
        const composers = await Composer.find()
        return res.json({
            status: 200,
            message: "Recover all composers",
            data: { composers }
        })

    } catch (error) {
        return next(setError(500, "Failed all Composers"));
    }
}

const getComposerByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const composer = await Composer.findById(id)
        if(!composer) return next(setError(404, 'Composer not found'))
        return res.json({
            status: 200,
            message: "Recover composer by ID",
            data: { composer }
        })

    } catch (error) {
        return next(setError(500, "Failed Composer by ID"));
    }
}

const createComposer = async (req, res, next) => {
    try {

        const ComposerToSave = new Composer(req.body);
        const composerDB = await ComposerToSave.save();
        return res.json({
            status: 201,
            message: "Create composer",
            data: { composerDB }
        })

    } catch (error) {
        return next(setError(500, "Failed to create Composer"));
    }
}

module.exports = { getAllComposers, getComposerByID, createComposer };