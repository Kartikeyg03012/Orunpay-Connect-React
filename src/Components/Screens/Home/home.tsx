import '../../../Assets/css/dashboard.css';
import '../../../Assets/css/card.css';
import { GrFormAdd } from 'react-icons/gr';

function Home() {
    return (

        <div className="dashboard">
            <h2>£ 9,89,678.90</h2>
            <p>Total Balance in EUR</p>
            <div className="dropdown">
                <div className="dropdown-select">
                    <span className="Select">Add Amount </span>
                </div>
                <div className="dropdown-list">
                    <a href="addMoney/USA Office"><div className="items">USA Office<br />
                        <small>Current Balance $7,989.90</small></div></a>
                    <a href="addMoney/England Office"><div className="items">England Office
                    <br />
                        <small>Current Balance £9,09,865.80</small></div></a>

                </div>
            </div>
            {/* <select className="btn-dashboard button1">
                <option value="null" selected> Add Money</option>
                <option value="Account1">Account 1</option>
                <option value="Account2">Account 2</option>
                <option value="Account3">Account 3</option>
            </select> */}
            {/* <button type="submit" className="btn-dashboard button1"><GrFormAdd /> Add Money</button> */}


            <hr />
            <br />
            {/* cards */}


            <div className="dashboard-card">
                <div className="dashboard-container">
                    <h4><b>USA Office</b></h4>
                    <p>CODE</p>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA/CAMAAADt7Ke5AAAAllBMVEX///+yIjQ8O26xHDC7SlXpzc+uAB6vCSXWnaLOiI6wECitABzw3d6yJDWyHzI6OW02NWsyMWktLGZzM1uTk6q2ITFNTHhaWYFCQXJhYIZIR3WkpLdqaox+fZrR0dra2uEpJ2Tl5er19ffExNCLi6RzcpK3t8awr8AjIWGcnLF2P2QcG14YFl2IepRxK1WyABmBY4ARDlqc+h8xAAADzUlEQVRYhe2Za2/dNgyGNW3L1u5CSj2T5PtNto/bNW3//58bSTkpsE8zQCBAFiLIA58E5jElvi9tG/s94D/ww18/qISxFlONfFqsk2TA4P5FfDrWzAvt3lR0Ymy3o3DJkQht3zHt2nfhmYp5g5lrzhPNnCSvmeTyVjNwOuxMzxeM2SzOfnj/o0pQnVOze4sA4WiQGW9EB1DdGvqcvgfTUf58OPj4k05QXuucHXN0IKTFZN5q4f2gL0L81PwNSHQ3oxSyU10280qbC29mbpmHmXit3W4mXmO3mUHWWDUv0CUN/Z3pp+UT1RbstI3MOAixHXgtdPO6EFyyKblYU8vU1rcegw/g2/GkO+lBMS92/SI1Jra8mnnYqNaAedqp1gC3qYkng/v8s05QH41mvku1zTRShamvhpP9yH0UzSJsDdX68cuDSlCd6y4jJIS4dsDXFdvCqpXPsa0yCRfiGjvU1Ek6JYSGtEi4Mm3Y24DMraKGos+XwFTV56JNs2hkV/qGyRpGfTWxhrnG9En+8/HhF5UofWTTsjnWqrTQWrJmbdQ/jjVbtAxXJtkCfv1VJyivryovmtWS4Xi0Y+cweYR7viMf3zP98sDHqn2Up6kTSZgn7id3zANrlmvmnvsI97kXfyIGr6gb36bpG2vVOBfNsvMiTEILtdm5r7AyjdfUqzpUgLSLQ6jI2+mnLoypBRcdVtCiix4rR9TVZ9o/TUXbCdblKOxvsTBH1q516ALLNnx9pxOlj548nyieD5UZ8PR8d3p+GXYeH96rhOgGreXR2NP7ZQZ49vx8CNd8c+xHmrrh1lU83uVK6I8kXj9yaiFCoepcR7Usnp+L59PWKZ5/nNrVmKH0kelrePzym0rQ9Y5DX7y+J62ivVQLyY+GJ+/fS82HxuPn33WCfDAheX6bsMZE2vVEGqc9zQArzQBjDX69A1Ozj0gpMLP3Uz/lgb2f/GAq3k9kzycN22m+AuW5jhLNE2uT9WaQGQCL58N3z9+8VZ7rqIugXrvEXh/aDqEmjao6J55PXk9/Pomaealns3h+PL0/bmtgr49LZNq4iPcL6T7lD5UwXMNZ+mU9SZ7PszLN1MPp/QN7Ps3UPVD//qkSXOdN1hDCRt7Pa7rtwmqXNcV234XdTtqlphu0m73ntiU6OCnH8HyMQhiJitd7KdTW9y1edyj5y2U/0rHT6/6rIwPXdeOl8uqMh9fnSaV5+PL8/BavO5Tu3y/f7+s8rrj+fOOldOOl8uo8frv+vE7peePl55Nv8bpD6f3I5fcpOq+Drr8/eind+J/l/QfzsbdyhBiWYQAAAABJRU5ErkJggg==" alt="not avaliable" className="flag" />
                    <p className="p1">$ 7,989.90</p>
                </div>
            </div>
            <br />
            <br />
            <div className="dashboard-card">
                <div className="dashboard-container">
                    <h4><b>England Office</b></h4>
                    <p>CODE</p>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAhFBMVEXIEC7///8BIWnFABjrvcEAHmgAAFnICSvKKD3HACalqb0AAGAABWHGACDEAACiqL/02NvUWWfehpD88vPEAA3eh5HEAAcAHGkAGGcAF2fTVGPUXGr99fbFABPGABkAEWUAAE7txcido7ve4OiRmLP29/rgkZry0tbPPlH56evadYHWYm+GvczdAAAG3ElEQVR4nO2dfXfTOgyHDaOMtex9K2NsF9bLGC/f//vdctsuiSslsvXmnqPfXzucUCtPbFmxHDn9uXgzpefVbDF7q6eP866tD8dpRMcfuivnHxVNmi3uVs+vTT38gIw5Wd6/pJOb+2mAb+ZvFQE2h2/dW867hq6vHk8heJdrbq9/OAJsDF8O7x8I3rbT9UhOAvykBLApfLPF5x68B6Tn7Ubs7h/OSENYxwc2hG/t8/o97/YGgtdjBRAd07nGEG4GH93n7eFLxElEAWAj+DJ4t0cjPg/AR/WB59JDuAl8s8Un8oSB4CMP4c+iABvAN1t87U8Ykz4PwUedRESHsDu+3OeB8MCRCdhoHkg748uG7e30hNHDd1pw8VBiPdAVHy1Ixnikh4Kummt+JwLQEV9ZkAzgK3GU+xKZhd3w5cMW7khjHNKGOm2aBgHyh7ATvvIgGcFHDRKVALrgqwmSUXy19LcAeUPYAd/w3fbhCoRHiIFT92fN2H+9F04gbY4vg8fw/ekra+bpxBjCxvjqg+Rc87tUsjg48WO1AE3x5T6v3mX9vd8k+YOVPdAQn3RnSdCPLuufSI0PNMOXLwyAHYW2cLztKAn+4XpnWjGEjfDlQXJ9J+lWnBLy45Y+0ASfRJC8hde7v4Q2gASSCj7QAJ/WBJnGGmHMSiVZOXV8UkHyfsdIYw1NZ5pGGqIDVManeU9pvDHJJ+WDT3dE7eHT8xMe+LT9OYBPa5ayx6cfTYD4dGIka3wWsSyCTyNCt8Vn8yaF4jP0gQr4rN7jR/BJr07Y4bOb/Ebxia6N4XGgMD5u9qzT9MQ3gW/PGI2snCg+UpBMW0EnpGEn8RkE0oL4BEMuUv6GgE8qK4UCFMOnbGctPuWnKoRvGKva5K6J+CQy8q/3nfsUEXxyQXJJ2pWMT3FGE8AnmT0rWasswKcWT7Hx+SW7ivDx9sKhhjLxeaZaC/GpDBMWvsznwS5FbcdsMT7RlYyNk2bgo60M6e3XrsAnvo5Wjc86SBbCJ7mKuwa4qMO3yGzw2KNYiU80kF6savCtFtY5GUl8khmsf2vw9f4Tp23ed3oMfJKBdAW+Dp7OMpo+PsmYqxYf4neNvlFm4pP0gTX4XPYj9vG95+vb++/dd//XV2egfj7J4/v1G26LAO/5+9psvtJkQ7aq8H2eCnwsBT6WAh9LgY+lwMdS4GMp8LEU+FgKfCyld03paQrfk7eFQ6WjtjRKb83P275M49aGQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhQ5f3HqVMh7bDynuH3FAHt7/Pe39mpkPbXeptQKbAx1LgYynwsRT4WAp8LAU+lgIfS4GPpUPDJ1BOYlBJA9PFJVz14vevwWUi+F5+wm1dXb9eIlVJQ7aOCw7v5mSfxulR74YE8a3b+7KE2nvstydSx8UE3hcQ3uMePMHBS3lgzlWEhjWscHhgT7gB4In6votLQg/0q2E1rKCG38QZdBPL/k1wK6hx2naqoEb1edM9QKJ+H9o+oec71O+TmzCkqkdybDCuHjmsXYoaTp39hGqXsgDa1S4dVs7FjQbhQX5HrHIubgvoA4dD2KZyLvWJTxusUbcZtQceCUvuEGZVDcfhFfkb0arhhQCZgTSjZr2YocI161G7FCaR6hMTCuGNhQriJybgAEGX8gi6FFl8ck7a4ryOQvuWtbNw1WkxuHFgz5sKEVROi0FtJLgW4dNilH2L4FlFChMbFx/x3bb+qaqdlIUDrBolNfiIEwbHpyie08axV+CcNrmFAa9TAlGbRRYTCs6oxOExFyaVz6gsBFgUSJNPSFU0Qv2EVNR29iRCPJ+3EN6y6FXI4HxeHCAhTi0/n9d0JcPkdGj8HjgdgHA2Od6wUPxkdDY5eh8M9wPgY8GrWcFQw6ffEfbwsYLkuhyCIj7t0CvljUkFnef0FKAqPt17SsOGDIJkc3yaIyr1G3FadFTHp+fPU9eA9izliU+rc6Tdj+vHSL74dGLZVPJkeBG6Nz6NN6nkmWixxif/Hp8803z2+KRXkRKjO0tttDHFJxqe3RH2NpNWZqu2OPjgkwykJ/HJ5QXawSeXv5nAp7u9yw+flA8cxSebE20Ln0xWbgSfdEa+NXwSgTSKT34/SHv4+Fk5BJ+Jz9vJER8zkD4F8Vl9VLKVKz7e1g4An9ZOTFTO+Fjv/KSLRPYBo3LHx1hxyi/Q24WOqgF81eudxfAkh+1GTeCrDKRHyG7giX2Bg6oRfFWBdPeP2t9/oWoGX8ViAkC0gyf69SGqhvAVB9IbeBbfvqJqCl/hN8rmQfK+GsNXNIm83EPw0vGP3nf/Kx2ft1Nz+P73gStCfYY//wEigYBdwuNHrgAAAABJRU5ErkJggg==" alt="not avaliable" className="flag" />

                    <p className="p1">£ 9,09,865.80</p>
                </div>
            </div>
            <br />








        </div>

    );
}
export default Home;