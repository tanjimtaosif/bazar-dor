import Image from "next/image";
import type { SessionUser } from "@/types";

interface AvatarProps {
  user: SessionUser;
  size?: number;
}

// Avatar
export default function Avatar({ user, size = 36 }: AvatarProps) {
  if (user.image) {
    return (
      <Image
        src={user.image}
        alt={user.name}
        width={size}
        height={size}
        className="rounded-lg object-cover"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-lg bg-primary font-semibold text-primary-content"
      style={{ width: size, height: size, fontSize: size * 0.45 }}
    >
      {user.name.charAt(0).toUpperCase()}
    </span>
  );
}
