import { ArrowFatLineRight } from "@phosphor-icons/react";
import Post from "../components/post";

function App() {
  return (
    <div className="flex flex-row">
      <button className="fixed bg-brown-50 p-2 text-white-50 rounded-lg m-2 bottom-0 w-[80px] flex justify-center transition duration-300 ease-in-out hover:scale-95">
        <ArrowFatLineRight size={40} />
      </button>
      <div className=" bg-brown-100 flex flex-col p-2 items-center w-full">
        <div className="flex items-center flex-col my-3">
          <h1 className="text-5xl font-main font-bold text-white-100 tracking-wider">
            GAME DEVELOPER
          </h1>
          <h2 className="text-3xl font-main font-semibold text-white-50">
            Lucas Kenzo Kuwajima
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <Post
            titulo="Dev Vlog #01"
            paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium,
        neque eu rutrum sagittis, augue erat consectetur dolor, in aliquet urna
        felis eget est. Donec ac elementum enim. Curabitur sed tincidunt tortor.
        Vestibulum ac dui vitae magna ornare ultrices ut et orci. In aliquet,
        felis vitae faucibusr"
          />
          <Post
            titulo="Dev Vlog #02"
            paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium,
        neque eu rutrum sagittis, augue erat consectetur dolor, in aliquet urna
        felis egec fermentum ante hendrerit at.
        Pellentesque dictum rutrum fringilla. Aenean tincidunt quam orci, eget
        volutpat velit varius sed. Suspendisse dignissim placerat nisl, semper"
          />
          <Post
            titulo="Dev Vlog #03"
            paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium,
        neque eu rutrum sagittis, augue erat consectetur dolor, in aliquet urna
        felis eget est. Donec ac elementum enim. Curabitur sed tincidunt tortor.
        Vestibulum ac dui vitae magna ornare ultrices ut et orci. In aliquet,
        felis vitae faucibus tempus, velit eros laoreet nisi, sit amet aliquam
        justo felis varius tortor. Maecenas vehicula libero quis leo porttitor
        efficitur. Morbi egestas arcu enim, nec fermentum ante hendrerit at.
        Pellentesque dictum rutrum fringilla. Aenean tincidunt quam orci, eget
        volutpat velit varius sed. Suspendisse dignissim placerat nisl, semper"
          />
          <Post titulo="a" paragrafo="a" />
        </div>
      </div>
    </div>
  );
}

export default App;
