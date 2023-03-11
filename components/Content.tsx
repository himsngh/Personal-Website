import Image from "next/image";
import profileImage from "../public/profile-pic.jpeg";

function Content() {
  return (
    <div className="px-40 p-40 mt-5">
      <div className="flex">
        <div className="mr-20">
          <Image
            src={profileImage}
            alt="My profile picture."
            style={{
              borderRadius: 10,
            }}
            height={1600}
          />
        </div>
        <div className="font-heading text-2xl text-neutral-400">
          <p>
            <span className="text-4xl">
              I'm <span className="text-indigo-700">Himanshu Ranjan.</span>
            </span>
          </p>

          <br></br>

          <p>
            👨‍💻 I have been coding for nearly 3 years. I am software developer
            who loves building efficient backend applications and learning new
            technologies. Currenlty I am focused on improving my backend
            knowledge and learning cloud and frontend (if you are reading this
            then I have learned quite a bit😉).
          </p>

          <br></br>

          <p>
            👨 When I am not coding, I'm a proud companion of WeekXnd🐶.
            Travelling somewhere probably the gym, doing some serious netflix
            marathon, listening to music or reading a book.
          </p>

          <br></br>

            {/* https://nextjs.org/docs/messages/react-hydration-error - due to using div inside paragraph tag */}
          <div>
            <p>My preferred weapon of choice:</p>

            <ol className="list-disc list-inside flex flex-wrap flex-row">
              <li className="basis-1/2">Golang</li>
              <li className="basis-1/2">PostgreSQL</li>
              <li className="basis-1/2">Docker</li>
              <li className="basis-1/2">Google Cloud Platform</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
