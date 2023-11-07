import React from 'react'

function NewLoginPopup() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <button type="button" className="btn btn-sm pull-right" data-toggle="modal" data-target="#loginModal">Login</button>
                        <div className="modal fade" id="loginModal" tabIndex="-1" data-keyboard="false" data-backdrop="static">
                            <div className="modal-dialog modal-sm">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Login</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="inputUserName">Username</label>
                                                <input className="form-control" placeholder="Login Username" type="text" id="inputUserName" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword">Password</label>
                                                <input className="form-control" placeholder="Login Password" type="password" id="inputPassword" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer"> <button type="submit" className="btn btn-primary">Login</button>
                                        <button id="btnHideModal" type="button" className="btn btn-primary" data-dismiss="modal">Close</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewLoginPopup