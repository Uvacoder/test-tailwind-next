import frontEndData from '../data/frontend.json';
// import CourseCard from '../components/course-card';

const Home = function ({ courses }) {
  // console.log(courses);
  // const opts = {
  //   height: '200',
  //   width: '200',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0,
  //     rel: 0,
  //     showinfo: 0,
  //     ecver: 2,
  //     modestbranding: 1
  //   }
  // };

  return (
    <div className=" flex w-full ">
      <div className="w-80 hidden md:hidden lg:flex flex-col shadow-lg">
        <p>Link1</p>
        <p>Link1</p>
        <p>Link1</p>
      </div>
      <div className="w-full h-80 bg-red-500">
        <p className="text-2xl font-bold text-green-800">Hello this is a test</p>
        {/* {courses.internet.map((el, id) => (
          <CourseCard key={id} videoId={el.videoId} title={el.title} circullum={el.circullum} />
        ))} */}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => ({ props: frontEndData });
