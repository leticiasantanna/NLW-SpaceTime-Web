import { getUser } from '@/lib/auth'
import Image from 'next/image'

export default function Signin() {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        alt="url do avatar github"
        width={50}
        height={50}
        className="h-10 w-10 rounded-full"
      />

      <p className="text-sm max-w-[140px] leading-snug">
        {name}
        <a href="" className="text-red-400 hover:text-red-300 block">
          Quero sair
        </a>
      </p>
    </div>
  )
}
