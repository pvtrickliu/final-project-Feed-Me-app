import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import ReactDOM from 'react-dom';
import "./style.css";


const Popup = (props) =>
    props.isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal-overlay" />
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="popup-modal">
                    <div className="modal-header">
                        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={props.hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Link to="/restaurants" >
                        <p className="useCurrentLocation">Use your current location</p>
                    </Link>
                    <p className="or">OR</p>
                    <p>Enter your city:</p>
                    <form>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </form>
                    <Link to="/restaurants" >
                        <button type="button" className="submit">Submit</button>
                    </Link>
                </div>
            </div>

        </React.Fragment>, document.body
    ) : null;

export default Popup;