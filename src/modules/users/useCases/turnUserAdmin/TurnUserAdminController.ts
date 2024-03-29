import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    console.log("wwwwwwwww");
    try {
      const user = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      });

      console.log(user);

      return response.json(user);
    } catch (err) {
      return response.status(404).json({ error: err });
    }
  }
}

export { TurnUserAdminController };
