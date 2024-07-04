import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import IconElement from "renderer/components/IconElement/IconElement";

export default function ContactCard(data: any) {
  const haveNewMessage = data.id === 0 || data.id === 4
  return (
    <div className="contact-card">
      <div className="v-center-normal gap-3">
        <IconElement icon={faUserCircle} className="fs-32" />
        <div>
          <h6>Florencia Gonzales</h6>
          <p className="small">Lorem, ipsum dolor.</p>
        </div>
      </div>

      <div className="center-col">
        <p className={haveNewMessage ? 'active' : ''}>16:04</p>
        {haveNewMessage ? <div className="circle-number">{data.id + 1}</div> : null}
      </div>
    </div>
  )
}
