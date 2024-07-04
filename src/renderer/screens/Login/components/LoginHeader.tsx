import MyImage from "resources/public/logo_911.png"

export default function LoginHeader({ title, subtitle }: any) {
   return (
      <div className='center-col mb-5'>
         <img src={MyImage} alt="" width={100} height={100} />
         <h2 style={{ fontWeight: 'bold' }}>{title}</h2>
         <p>{subtitle}</p>
      </div>
   )
}
