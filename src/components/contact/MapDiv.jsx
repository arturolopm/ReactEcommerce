const MapDiv = () => {
  return (
    <>
      <div className=" mx-auto mb-4 flex min-h-full grow justify-center ">
        <div className="  flex h-full w-full max-w-4xl grow justify-center bg-slate-100 object-cover">
          <iframe
            className=" min-h-[300px] w-3/4 overflow-hidden"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=cra%2020%2033a-32&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default MapDiv;
