import { Noto_Serif } from "next/font/google";
import { MoveLeft } from "lucide-react";

const font = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
});

function ArticlePage() {
  return (
    <main
      className={`bg-white text-black min-h-screen flex gap-4 p-4 ${font.className}`}
    >
      <div className="flex-1 relative">
        <button className="absolute rounded-full py-2 px-4 flex gap-1 border border-zinc-500 hover:bg-zinc-200 transition-colors duration-200 ease-in-out">
          <MoveLeft />
          Back to list
        </button>

        <h1 className="text-5xl font-light mt-24">
          The Cultural Significance of Greenhouses
        </h1>
        <div className="flex items-center gap-2 mt-4">
          <img src="/prof-pic.png" className="rounded-full size-10" />
          <p>Cole Blender</p>
        </div>

        <div className="flex flex-col gap-6 mt-10 relative">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            accusantium! Veniam, facilis reiciendis nulla nemo beatae,
            asperiores quod voluptatem natus dignissimos omnis consequatur
            tenetur officiis, soluta provident impedit culpa nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis, blanditiis quo quidem provident possimus molestias hic
            incidunt dignissimos deleniti dolore facere repellendus sint
            exercitationem odio excepturi aliquam maiores. Numquam, molestias.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            eligendi reprehenderit tenetur facere dolores consequuntur in. Quos
            dicta obcaecati, aliquam laborum nisi expedita saepe, rem aliquid
            inventore doloremque, veritatis sapiente.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            dolore inventore rem repellat quis! Repudiandae numquam, nulla hic
            atque doloremque, non optio voluptas, voluptatibus tempora
            perferendis vel rem culpa delectus!
          </p>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="flex flex-col h-full gap-4 pb-16">
          <div className="h-[60%] shadow-xl">
            <img
              className="rounded-lg object-cover size-full"
              src="/article-img-1.jpeg"
            />
          </div>
          <div className="h-[20%] shadow-xl">
            <img
              className="rounded-lg object-cover size-full"
              src="/article-img-2.jpeg"
            />
          </div>
          <div className="h-[20%] flex gap-4">
            <div className="flex-1 shadow-xl">
              <img
                className="rounded-lg object-cover size-full"
                src="/article-img-3.jpeg"
              />
            </div>

            <div className="rounded-lg bg-blue-100 size-full flex-1 text-4xl flex items-center justify-center shadow-xl">
              68+
            </div>
          </div>
        </div>

        <div className="flex gap-2 absolute bottom-0 right-0">
          <button className="border border-zinc-500 py-2 px-4 rounded-full hover:bg-zinc-200 transition-colors duration-200 ease-in-out">
            Likes 14K
          </button>
          <button className="border border-zinc-500 py-2 px-4 rounded-full hover:bg-zinc-200 transition-colors duration-200 ease-in-out">
            Replies 342
          </button>
        </div>
      </div>
    </main>
  );
}

export default ArticlePage;
