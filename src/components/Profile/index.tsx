import { UserIcon } from "./UserIcon"
import { UserName } from "./UserName"

export const Profile = () => {
  return (
    <>
      <div className="flex-center flex-col gap-2 w-full h-full">
        <UserIcon />
        <UserName />
      </div>
    </>
  )
}