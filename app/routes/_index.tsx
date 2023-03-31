import Layout from "~/layout";
import pencil_icon from "../icons/pencil.svg";

export default function Index() {
  return (
    <Layout title="Boards">
      <h1>
        Meu Kanban <img src={pencil_icon} alt="Pencil" />
      </h1>
    </Layout>
  );
}
