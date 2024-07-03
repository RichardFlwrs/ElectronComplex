import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "renderer/components";
import CardBox from "renderer/components/CardBox/CardBox";
import TextInput from "renderer/components/TextInput/TextInput";

export default function Mapa() {
  const navigate = useNavigate()

  return (
    <div id="main-map-section">
      <div className="v-center-between p-2">
        <TextInput
          icon={faMagnifyingGlass}
          placeholder='Buscar o escribir direccion'
          wrapperclassname="card-input--g flex-1"
        />

        <div className="flex-1">
        </div>

        <div className="flex-1 v-center-end px-2">
          <Button
            onClick={() => navigate('/home/zonas-mapa/camaras/nueva')}
            className="w-auto py-2 px-4"
          > Agregar camara </Button>
        </div>
      </div>

      <CardBox>
        <div className='v-center-normal gap-3 mb-3'>
          <div>
            <p>Zona 1</p>
          </div>
          <div>
            <p>Zona 2</p>
          </div>
          <div>
            <p>Zona 3</p>
          </div>
          <div>
            <p>Zona 4</p>
          </div>
        </div>

        {/* TODO MAP */}
        <div
          style={{
            backgroundColor: 'cyan',
            height: 500,
            borderRadius: 10,
          }}
          className='w-100'
        ></div>
      </CardBox>

      <div style={{ paddingLeft: '2rem' }} className="mb-5">
        <Button onClick={() => navigate(`camaras`)} variant="link" className="">
          Ver todas las cámaras
        </Button>
      </div>
    </div>
  )
}
