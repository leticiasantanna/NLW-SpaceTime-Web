import githublogo from '../../assets/gitHub-logo.png'
import Image from 'next/image'

export default function Signature() {
  return (
    <div className="text-sm flex w-fit leading-relaxed text-gray-200">
      Feito por Letícia Sant{`'`}anna, veja o projeto no{' '}
      <a
        href="https://github.com/leticiasantanna"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={githublogo} alt="github logo" width={40} height={50} />
      </a>
    </div>
  )
}
