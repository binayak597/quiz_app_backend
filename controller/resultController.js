import resultModel from "../models/resultModel.js";

export const getResult = async (req, res) => {
    try {
        await resultModel.find()
        .then((result) => res.send(result))
        .catch((error) => res.send({msg: "Couldn't load the result"}));

    } catch (error) {
        res.send({error});
    }
}

export const insertResult = async (req, res) => {
    try {
        const {userName, result, attempts, points, achieved} = req.body;
        await resultModel.create({
            userName,
            result,
            attempts,
            points,
            achieved
        })
        .then((result) => res.send({msg: "Result saved successfully"}))
        .catch((error) => res.send({msg: "There is some problem while saving the result"}));

    } catch (error) {
        res.send({error});
    }
}

export const dropResult = async (req, res) => {
    try {
        await resultModel.deleteMany()
        .then((result) => res.send({msg: "Result is deleted successfully"}))
        .catch((error) => res.send({msg: "Result is not deleted"}))

    } catch (error) {
        res.send({error});
    }
}

// {
//     "userName": "Binayak",
//     "result": 0,
//     "attempts": 3,
//     "points": 30,
//     "achieved": "Passed"
//   }