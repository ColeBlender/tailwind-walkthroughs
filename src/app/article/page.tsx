import { Noto_Serif } from "next/font/google";
import { MoveLeft } from "lucide-react";

const font = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
});

function ArticlePage() {
  return (
    <main className={`flex min-h-screen gap-4 p-4 ${font.className}`}>
      <div className="mx-auto flex max-w-4xl gap-4">
        <div className="relative flex-1">
          <button className="absolute flex gap-1 rounded-full border border-zinc-500 px-4 py-2 transition-colors duration-200 ease-in-out hover:bg-zinc-200">
            <MoveLeft />
            Back to list
          </button>

          <h1 className="mt-24 text-5xl font-light">
            The Cultural Significance of Greenhouses
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <img src="/prof-pic.png" className="size-10 rounded-full" />
            <p>Cole Blender</p>
          </div>

          <div className="relative mt-10 flex flex-col gap-6">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident eligendi reprehenderit tenetur facere dolores
              consequuntur in. Quos dicta obcaecati, aliquam laborum nisi
              expedita saepe, rem aliquid inventore doloremque, veritatis
              sapiente.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolore inventore rem repellat quis! Repudiandae
              numquam, nulla hic atque doloremque, non optio voluptas,
              voluptatibus tempora perferendis vel rem culpa delectus!
            </p>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
          </div>
        </div>

        <div className="relative hidden flex-1 sm:block">
          <div className="flex h-full flex-col gap-4 pb-16">
            <div className="h-[60%] shadow-xl">
              <img
                className="size-full rounded-lg object-cover"
                src="/article-img-1.jpeg"
              />
            </div>
            <div className="h-[20%] shadow-xl">
              <img
                className="size-full rounded-lg object-cover"
                src="/article-img-2.jpeg"
              />
            </div>
            <div className="flex h-[20%] gap-4">
              <div className="flex-1 shadow-xl">
                <img
                  className="size-full rounded-lg object-cover"
                  src="/article-img-3.jpeg"
                />
              </div>

              <div className="flex size-full flex-1 items-center justify-center rounded-lg bg-blue-100 text-4xl shadow-xl">
                68+
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 flex gap-2">
            <button className="rounded-full border border-zinc-500 px-4 py-2 transition-colors duration-200 ease-in-out hover:bg-zinc-200">
              Likes 14K
            </button>
            <button className="rounded-full border border-zinc-500 px-4 py-2 transition-colors duration-200 ease-in-out hover:bg-zinc-200">
              Replies 342
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ArticlePage;
