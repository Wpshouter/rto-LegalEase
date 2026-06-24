
import { getAllUsers } from '@/data/dataFetch';
import ManageUsersTable from './ManageUsersTable';

export default async function Page() {

  const users =
    await getAllUsers();

  return (
    <ManageUsersTable
      users={users}
    />
  );

}