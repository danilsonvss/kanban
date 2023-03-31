import logo from "./icons/logo.svg";
import boards_icon from "./icons/boards.svg";
import teams_icon from "./icons/teams.svg";
import reports_icon from "./icons/reports.svg";
import settings_icon from "./icons/settings.svg";

export default function Navbar(props: any) {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="Logo" />
      <ul>
        <li>
          <a href="/" className="active">
            <img src={boards_icon} alt="Boards icon" />
            Boards
          </a>
        </li>
        <li>
          <a href="/teams">
            <img src={teams_icon} alt="Equipes icon" />
            Equipes
          </a>
        </li>
        <li>
          <a href="/reports">
            <img src={reports_icon} alt="Relatórios icon" />
            Relatórios
          </a>
        </li>
        <li>
          <a href="/settings">
            <img src={settings_icon} alt="Ajustes icon" />
            Ajustes
          </a>
        </li>
      </ul>
    </div>
  );
}
