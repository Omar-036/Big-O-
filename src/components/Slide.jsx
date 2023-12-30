import {
  Carousel,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";

function Slide({ title, subTitle }) {
  return (
    <div className="relative h-full w-full">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute bg-black/50 inset-0 grid h-full w-full place-items-center ">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            {subTitle}
          </Typography>
          <div className="flex justify-center gap-2">
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
  );
}

export default Slide;
