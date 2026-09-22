import PublicLayoutContent from "@/components/shared/PublicLayoutContent";
import React, { Suspense } from "react";


const PublicLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicLayoutContent>{children}</PublicLayoutContent>
    </Suspense>
  );
};

export default PublicLayout;