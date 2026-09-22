import { getMe } from "@/service/getMe";

export default async function HomeContent() {
  const user = await getMe();
  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <h2>{user?.data?.profile?.name}</h2>
    </div>
  );
}