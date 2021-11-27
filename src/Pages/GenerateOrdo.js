import React from "react"
import { Button, TextField } from "@material-ui/core";
import DisplayQrCode  from "../Component/DisplayQrCode";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

const styles = {
    root: {
      fontFamily: "sans-serif",
    },
    h1: {
      textAlign: "center",
      color: 'white'
    },
    qrcode: {
      textAlign: "center"
    },
    logo: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
    }
}

export default class GenerateOrdo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: "",
            cabinet: "",
            patient: '',
            drugs: '',
            drugs1: '',
            drugs2: '',
            submit: false,
            add1drug: false,
            add2drug: false,
            startDate: {
                year: 2021,
                month: 9,
                day: 23
            },
            duration: 0
        }
        this.date = new Date()
        this.add1drugs = this.add1drugs.bind(this)
        this.add2drugs = this.add2drugs.bind(this)
    }


    handleSubmit = (evt) => {
        evt.preventDefault()
        this.setState({submit: true})
    }

    handleChange = (evt) => {
        const name = evt.target.name
        const newValue = evt.target.value
        console.log(evt.target.name, evt.target.value)
        this.setState({ [name]: newValue });
    }

    add1drugs() {
        this.setState(state => ({
            add1drug: !state.add1drug
        }));
    }

    add2drugs() {
        this.setState(state => ({
            add2drug: !state.add2drug
        }));
    }

    render() {
        return (
            <div style={styles.root}>
                <div style={styles.logo}>
                    <h1>EaseMedic</h1>
                    <h1 style={styles.h1}>Generer votre ordonnance</h1>
                </div>
                {this.state.submit === false ?
                    <div>
                        <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>
                            <form noValidate autoComplete="off" onSubmit={this.handleSubmit} style={{display: "flex", justifyContent: 'center', flexDirection: "column"}}>
                                <TextField
                                    id="filled-basic"
                                    label="Nom du médecin"
                                    name="doctor"
                                    defaultValue={this.state.doctor}
                                    variant="filled"
                                    onChange={this.handleChange}
                                    style={{ width: '100%', height: '10%', marginBottom: '10%'}}
                                />
                                <TextField
                                    id="filled-basic"
                                    label="Adresse du cabinet"
                                    name="cabinet"
                                    defaultValue={this.state.cabinet}
                                    variant="filled"
                                    onChange={this.handleChange}
                                    style={{ width: '100%', height: '10%', marginBottom: '10%'}}
                                />
                                <TextField
                                    id="filled-basic"
                                    label="Type de praticien"
                                    name="patient"
                                    defaultValue={this.state.patient}
                                    variant="filled"
                                    onChange={this.handleChange}
                                    style={{ width: '100%', height: '10%', marginBottom: '10%'}}
                                />
                                <TextField
                                    id="filled-basic"
                                    label="Durée de la posologie"
                                    name="duration"
                                    defaultValue={this.state.duration}
                                    variant="filled"
                                    onChange={this.handleChange}
                                    style={{ width: '100%', height: '10%', marginBottom: '10%'}}
                                />
                                <div style={{ marginTop: '-4%'}}></div>
                                <DatePicker
                                    value={this.state.startDate}
                                    onChange={(date) => this.setState({startDate: date})}
                                />
                                <div style={{marginBottom: '1%', marginTop: '1%'}}></div>

                                <div style={{display: 'flex', flexdirection: 'row'}}>
                                    <TextField
                                        id="filled-basic"
                                        label="Nom du médicament"
                                        name="drugs"
                                        style={{ width: '100%', height: '10%', marginBottom: '10%'}}
                                        defaultValue={this.state.drugs}
                                        variant="filled"
                                        onChange={this.handleChange}
                                    />
                                    <Button
                                        style = {{display: 'flex',  marginLeft: '10px' , marginTop: '10px', marginBottom: 50}}
                                        variant="contained"
                                        onClick={this.add1drugs}
                                    >
                                        Ajouter
                                    </Button>
                                </div>

                                {this.state.add1drug === true ?
                                    <div style={{display: 'flex', flexdirection: 'row'}}>
                                        <TextField
                                            id="filled-basic"
                                            label="Nom du médicament"
                                            name="drugs1"
                                            style={{ width: '100%', height: '10%', marginBottom: '10%'}}
                                            defaultValue={this.state.drugs1}
                                            variant="filled"
                                            onChange={this.handleChange}
                                        />
                                        <Button
                                            style = {{display: 'flex',  marginLeft: '10px' , marginTop: '10px', marginBottom: 50}}
                                            variant="contained"
                                            onClick={this.add2drugs}
                                        >
                                            Ajouter
                                        </Button>
                                    </div>
                                    : <div/>}
                                {this.state.add2drug === true ?
                                <TextField
                                    id="filled-basic"
                                    label="Nom du médicament"
                                    name="drugs2"
                                    style={{ width: '100%', height: '10%', marginBottom: '10%'}}
                                    defaultValue={this.state.drugs2}
                                    variant="filled"
                                    onChange={this.handleChange}
                                /> : <div/>}
                                <Button
                                    style = {{display: 'flex',alignItems: 'center',justifyContent: 'center',  margin: 'auto' , marginBottom: 50}}
                                    type="Submit"
                                    variant="contained"
                                >
                                    Valider les informations
                                </Button>
                            </form>
                        </div>
                    </div> :
                    <div>
                        <DisplayQrCode
                            doctor={this.state.doctor}
                            cabinet={this.state.cabinet}
                            patient={this.state.patient}
                            date={this.state.startDate}
                            duration={this.state.duration}
                            drugs={this.state.drugs}
                            drugs1={this.state.drugs1}
                            drugs2={this.state.drugs2}
                        />
                    </div>
            }
                {/*    </div> :*/}
                {/*    <div>*/}
                {/*    </div>    */}
                {/*}*/}
            </div>
        )
    }
}
