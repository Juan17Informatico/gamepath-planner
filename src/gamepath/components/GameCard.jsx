

import React from 'react'

export const GameCard = ({ title, imageUrl, progress }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 game-card">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="Game cover" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Llamado a la acción para entrar a otra página</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                            {progress}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
