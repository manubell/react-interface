import {BiCalendar} from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import appointmentList from "./data.json"
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  return (
    <div className="App container mx-auto mt-3">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top"/> Your appointments
      </h1>

      <AddAppointment/>
      <Search/>

      <ul className="divide-y divide-gray-200">
        {appointmentList.map(appointment => (
          <AppointmentInfo key={appointment.id} appointment={appointment}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
