import Header from "./Header";

export default function Container({
  children,
  mainStyle,
  sectionStyle = "",
  titlePage,
}: {
  children: React.ReactNode;
  mainStyle?: string;
  sectionStyle?: string;
  titlePage: string;
}) {
  return (
    <main className={`${mainStyle} flex flex-col text-white`}>
      <title>{titlePage}</title>
      <Header />
      <div className={`h-full ${sectionStyle}`}>{children}</div>
    </main>
  );
}
