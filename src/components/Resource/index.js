import React, { Component } from 'react';
import ConfigurablePage from '../ConfigurablePage'

class Resource extends Component {

    render() {

        let doc = this.props.doc
        doc.format = doc.type
        doc.accessURL = doc.uri
        doc.preview = doc.uri

        const configuration = {
            Main: {
                accessURL: {
                    type: "FileDownload"
                }
            },
            Table: {
                format: {
                    type: "String",
                    label: "Format"
                }
            }
        }

        return (
            <ConfigurablePage doc={doc} configuration={configuration}/>
        );
    }
}

export default Resource;









