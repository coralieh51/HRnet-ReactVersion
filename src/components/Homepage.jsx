import { Link } from "react-router-dom";
import CurrentEmployees from "./CurrentEmployees";
import Header from "./Header";
import FormEmployee from "./FormEmployee";
import newRecord from "../features/recordEmployee";
import ConfirmationModal from "./ConfirmationModal";

export default function Homepage() {
  return (
    <div>
      {newRecord && <ConfirmationModal />}
      <Header />
      <Link to="/employees" element={<CurrentEmployees />}>
        View current employees
      </Link>
      <FormEmployee />
    </div>
  );
}
