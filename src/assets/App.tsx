import InputBox from "../components/inputBox";
import Post from "../components/post";

function App() {
  return (
    <div className="flex flex-col items-center w-fill h-fill bg-brown-100">
      <div className="flex flex-col items-center tracking-widest">
        <h1 className="mt-5 text-5xl font-main font-bold text-white-100 tracking-wider">
          GAME DEVELOPER
        </h1>
        <h2 className="md-2 text-3xl font-main font-semibold text-white-50">
          Lucas Kenzo Kuwajima
        </h2>
      </div>
      <div>
        <InputBox />
      </div>
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
    </div>
  );
}

export default App;
