import workout1 from "../assets/workout-1.mp4"
import workout2 from "../assets/workout-2.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Transform Your 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}Fitness Journey
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Discover the best workouts, nutrition tips, and health advice to help you achieve your fitness goals. Find effective exercise routines, balanced meal plans, and expert advice to support your journey to a healthier you.
        </p>
        <div className="flex justify-content my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
            Join Now
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Explore Workouts
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={workout1} type="video/mp4" />
                Your browser does not support the video tag
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={workout2} type="video/mp4" />
                Your browser does not support the video tag
            </video>
        </div>
    </div>
  )
}

export default HeroSection