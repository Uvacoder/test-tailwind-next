import Image from 'next/image';

const CourseCard = function ({ videoId, title, circullum }) {
  return (
    <div
      className="h-60 w-80 flex flex-col rounded-xl overflow-hidden m-10 border-1 shadow-md cursor-pointer sm:motion-safe:hover:scale-95 duration-500"
      onClick={() => {
        console.log('object');
      }}
      onKeyDown={() => {
        console.log('object');
      }}
      role="presentation"
    >
      <div className=" h-4/5 flex flex-2 w-full relative self-start ">
        <Image
          src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`}
          layout="fill"
          objectFit="cover"
          alt={title}
          priority="lazy"
        />
      </div>
      <div className="flex flex-1 p-2 flex-col">
        <p className="font-semibold text-gray-700">{title}</p>
        <p className="text-gray-600 font-medium text-sm">{circullum}</p>
      </div>
    </div>
  );
};

export default CourseCard;
