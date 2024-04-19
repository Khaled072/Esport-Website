import ps5 from '../Photos/ps5.png';
import pc from '../Photos/pc.png';
import motion_racing_simulator from '../Photos/motion_racing_simulator.webp';
import nintendo_switch from '../Photos/nintendo_switch.png';
import "./Devices.css";

function Devices() {
    return (
        <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-3 devices">
            <div className="container overflow-hidden">
                <div className="row gy-4 gy-lg-0 justify-content-center images">
                    <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                        <div className="PS5">
                            <a href="https://www.playstation.com/en-us/" id="ps5">
                                <img src={ps5} alt="PS5"/>
                            </a>
                            <div className="ButtonPS">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{
                                        '--bs-btn-padding-y': '0.75rem',
                                        '--bs-btn-padding-x': '.5rem',
                                        '--bs-btn-font-size': '1rem'
                                    }}
                                >
                                    2
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                        <div className="PC">
                            <a href="https://www.corsair.com/us/en" id="pc">
                                <img src={pc} alt="PC"/>
                            </a>
                            <div className="ButtonPC">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{
                                        '--bs-btn-padding-y': '0.75rem',
                                        '--bs-btn-padding-x': '.5rem',
                                        '--bs-btn-font-size': '1rem'
                                    }}
                                >
                                    4
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                        <div className="Switch">
                            <a href="https://www.nintendo.com/us/switch/" id="switch">
                                <img src={nintendo_switch} alt="Switch"/>
                            </a>
                            <div className="ButtonSwitch">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{
                                        '--bs-btn-padding-y': '0.75rem',
                                        '--bs-btn-padding-x': '.5rem',
                                        '--bs-btn-font-size': '1rem'
                                    }}
                                >
                                    0
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 py-sm-3 py-md-4 py-lg-2 py-xl-2 py-xxl-2 col-xs-7 col-sm-12 col-md-6 col-lg-4 col-xl-5 mt-5 me-5">
                        <div className="Racing">
                            <a href="https://nextlevelracing.com/" id="racing">
                                <img src={motion_racing_simulator} alt="Racing"/>
                            </a>
                            <div className="ButtonRacer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{
                                        '--bs-btn-padding-y': '0.75rem',
                                        '--bs-btn-padding-x': '.5rem',
                                        '--bs-btn-font-size': '1rem'
                                    }}
                                >
                                    1
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Devices;
