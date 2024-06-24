import { useState } from "react";

function Licznik(){
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <button onClick={() => setCount(count+1)}>Kliknij!</button><br/>
            licznik: {count}
        </div>
    );
}

export default Licznik;