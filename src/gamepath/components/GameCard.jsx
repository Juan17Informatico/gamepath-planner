

import React from 'react'

export const GameCard = ({ title, imageUrl, progress }) => {
    return (
        <div>
            <div>
                <img src={imageUrl} alt="Game cover" />
                <div>
                    <h5>{title}</h5>
                    <p>Llamado a la acción para entrar a otra página</p>
                    <div >
                        <div role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                            {progress}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
