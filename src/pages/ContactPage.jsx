import FormContact from "../components/ContactComponents/FormContact";
import GetInTouch from "../components/ContactComponents/GetInTouch";
import InformationContact from "../components/ContactComponents/InformationContact";

export default function ContactPage() {
  return (
    <>
      <GetInTouch />
      <div className="py-20 flex flex-col md:flex-row justify-between gap-12.5">
        <InformationContact />
        <FormContact />
      </div>
    </>
  );
}
