import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Table from "../../Components/Table";
import Footer from "../../Components/Footer";
import api from "../../Services/api";

import "./style.css";

export default function Home() {
    let navigate = useNavigate()
    const [ list, setList ] = useState([])

    const handlePageStudio = async () => {
        navigate('/infinity/studio')
    }

    useState(() => {
        api.get("/produto").then((response) => {
            setList(response.data)
        })
    }, [])
    return (
        <main id="home">
            <Header />
            <div className="home-content">
                <section className="home-panel">
                    <h2>Produtos Cadastrados</h2>
                    <button onClick={() => handlePageStudio()}>Cadastrar Produto</button>
                </section>
                <Table data={list} />
            </div>
            <Footer />
        </main>
    )
}
