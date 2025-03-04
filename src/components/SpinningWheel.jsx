import { useState } from 'react';
import wheelImage from '../assets/wheel.png';
import arrow from '../assets/arrow.png'

const SpinningWheel = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [rotationStyle, setRotationStyle] = useState({});

    const items = ['Valomagia', 'Energiamagia', 'Elementtimagia', 'Vihermagia', 'Räjähdysmagia', 'Telekinesia'];
    const spinWheel = () => {
        if (isSpinning) return;

        setIsSpinning(true);

        const randomIndex = Math.floor(Math.random() * items.length);
        const totalItems = items.length;
        const fullRotations = 4;
        const randomAngle = 360 / totalItems * randomIndex;
        const finalAngle = fullRotations * 360 + randomAngle;

        setRotationStyle({ transform: 'none' });
        setTimeout(() => {
            setRotationStyle({
                transform: `rotate(${finalAngle}deg)`,
                transition: 'transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
            });
        }, 0);

        setTimeout(() => {
            setIsSpinning(false);
            setSelectedItem(items[randomIndex]);
        }, 3000);
    };

    return (
      <div className='main'>
        <div className="wheel-container">
            <h1 className='wheel-header'>Jakorinkeli</h1>
            <p>Jakorinkeli määrää kunkin velhon magialajin. Jakorinkeliä saa pyöräyttää vain kerran. Ensimmäisen pyöräytyksen tulos on magialajisi, eikä sitä voi vaihtaa. Se on velhojen laki.</p>
            <div className="wheel" style={rotationStyle}>
                <img className="wheel-image" src={wheelImage} alt="Spinning Wheel" />
            </div>
            <img className='arrow' src={arrow} alt='taikasauva'/>
            {selectedItem && <h2 className='wheel-header'>Magiasi on: {selectedItem}!</h2>}
            <button className='wheel-button' onClick={spinWheel} disabled={isSpinning}>
                Kokeile rinkeliä
            </button>
        </div>
        </div>
    );
};

export default SpinningWheel;
