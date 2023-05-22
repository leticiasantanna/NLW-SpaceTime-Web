import nlwLogo from '../../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="logo nlw" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua vida e compartilhe (ou não) com o
          mundo!
        </p>
      </div>
      <a
        className="text-black inline-block rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none hover:bg-green-600"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}