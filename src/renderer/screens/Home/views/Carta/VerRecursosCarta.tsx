import { faCarSide, faMagnifyingGlass, faVial, faWalking } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "renderer/components";
import CardBox from "renderer/components/CardBox/CardBox";
import IconElement from "renderer/components/IconElement/IconElement";
import TextInput from "renderer/components/TextInput/TextInput";
import { iconAmbulancia, iconBomberos, iconComisario, iconCuatriciclo } from "renderer/store/icons.index";

export default function VerRecursosCarta() {
    const navigate = useNavigate()

    return (
        <div>
            <div className='v-center-normal gap-1 mb-3'>
                <Button
                    variant='link'
                    className='w-auto'
                    style={{ paddingRight: 1 }}
                    onClick={() => navigate(-1)}
                >
                    {"< Ver Carta"}
                </Button>
                <span>/ {`Agregar Recursos`}</span>
            </div>

            <p className="cardTitle mb-3">Recursos</p>

            <div className="mb-3">
                <TextInput placeholder="Buscar" icon={faMagnifyingGlass} wrapperclassname="card-input--g w-100" />
            </div>

            <CardBox>
                <Tab.Container id="my-tab-id" defaultActiveKey="1">
                    <Row>
                        <Nav variant="tabs" className="mb-4 gap-2">
                            {[
                                { id: '1', text: "Ambulancias", icon: iconAmbulancia },
                                { id: '2', text: "Bomberos", icon: iconBomberos },
                                { id: '3', text: "Caminantes", icon: faWalking },
                                { id: '4', text: "Cuatriciclo ", icon: iconCuatriciclo },
                                { id: '5', text: "Móvil cientifica", icon: faVial },
                                { id: '6', text: "Móvil policial ", icon: iconComisario },
                                { id: '7', text: "Móvil transito", icon: faCarSide },
                            ].map((data, index) =>
                                <Nav.Item key={index}>
                                    <Nav.Link href="" eventKey={data.id}>
                                        <IconElement icon={data.icon} />
                                        {data.text}
                                    </Nav.Link>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Row>
                    <Tab.Content>
                        <Tab.Pane eventKey="1">
                            <ListOfResources type={'ambulancia'} data={Array.from({ length: 15 })} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                            <ListOfResources type={'bomberos'} data={Array.from({ length: 15 })} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                            <ListOfResources type={'caminantes'} data={Array.from({ length: 15 })} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                            <ListOfResources type={'cuatriciclo'} data={Array.from({ length: 15 })} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="5">
                            <ListOfResources type={'cientifica'} data={Array.from({ length: 15 })} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="6">
                            <ListOfResources type={'policial'} data={Array.from({ length: 15 })} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="7">
                            <ListOfResources type={'transito'} data={Array.from({ length: 15 })} />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </CardBox>
        </div>
    )
}

type ResourceType = 'ambulancia' | 'bomberos' | 'caminantes' | 'cuatriciclo' | 'cientifica' | 'policial' | 'transito'

const ListOfResources = ({ data, type }: { data: any[], type: ResourceType }) => {
    const getIcon = (_t: ResourceType) => {
        if (_t === 'ambulancia') return iconAmbulancia
        if (_t === 'bomberos') return iconBomberos
        if (_t === 'caminantes') return faWalking
        if (_t === 'cuatriciclo') return iconCuatriciclo
        if (_t === 'cientifica') return faVial
        if (_t === 'policial') return iconComisario
        if (_t === 'transito') return faCarSide
        return ''
    }

    const getCSS = (_t: ResourceType) => {
        if (_t === 'ambulancia') return 'bg-ambulancia'
        if (_t === 'bomberos') return 'bg-bomberos'
        if (_t === 'caminantes') return 'bg-caminantes'
        if (_t === 'cuatriciclo') return 'bg-cuatriciclo'
        if (_t === 'cientifica') return 'bg-cientifica'
        if (_t === 'policial') return 'bg-policial'
        if (_t === 'transito') return 'bg-transito'
        return ''
    }

    const {
        icon = getIcon(type),
        css = getCSS(type),
    } = {}

    const iconStyle: React.CSSProperties = {
        width: 40,
        height: 40,
        borderRadius: '50%'
    }

    // Different settings for FontAwesome icons
    const filteredIcons = () => type == 'caminantes' || type == 'cientifica' || type == 'transito'

    return (
        <div className="d-flex flex-wrap col-spacing">
            {data.map((item, idx) => <Col key={idx} md={12} xl={3}>
                <CardBox className="v-center-between p-0" style={{ alignItems: 'stretch' }}>
                    <div className="flex-1 p-3 py-4 v-center-between gap-2">
                        <div className="v-center gap-2">
                            {/* Icon */}
                            <div style={iconStyle} className={`${css} v-center`}>
                                <IconElement
                                    icon={icon}
                                    style={filteredIcons()
                                        ? { color: 'white', fontSize: 20 }
                                        : { width: 20, background: 'white' }
                                    }
                                />
                            </div>
                            {/* Info */}
                            <div>
                                <p style={{ textTransform: 'capitalize', marginBottom: -6 }}>
                                    {type}
                                </p>
                                <span>000000000000</span>
                            </div>
                        </div>

                        {/* Km */}
                        <div>
                            <small>+5,5km</small>
                        </div>
                    </div>
                    <div className="px-2 card-leftBorder v-center">

                        <Form.Check type="switch"/>
                    </div>
                </CardBox>
            </Col>)}
        </div>
    )
}