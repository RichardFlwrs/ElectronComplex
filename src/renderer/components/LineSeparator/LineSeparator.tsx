
import styles from './styles.module.sass'


type LineSeparatorProps = {
   width?: string | number

}

export default function LineSeparator(P: LineSeparatorProps) {

   const lineCss: React.CSSProperties = {
      width: P.width || '100%',
      background: styles.color,
      height: 1,

   }
   return (
      <div style={lineCss}></div>
   )
}
