import {
  Carousel,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Slider({
  autoplay = false,
  height = "100%",
  loop = false,
}) {
  return (
    <div>
      <div
        className={`lg:container h-[${height}]  mx-auto overflow-hidden h-[60vh]`}
      >
        <Carousel
          className="overflow-hidden"
          autoplay={autoplay}
          loop={loop}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="bg- !absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <div className="relative h-full w-full">
            <img
              src="../src/assets/slide1.png"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute bg-black/30 inset-0 grid h-full w-full items-center ">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Algorithm Is Easy
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Learn algorithms in an interactive and simplified way
                </Typography>
                <div className="flex  gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center ">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-end ">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
