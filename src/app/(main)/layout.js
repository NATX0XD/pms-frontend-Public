import dynamic from "next/dynamic";
import { Providers } from "./providers";
const AppLayout = dynamic(() => import("@/layouts"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <Providers>
      <AppLayout>{children}</AppLayout>
    </Providers>
  );
}
