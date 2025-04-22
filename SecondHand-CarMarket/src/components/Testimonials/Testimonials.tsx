import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
const Testimonials = () => {
  return (
    <div className="relative w-full bg-red-500 pb-[816px]">
      <img
        loading="lazy"
        src="/Testimonials/image.png"
        alt="testimonials"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-transparent bg-[linear-gradient(0deg,_rgb(0,_0,_0)_0%,_rgba(0,_0,_0,_0)_73.55%)] text-white">
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default Testimonials;

function TestimonialsCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent className="flex justify-between gap-2">
        <CarouselItem>
          <div className="flex w-full flex-col items-center justify-center gap-10 px-20 text-center">
            <div className="mb-10 text-5xl">
              This is our first time renting with SIXT and it we will make SIXT
              our first choice in the future.
            </div>
            <div>— Skip, Sydney</div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex w-full flex-col items-center justify-center px-20 text-center">
            <div className="mb-10 text-5xl">
              We recently had the pleasure of renting a car from SIXT Melbourne
              airport, and I must say, it was an exceptional experience from
              start to finish.
            </div>
            <div>— April, Melbourne</div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="absolute right-70 -bottom-60 h-10 bg-pink-500">
        <CarouselPrevious className="bg-red-400" variant={'ghost'} />
        <CarouselNext className="bg-red-400" variant={'ghost'} />
      </div>
    </Carousel>
  );
}
