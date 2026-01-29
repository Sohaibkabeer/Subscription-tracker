import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>res.send({ title: "GET all Subscriptions" }));

subscriptionRouter.post("/", (req, res) =>res.send({ title: "CREATE Subscriptions" }));

subscriptionRouter.get("/:id", (req, res) =>res.send({ title: "GET Subscription details" }));

subscriptionRouter.put("/:id", (req, res) =>res.send({ title: "UPDATE Subscriptions" }));

subscriptionRouter.delete("/:id", (req, res) =>res.send({ title: "DELETE Subscriptions" }));

subscriptionRouter.get("/user/:id", (req, res) =>res.send({ title: "GET user Subscriptions" }));

subscriptionRouter.put("/:id/cancel", (req, res) =>res.send({ title: "Cancel Subscriptions" }));

subscriptionRouter.get("/upcoming-renewals", (req, res) =>res.send({ title: "GET upcoming renewals" }));

export default subscriptionRouter;
