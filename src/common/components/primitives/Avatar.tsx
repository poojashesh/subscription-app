import { UserRound } from 'lucide-react'

const Avatar = ({ src, alt, size = 20 }: { src?: string; alt?: string; size?: number }) => {
  if (!src) {
    return (
      <div className="rounded-full border p-2">
        <UserRound aria-label={alt ?? 'User avatar'} role="img" size={size} />
      </div>
    )
  }

  return <img src={src} alt={alt} className="rounded-full" style={{ width: size, height: size }} />
}

export default Avatar
