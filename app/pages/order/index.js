import { MainLayout } from "../../components/MainLayout";
import contacts from "../../styles/contacts.module.css";
import Image from "next/image";
import vk from "../../public/vk.png";
import tg from "../../public/tg.png";
import phone from "../../public/phone.png";
import mail from "../../public/mail.png";
import FormSbor from "./FormSbor";
import IconBlock from "./IconBlock";

export default function Contacts() {
    return (
        <MainLayout title="Наши контакты">
            <div className={contacts.bodyPage}>
                <FormSbor />
                <div>
                    <div
                        style={{
                            fontWeight: 700,
                            fontSize: 20,
                            width: 320,
                            marginBottom: 25,
                        }}
                    >
                        Здесь вы можете оставить заявку, и наш менеджер с вами
                        свяжется
                    </div>
                    <div>
                        <div style={{ display: "flex" }}>
                            <div className="mr-4">
                                <IconBlock iconSrc={phone} text="89506822950" />
                                <IconBlock
                                    iconSrc={mail}
                                    text="dimaang23@gmail.com"
                                />
                            </div>
                            <div>
                                <IconBlock
                                    iconSrc={vk}
                                    path="https://vk.com/moyustimov"
                                    pathUser="ВКонтакте"
                                />
                                <IconBlock
                                    iconSrc={tg}
                                    path="https://t.me/moyustimov"
                                    pathUser="Телеграмм"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
