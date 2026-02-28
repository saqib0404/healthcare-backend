import { Router } from "express";
import { SpecialtyRouter } from "../modules/specialty/specialty.router";
import { AuthRouter } from "../modules/auth/auth.router";
import { userRoutes } from "../modules/user/user.route";

const router = Router();

router.use("/auth", AuthRouter)
router.use("/specialties", SpecialtyRouter);
router.use("/users", userRoutes);

export const IndexRouter = router;
