import React from 'react'

function Confirmation({ id, onDeleteConfirmation }) {
    return (
        <div className="modal fade" id={`exampleModal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Do you want to delete this?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        <button type="button" className="btn btn-custom1" onClick={onDeleteConfirmation} data-bs-dismiss="modal">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation
