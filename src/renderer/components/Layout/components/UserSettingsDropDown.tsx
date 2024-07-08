import { useNavigate } from "react-router-dom";
import { Button } from "renderer/components/Button/Button";
import DropDown from "renderer/components/DropDown/DropDown";
import IconElement from "renderer/components/IconElement/IconElement";
import TextInput from "renderer/components/TextInput/TextInput";
import { iconLock, iconPerfilAlt } from "renderer/store/icons.index";

export default function UserSettingsDropDown() {
    const nav = useNavigate()

    const circleStyle = {
        background: 'gray',
        borderRadius: '50%',
        height: 50,
        width: 50,
        color: 'white',
        fontSize: 25
    }

    const quitSession = () => {
        nav('/')
    }

    return <DropDown
        parentId={'UserSettingsDropDown-id'}
        classContainer='no-border SettingsDropDown'
        className='w-auto no-shadows'
        dropdownParent={<IconElement icon={iconPerfilAlt} className="fs-18" />}
        withCloseBtn={true}
        ddOption={{ width: '22rem', top: 0 }}
    >
        <div className=''>
            {/* User info */}
            <div className="v-center-normal gap-3 mb-3">
                <div className='v-center' style={circleStyle}>
                    A
                </div>

                <div>
                    <p className="bolder">Nombre y Apellido</p>
                    <p>Lorem Ipsum</p>
                </div>
            </div>

            {/* Reset Password */}
            <div className="py-3">
                <TextInput placeholder="Contraseña actual" icon={iconLock} wrapperclassname="card-input mb-3" />
                <TextInput placeholder="Nueva contraseña" icon={iconLock} wrapperclassname="card-input mb-3" />
                <TextInput placeholder="Repetir contraseña" icon={iconLock} wrapperclassname="card-input mb-3" />

                <Button variant="link" className="w-auto">
                    Guardar contraseña neva
                </Button>
            </div>

            <Button variant="link" className="w-auto mt-2" onClick={quitSession}>
                Cerrar sesión
            </Button>
        </div>
    </DropDown>
}
