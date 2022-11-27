function Header() {
  return (
    <div className="bg-sky-800/100 p-36 pb-96">
      <div className="flex flex-col items-center text-center space-y-4 p-20 pb-56 font-serif tracking-widest">
        <h2 className="basis-30 content-center text-3xl text-neutral-400 p-2">HI, MY NAME IS</h2>
        <h1 className="basis-30 content-center text-7xl text-sky-600 p-2">Himanshu Ranjan.</h1>
        <p className="basis-30 content-center text-7xl text-sky-600 p-2">I am a backend developer.</p>
        <p className="basis-30 content-center text-3xl text-neutral-400">
          I like to build efficient and scalable backend api's. Currently I am working as a SDE-1 at APPOINTY.
        </p>
      </div>
    </div>
  );
}

export default Header;
