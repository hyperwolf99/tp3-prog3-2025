function Calculadora() {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [operacion, setOperacion] = React.useState('a');
    const [resultado, setResultado] = React.useState(null);

    // Función para verificar si el botón debe estar deshabilitado
    const botonDeshabilitado = operacion === 'dividir' && (num2 === '0' || num2 === '');

    const handleCalculo = (e) => {
        e.preventDefault();
        
        const valor1 = parseFloat(num1);
        const valor2 = parseFloat(num2);

        if (operacion === 'a') {
            setResultado('Debes seleccionar una operación');
            return;
        }

        let res;
        switch(operacion) {
            case 'sumar':
                res = valor1 + valor2;
                break;
            case 'restar':
                res = valor1 - valor2;
                break;
            case 'multiplicar':
                res = valor1 * valor2;
                break;
            case 'dividir':
                res = valor2 !== 0 ? (valor1 / valor2).toFixed(2) : 'Infinito';
                break;
            default:
                res = 'Operación no válida';
        }

        setResultado(`El resultado es: ${res}`);
    };

    const handleCambioNum2 = (e) => {
        setNum2(e.target.value);
    };

    const handleCambioOperacion = (e) => {
        setOperacion(e.target.value);
    };

    return (
        <div>
            <h2>Calculadora</h2>
            <form onSubmit={handleCalculo}>
                <div>
                    <input
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        placeholder="Primer número"
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        value={num2}
                        onChange={handleCambioNum2}
                        placeholder="Segundo número"
                        required
                    />
                </div>
                <div>
                    <select value={operacion} onChange={handleCambioOperacion}>
                        <option value="a">Seleccione operación</option>
                        <option value="sumar">Sumar</option>
                        <option value="restar">Restar</option>
                        <option value="multiplicar">Multiplicar</option>
                        <option value="dividir">Dividir</option>
                    </select>
                </div>
                <button type="submit" disabled={botonDeshabilitado}>
                    Calcular
                </button>
            </form>
            {resultado && <p>{resultado}</p>}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculadora />);