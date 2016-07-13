import React from 'react'
import $ as 'jquery'

class UploadForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        $.ajax({
            url: '/api/upload',
            
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label for="img_upload">Upload an image here</label>
                    <input type="file" name="img_upload"/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
