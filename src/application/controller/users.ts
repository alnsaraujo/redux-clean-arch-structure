import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../infrastructure/storage";
import { userActions } from "../../infrastructure/storage/user";

export function useUsersController() {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users);

    const onAddUser = (name: string) => dispatch(userActions.addUser({ name, age: 3}));

    return { users, onAddUser };
}