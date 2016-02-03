/**
 * Created by Sheldon Lee on 1/30/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import guid from '../guid/guid.js';
import {attachFile, uploadFiles} from '../redux/actions/action-creator.js';
import DocumentUploadListItem from '../components/document-upload/document-upload-list-item.js';
import '../styles/containers/file-upload-container.css';

class FileUploadContainer extends React.Component {

    componentWillMount() {
        this.componentId = guid();
    }

    fileInputChange(e) {
        let input = e.target;
        let files = input.files;

        this.props.dispatch(attachFile(files[0], this.componentId));
        input.value = '';
    }

    documentUploadListItemHandle() {
        'use strict';
        if (this.props.FileUploadReducer.files && this.props.FileUploadReducer.files.length > 0) {
            return this.props.FileUploadReducer.files.map(function(file, index) {
                return (
                    <DocumentUploadListItem key={index} componentId={file.id} fileName={file.file.name} isUploaded={file.isUploaded} uploadedDate={file.uploadedDate} />
                );
            });
        } else {
            return undefined;
        }
    }

    render() {
        return (
            <div>
                <div>Files</div>
                {this.documentUploadListItemHandle()}
                <input type="file" id={this.componentId} className="file-upload-hidden-input accessibility-hidden" aria-hidden="true" onChange={this.fileInputChange.bind(this)} />
                <label htmlFor={this.componentId} className="file-upload-link">Add a file<span className="accessibility-hidden">Click to add a file for upload</span></label>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    /*return {
     isToggleOn: state.buttonToggleReducer.isToggleOn
     };*/
    return state;
}

export default connect(mapStateToProps)(FileUploadContainer)
