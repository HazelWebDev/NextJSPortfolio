import Image from "next/image";

const files = [
  {
    title: "Crochet Monstera",
    size: "Soft White with Lime Monsteras",
    source: "/2.png",
  },
  {
    title: "Crochet Donkey Tail",
    size: "Spring Green with Dark Vines",
    source: "/1.png",
  },
  // {
  //   title: "Crochet Donkey Tail",
  //   size: "Pink and Vibrant Leaves",
  //   source: "7.png",
  // },
  {
    title: "A Crocheted String of Hearts",
    size: "Snow White and Sage Hearts",
    source: "/4.png",
  },

  {
    title: "Heart Seeker's Plant",
    size: "Soft Pink and Fern Green",
    source: "/6.png",
  },
  {
    title: "Crochet Donkey Tail",
    size: "Pink and Vibrant Leaves",
    source: "/5.png",
  },
  {
    title: "Crochet Donkey Tail",
    size: "Pink and Vibrant Leaves",
    source: "/3.png",
  },
];

export default function Gallery() {
  return (
    <div className="mb-32 px-3 sm:px-3 md:px-3 lg:px-3 xl:px-0">
      <h1 className="text-primary text-center text-2xl sm:text-4xl lg:text-4xl font-extrabold">
        Say Hello to my Crochet Plant Gallery!
      </h1>
      <p className="text-secondary text-center mb-10 pt-2 pb-8 sm:text-lg">
        plants that you don&apos;t have to worry about!
      </p>
      <ul
        role="list"
        className="grid gap-x-6 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
      >
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group aspect-h-7 aspect-w-10 block overflow-hidden rounded-lg border-2 border-secondary transition duration-300 ease-in-out hover:border-primary sm:border-2 md:border-4 lg:border-6">
              <Image
                src={file.source}
                alt=""
                width={400}
                height={400}
                className="object-cover group-hover:opacity-75 sm:h-40 sm:w-40 md:h-96 md:w-96 lg:h-96 lg:w-96 xl:h-auto xl:w-auto"
              />

              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="mt-2 block truncate text-xl text-center font-medium text-primary">
              {file.title}
            </p>
            <p className="block text-md text-center font-medium text-secondary">
              {file.size}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
