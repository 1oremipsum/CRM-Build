import React from 'react';
import { default as Menu } from './menu/Menu';

const Main: React.FC = () => {
  return (
    <div className="app">
      <section className="main-content columns is fullheight">
        <Menu />
        <div className="container column is-10">
          <div className="section">
            <div className="card">

              <div className="card-header">
                <p className="card-header-title">
                  Cadastro
                </p>
              </div>

              <div className="card-content">
                <div className="content">
                  Conteúdo
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main