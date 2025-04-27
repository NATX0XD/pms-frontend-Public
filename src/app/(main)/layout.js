import dynamic from "next/dynamic";
import { Providers } from "./providers";
import "../../themes/styles/globals.css";

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
