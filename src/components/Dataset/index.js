import React, { Component } from 'react';
import ConfigurablePage from '../ConfigurablePage'

class Dataset extends Component {

    render() {

        let doc = this.props.doc

        doc.publisher = {
            name: doc.organization
        }

        doc.resources.map(x => x.identifier = doc.identifier)

        if (doc.resources.length > 0) {
          doc.distribution = doc.resources[0].uri
        }

        doc.issued = doc.created

        const configuration = {
            Left: {
                publisher: {
                    type: "Org"
                }
            },
            Main: {
                description: {
                    type: "Text"
                },
                distribution: {
                  type: "FileDownload"
                }
            },
            Table: {
                issued: {
                    type: "String",
                    label: "Release Data"
                },
                identifier: {
                    type: "String",
                    label: "Unique Identifier"
                },
                modified: {
                    type: "String",
                    label: "Last Update"
                }
            }
        }

        return (
            <ConfigurablePage doc={doc} configuration={configuration}/>
        );
    }
}

export default Dataset;









