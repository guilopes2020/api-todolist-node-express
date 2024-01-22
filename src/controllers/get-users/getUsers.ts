import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
    constructor(private readonly getUsersRepository: IGetUsersRepository) {}

    async handle() {
        try {
            const users = await this.getUsersRepository.getUsers();

            return {
                satausCode: 500,
                body: users,
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Something went wrong. Please try again!'
            }
        }
    }
}