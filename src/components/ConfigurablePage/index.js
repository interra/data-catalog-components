import React, { Component } from 'react';

import PageContainer from '../PageContainer';
import PageSection from '../PageSection';

class ConfigurablePage extends Component {

    render() {

        let doc = this.props.doc
        let pageSchema = this.props.configuration

        let left = <div></div>;
        let centerCol = 12;
        if (pageSchema && Object.keys(pageSchema).indexOf('Left') !== -1) {
            left = <div className="col-sm-3"><PageSection type="Left" pageSchema={pageSchema} doc={doc} /></div>;
            centerCol = 9;
        }

        return (
            <PageContainer>
                <div className="row">
                    {left}
                    <div className={`col-sm-${centerCol}`}>
                        <h1>{doc.title}</h1>
                        <PageSection type="Main" pageSchema={pageSchema} doc={doc} />
                        <PageSection type="Table" pageSchema={pageSchema} doc={doc} />
                    </div>
                </div>
            </PageContainer>
        );
    }
}

export default ConfigurablePage;









