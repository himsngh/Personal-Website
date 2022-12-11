import Button from "./Button";

function Header() {
  return (
    <div className="bg-blue-gloss p-20 pb-96">
      <div>
        <div className="flex flex-col items-center text-center space-y-4 p-20 pb-56 font-heading tracking-widest">
          <h2 className="basis-30 content-center text-3xl text-neutral-400 p-1">
            HI, MY NAME IS
          </h2>
          <h1 className="basis-30 font-heading content-center text-7xl text-heading p-2">
            Himanshu Ranjan.
          </h1>
          <div className="basis-30">
            <p className="content-center font-heading text-6xl text-heading py-2">
              I am a backend developer.
            </p>
            <div className="pt-2">
              <p className="text-3xl text-neutral-400 mx-48">
                I like to build and break stuff. If there is any error return it
                😎. Currently I am working as a SDE-1 at Appointy IT PVT LTD. I enjoy solving problems not limited to programming.
              </p>
            </div>
          </div>
          <div className="py-5">
            <Button buttonName="Do you want to collaborate ?"  link="" id="collaborate"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
