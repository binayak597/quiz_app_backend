import { Router } from "express";
import { dropQuestions, getQuestions, insertQuestions } from "../controller/questionController.js";
import { dropResult, getResult, insertResult } from "../controller/resultController.js";

const router = Router();

/** question route APIs*/

router.route("/questions")
        .get(getQuestions)
        .post(insertQuestions)
        .delete(dropQuestions);

/** Result route APIs */

router.route("/result")
.get(getResult)
.post(insertResult)
.delete(dropResult);
export default router;