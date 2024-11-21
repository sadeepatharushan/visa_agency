import Navbar from "@/components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
