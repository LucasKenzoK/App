function Post({ titulo = "", paragrafo = "" }) {
  return (
    <div className="h-fit w-fit bg-brown-50 rounded-xl p-5 text-3xl text-white-50 font-main my-3">
      <h1 className="font-bold tracking-wider"> {titulo} </h1>
      <p className="text-2xl max-h-[800px] max-w-[800px] p-1 mt-3 tracking-normal">
        {paragrafo}
      </p>
    </div>
  );
}

export default Post;
