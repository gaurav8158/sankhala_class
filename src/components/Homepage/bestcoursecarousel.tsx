import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeadingAll from "../ui/HeadingAll";

export function Bestcoursecarousel() {
  return (
    <div className="w-full flex flex-col gap-10 mt-20 container mx-auto ">
      <HeadingAll
        head="Get access to the best Online Courses"
        desc="Experience our Unique Learning Methodology"
      />
      <div className="lg:px-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col  items-center justify-center p-2 h-[220px]">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/49x3b7QrdtA?si=tPZocTPYtnVy0aOx"
                      title="YouTube video player"
                      frameBorder="0" // Fix for JSX
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin" // Fix for JSX
                      allowFullScreen // Fix for JSX
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col  items-center justify-center p-2 h-[220px]">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/QvwRJVRDEO4?si=yeDqsMjb-xiKFBaH"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col  items-center justify-center p-2 h-[220px]">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/49x3b7QrdtA?si=tPZocTPYtnVy0aOx"
                      title="YouTube video player"
                      frameBorder="0" // Fix for JSX
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin" // Fix for JSX
                      allowFullScreen // Fix for JSX
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </div>
  );
}
