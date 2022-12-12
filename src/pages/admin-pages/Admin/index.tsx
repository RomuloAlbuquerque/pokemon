import AdminCard from "components/admin-components/AdminCard";
import AddressBar from "components/general-components/AddressBar";
import { Info } from "types/info";
import "./style.css";

const clients:Info = {
  info: 'Rosângela',
  subInfo: 'Seja Bem Vinda Ao Seu Espaço'
}

const Admin = () => {
  return (
    <div className="content-admin">
      <AddressBar info={clients}/>

      <AdminCard />
    </div>
  );
};

export default Admin;