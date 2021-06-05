import { User } from "../models/User"

test('it should be ok', () => {
	const user = new User()

	user.name = 'Tarsis'

	expect(user.name).toEqual('Tarsis')
})