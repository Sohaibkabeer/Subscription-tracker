import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription } from "../controller/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>res.send({ title: "GET all Subscriptions" }));

subscriptionRouter.post("/",authorize ,createSubscription);

subscriptionRouter.get("/:id", (req, res) =>res.send({ title: "GET Subscription details" }));

subscriptionRouter.put("/:id", (req, res) =>res.send({ title: "UPDATE Subscriptions" }));

subscriptionRouter.delete("/:id", (req, res) =>res.send({ title: "DELETE Subscriptions" }));

subscriptionRouter.get("/user/:id", (req, res) =>res.send({ title: "GET user Subscriptions" }));

subscriptionRouter.put("/:id/cancel", (req, res) =>res.send({ title: "Cancel Subscriptions" }));

subscriptionRouter.get("/upcoming-renewals", (req, res) =>res.send({ title: "GET upcoming renewals" }));

export default subscriptionRouter;
