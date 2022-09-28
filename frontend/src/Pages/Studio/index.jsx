import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import api from "../../Services/api";

import "./style.css";

export default function Studio() {
    let navigate = useNavigate()
    const [ open, setOpen ] = useState(false)
    const [ currencies, setCurrencies ] = useState([])

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [currency, setCurrency] = useState('c1');

    const handleCancelApplication = async () => {
        navigate("/infinity/home")
    }

    const handleAddProduct = async () => {
        let title = document.querySelector('#field_title').value
        let description = document.querySelector('#field_description').value
        let price = document.querySelector('#field_price').value
        let category = document.querySelector('#field_category').textContent
        let id

        currencies.map((item) => {
            console.log(item.label)
            if (item.label === category) {
                id = item.value
                console.log(id)
            }
            return id
        })

        api.post("/produto", {
            title: title,
            description: description,
            price: price,
            idCategoria: id
        })

        setOpen(true)
        setTimeout(function() {
            setOpen(false)
            navigate("/infinity/home")
            swal('Produto adicionado com sucesso!')
        }, 1700)
    }

    useEffect(() => {
        api.get("/categoria").then((response) => {
            let data = response.data
            console.log(data)
            setCurrencies(data.map((item) => {
                return {
                    value: item._id,
                    label: item.title
                }
            }))
        })
    },[])

    return (
        <main id="studio">
            <Header />
            <div className="studio-content">
                <h2>Adicionar Produto</h2>
                <form className="studio-form">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1.2, width: '75%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="field_title" label="Nome" variant="outlined" required />
                        <TextField id="field_description" label="Descrição" variant="outlined" required />
                        <TextField
                            id="field_category"
                            select
                            label="Categoria"
                            value={currency}
                            onChange={handleChange}
                            required
                            >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="field_price" label="Preço" variant="outlined" required />
                    </Box>
                </form>
                <section className="studio-buttons">
                    <button className="button-left" onClick={() => handleCancelApplication()}>Cancelar</button>
                    <button type="submit" className="button-right" onClick={() => handleAddProduct()}>Avançar</button>
                </section>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Footer />
        </main>
    )
}
