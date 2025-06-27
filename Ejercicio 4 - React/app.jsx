function AlternarBotones() {
    const [activarPrimerBoton, setPrimerBoton] = React.useState(true);

    const handlePrimerBoton = () => {
        setPrimerBoton(false);
    };

    const handleSegundoBoton = () => {
        setPrimerBoton(true);
    };

    return (
        <main>
            <h2>Control de Botones</h2>
            <section>
                <button 
                    onClick={handlePrimerBoton} 
                    disabled={!activarPrimerBoton}
                >
                    Izquierdo
                </button>
                <button 
                    onClick={handleSegundoBoton} 
                    disabled={activarPrimerBoton}
                >
                    Derecho
                </button>
            </section>
        </main>
    );
}

const appRoot = ReactDOM.createRoot(document.getElementById("root"));
appRoot.render(<AlternarBotones />);