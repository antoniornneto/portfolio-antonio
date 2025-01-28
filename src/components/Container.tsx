import Header from "./Header";

export default function Container({
  children,
  mainStyle,
  sectionStyle = "",
}: {
  children: React.ReactNode;
  mainStyle?: string;
  sectionStyle?: string;
}) {
  return (
    <main className={`${mainStyle} h-screen flex flex-col`}>
      <Header />
      <div className={`h-full ${sectionStyle}`}>{children}</div>
    </main>
  );
}
