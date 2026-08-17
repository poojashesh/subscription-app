import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'blocks' | 'outline' }

export default function Button({ variant = 'default', className = '', ...props }: ButtonProps) {
  const styles = variant === 'outline' ? 'border border-[#ff8585] text-[#ff5555]' : variant === 'blocks' ? 'bg-[#f8f8f8] text-black' : 'bg-[#087c4b] text-white'
  return <button className={`rounded-[10px] font-extrabold ${styles} ${className}`} {...props} />
}
