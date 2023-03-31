import Navbar from "./navbar";
import Main from "./main";

export default function Layout({
  title,
  children,
}: {
  title: String;
  children: React.ReactNode;
}) {
  return (
    <div className="app">
      <Navbar title={title} />
      <Main>{children}</Main>
    </div>
  );
}
