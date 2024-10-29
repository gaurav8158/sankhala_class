import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import rankcard1 from "../../../Public/rankcard/rankcard1.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Rankcarousal() {
  return (
    <div className="w-full container m-auto lg:px-10">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              {" "}
              {/* Ensure each card takes full width */}
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-2 sm:p-6">
                    <Image
                      src={rankcard1}
                      alt="Mole Thumbnail"
                      width={200}
                      height={200}
                      layout="responsive" // Makes image responsive
                      objectFit="contain" // Ensures image fits within its container
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
  );
}
