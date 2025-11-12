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
    <main
      className={`${mainStyle} relative flex flex-col flex-1 h-screen text-white overflow-hidden`}
    >
      <title>{titlePage}</title>

      <Header />

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/img.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <section className={`relative z-10 pt-20 ${sectionStyle}`}>
        {children}
      </section>
    </main>
  );
}
