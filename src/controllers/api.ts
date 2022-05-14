"use strict";

import { Request, Response } from "express";
import { check, validationResult } from "express-validator";


/**
 * List of API examples.
 * @route GET /api
 */
export const getApi = (req: Request, res: Response) => {
    res.json({ message: "HI" });
};

/**
 * Facebook API example.
 * @route POST /api/facebook
 */
 export const findTarget = async (req: Request, res: Response) => {
     return res.json();
};

