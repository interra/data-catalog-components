import React, { Component } from 'react';

import PageItemFileDownload from '../PageItemFileDownload';
import PageItemOrg from '../PageItemOrg';
import PageItemTag from '../PageItemTag';
//import PageItemResource from '../PageItemResource';
import PageItemString from '../PageItemString';
import PageItemText from '../PageItemText';
import SectionTypeMain from '../SectionTypeMain';
import SectionTypeLeft from '../SectionTypeLeft';
import SectionTypeTable from '../SectionTypeTable';

/*
import SectionTypeTitle from '../SectionTypeTitle';
import PageItemTheme from '../PageItemTheme';
import PageItemTag from '../PageItemTag';
import PageItemFilePreview from 'containers/PageItemFilePreview';
import PageItemImage from '../PageItemImage';
import PageItemExtentMap from '../PageItemExtentMap';
import PageItemSchema from '../PageItemSchema';
import PageItemSearchPage from '../PageItemSearchPage';
import PageItemSocial from '../PageItemSocial';
*/

class PageSection extends Component {

    render() {

        const pageItems = {
            PageItemFileDownload,
            PageItemTag,
            PageItemOrg,
            PageItemString,
            PageItemText,
            //PageItemResource,
        };

        const SectionTypes = {
            SectionTypeMain,
            SectionTypeLeft,
            SectionTypeTable,
        };

        const { doc, pageSchema, type } = this.props;

        const SectionComponent = SectionTypes[`SectionType${type}`];

        const fields = pageSchema ? pageSchema[type] : {};

        if (fields && doc) {
            const section = Object.keys(fields).map((field, index) => {
                const Component = pageItems[`PageItem${fields[field].type}`];
                const labelValue = 'label' in fields[field] ? fields[field].label : '';
                const label = labelValue.length != 0;
                const def = fields[field];
                const item = {
                    data: {
                        field,
                        doc,
                        def,
                        value: doc[field],
                    },
                };
                if (field in doc || field === 'widget') {
                    return (<Component labelValue={labelValue} label={label} key={index} {...item} />);
                }
            },'<div></div>');
            return (
                <SectionComponent {...section} />
            );
        } else {
            return (<span></span>)
        }
    }
}

export default PageSection;
