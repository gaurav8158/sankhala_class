import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StaticImageData } from "next/image";
interface KtseDialogCloseProps {
  imageSrc: StaticImageData; // Updated to accept StaticImageData
}
export const KtseDialogClose: React.FC<KtseDialogCloseProps> = ({
  imageSrc,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-xl">
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white ">
        <DialogHeader>
          <DialogTitle>Transaction Image</DialogTitle>
          <DialogDescription>Screenshot of payment</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center  w-full">
          <img src={imageSrc.src} alt="icon" width="200" height="200" />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="bg-gray-100 rounded-xl"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
