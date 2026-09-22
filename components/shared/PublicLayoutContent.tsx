
import { getMe } from "@/service/getMe";
import Navbar from "./navbar";

const PublicLayoutContent = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();

  return (
    <div>
      <Navbar user={user} />

      {children}
    </div>
  );
};

export default PublicLayoutContent;