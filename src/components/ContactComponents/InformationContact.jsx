export default function InformationContact() {
  let h1Style = "text-red font-bold text-4xl";
  return (
    <div className="bg-grayDark w-100 rounded-2xl border border-gray-800 shadow-2xl p-10 flex flex-col gap-12.5 font-oswald ">
      <div className="space-y-3">
        <h1 className={h1Style}>Visit</h1>
        <p>📍123 Iron Street</p>
        <p>🏠Strength District, City</p>
      </div>
      <div className="space-y-3">
        <h1 className={h1Style}>Call</h1>
        <p>📞(555) 123-4567</p>
      </div>
      <div className="space-y-3">
        <h1 className={h1Style}>Email</h1>
        <p>📥hello@ironbeast.gym</p>
      </div>

      <div className="space-y-3">
        <h1 className={h1Style}>Hours</h1>
        <p>📅Members: 24/7 </p>
        <p>⌛Reception: 8am – 9pm</p>
      </div>
    </div>
  );
}
