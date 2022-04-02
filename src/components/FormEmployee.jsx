import Address from "./Address";
import DatesPicker from "./DatesPicker";
import Department from "./Department";

export default function FormEmployee() {
  return (
    <div>
      <form>
        <label htmlFor="firstname"></label>
        <input type="text" id="firstname"></input>
        <label htmlFor="lastname"></label>
        <input type="text" id="lastname"></input>
        <DatesPicker />
        <Address />
        <Department />
      </form>
    </div>
  );
}
