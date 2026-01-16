import Image from 'next/image'

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          src="/images/chatgpt-20image-209-20ene-202026-2c-2017-13-08-20-281-29.png"
          alt="Marcia Glow Studio"
          width={120}
          height={43}
          className="h-8 w-auto"
        />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.{' '}
        </p>
      </div>
    </footer>
  )
}
