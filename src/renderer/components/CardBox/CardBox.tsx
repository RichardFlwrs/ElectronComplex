import { PropsWithChildren } from 'react'

export default function CardBox(P: PropsWithChildren<React.ButtonHTMLAttributes<HTMLDivElement>>) {

   const combinedClassNames = ['card-box-style', P.className].join(' ')

   return (
      <div {...P} className={combinedClassNames}>
         {P.children}
      </div>
   )
}
