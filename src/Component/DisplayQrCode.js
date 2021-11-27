import React from "react"
import { QRCode } from "react-qr-svg"
import {Button} from "@material-ui/core";
import moment from "moment";

const styles = {
    root: {
      fontFamily: "sans-serif",
    },
    h1: {
      textAlign: "center"
    },
    qrcode: {
      textAlign: "center"
    }
}

export default class DisplayQrCode extends React.Component {
    state = {
        doctor: "",
        cabinet: "",
        patient: '',
        drugs: '',
        submit: false,
        medicament: []
    }

    handleChange = () => {
        this.props.onChange(true);
    }

    render() {
        let dates = this.props.date
        let newDate = new Date(dates.year, dates.month-1, dates.day)
        let date = moment(newDate).format('llll')
        var min = 1;
        var max = 1000;
        var rand =  min + (Math.random() * (max-min));
        let medicament = []
        if (this.props.drugs1 !== '' && this.props.drugs2 === '') {
            medicament = [
                {
                    id: 1,
                    PrescriptionId: 1,
                    name: this.props.drugs,
                    quantity: 2,
                    morning: 1,
                    midday: 1,
                    night: 1,
                    duration: this.props.duration,
                    renewable: 1,
                },
                {
                    id: 2,
                    PrescriptionId: 1,
                    name: this.props.drugs1,
                    quantity: 2,
                    morning: 1,
                    midday: 1,
                    night: 1,
                    duration: this.props.duration,
                    renewable: 1,
                },
            ]
        }
        if (this.props.drugs1 !== '' && this.props.drugs2 !== '') {
            medicament = [
                {
                    id: 1,
                    PrescriptionId: 1,
                    name: this.props.drugs,
                    quantity: 2,
                    morning: 1,
                    midday: 1,
                    night: 1,
                    duration: this.props.duration,
                    renewable: 1,
                },
                {
                    id: 2,
                    PrescriptionId: 1,
                    name: this.props.drugs1,
                    quantity: 2,
                    morning: 1,
                    midday: 1,
                    night: 1,
                    duration: this.props.duration,
                    renewable: 1,
                },
                {
                    id: 3,
                    PrescriptionId: 1,
                    name: this.props.drugs2,
                    quantity: 2,
                    morning: 1,
                    midday: 1,
                    night: 1,
                    duration: this.props.duration,
                    renewable: 1,
                },
            ]
        }
        if (this.props.drugs1 === '' && this.props.drugs2 !== '') {
            medicament = [
                {
                    id: 1,
                    PrescriptionId: 1,
                    name: this.props.drugs,
                    quantity: 2,
                    morning: 1,
                    midday: 1,
                    night: 1,
                    duration: this.props.duration,
                    renewable: 1,
                },
                {
                    id: 2,
                    PrescriptionId: 1,
                    name: this.props.drugs2,
                    quantity: 2,
                    morning: 1,
                    midday: 1,
                    night: 1,
                    duration: this.props.duration,
                    renewable: 1,
                },
            ]
        }
        if (this.props.drugs1 === '' && this.props.drugs2 === '') {
            medicament = [
                {
                    id: 1,
                    PrescriptionId: 1,
                    name: this.props.drugs,
                    quantity: 2,
                    morning: 1,
                    midday: 1,
                    night: 1,
                    duration: this.props.duration,
                    renewable: 1,
                },
            ]
        }
        return (
            <div style={styles.root}>
                <div style={styles.qrcode}>
                    <QRCode
                        level="Q"
                        style={{ width: 256 }}
                        value={JSON.stringify({
                            id: rand.toFixed(0),
                            UserId: 1,
                            SecondaryUserId: null,
                            PharmmacistId: null,
                            OrderId: null,
                            doctorName: this.props.doctor,
                            doctorAdress: this.props.cabinet,
                            doctorType: this.props.patient,
                            date: date,
                            drugs: medicament
                        })}
                    />
                </div>
                <div>
                    <form onSubmit={this.handleChange}>
                        <Button
                            style = {{display: 'flex',alignItems: 'center',justifyContent: 'center',  margin: 'auto' , marginBottom: 50}}
                            type="Submit"
                            variant="contained"
                        >
                            Générer une autre ordonnance
                        </Button>
                    </form>

                </div>
            </div>
        )
    }
}
