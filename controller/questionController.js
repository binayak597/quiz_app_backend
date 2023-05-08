import questionModel from "../models/questionModel.js";
import questions, { answers } from "../questions/data.js"

export const getQuestions = async (req, res) => {
    try {
        await questionModel.find()
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                res.send({ msg: "Couldn't load the questions" });
            })
    } catch (error) {
        res.send({ error });
    }
}

export const insertQuestions = async (req, res) => {
    try {
        await questionModel.create({
            questions,
            answers
        })
            .then((result) => res.send("Data saved successfully"))
            .catch((error) => res.send({ msg: "There is some problem while saving the data." }));

    } catch (error) {
        res.send({ error });
    }
}

export const dropQuestions = async (req, res) => {
    try {
        await questionModel.deleteMany()
            .then((result) => res.send({ msg: "Questions are deleted successfully" }))
            .catch((error) => res.send({ msg: "Questions are not deleted" }));

    } catch (error) {
        console.log({ error });
    }
}