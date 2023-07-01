import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { useCallback } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const UserImageUpload = ({
  onChange,
  value,
  user,
}: {
  onChange?: (value: string) => void;
  value?: string;
  user?: any;
}) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange?.(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="kynbyrvd"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <button type="button" onClick={() => open?.()}>
            <Avatar className="w-14 h-14 absolute top-5 right-0 lg:right-5 border-2 border-zinc-500 hover:border-zinc-300">
              <AvatarImage src={user.image} alt={user.firstname} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {value && (
              <Avatar className="w-14 h-14 absolute top-5 right-0 lg:right-5">
                <AvatarImage src={value} alt={user.firstname} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
          </button>
        );
      }}
    </CldUploadWidget>
  );
};
