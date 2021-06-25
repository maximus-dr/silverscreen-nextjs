import styled, {css} from 'styled-components';
import {enableOutlines} from '../../core/functions/outlines';
import {getStyles} from '../../core/functions/styles';
import { colors } from '../../core/variables';


export const FormBody = styled.form`

    ${props => {
        const styles = getStyles(props.componentData);

        return css`
            ${enableOutlines(props.showOutlines, colors.outline_form)};
            align-self: ${styles && styles.alignSelf || ''};

            width: ${styles && styles.width || ''};
            min-width: ${styles && styles.minWidth || '150px'};
            min-height: ${styles && styles.minHeight || '200px'};

            margin-top: ${styles && styles.marginTop || '0'};
            margin-right: ${styles && styles.marginRight || '0'};
            margin-bottom: ${styles && styles.marginBottom || '30px'};
            margin-left: ${styles && styles.marginLeft || '0'};

            padding-top: ${styles && styles.paddingTop || '15px'};
            padding-right: ${styles && styles.paddingRight || '15px'};
            padding-bottom: ${styles && styles.paddingBottom || '15px'};
            padding-left: ${styles && styles.paddingLeft || '15px'};

            border: ${styles && styles.border || 'none'};
            border-top: ${styles && styles.borderTop || ''};
            border-right: ${styles && styles.borderRight || ''};
            border-bottom: ${styles && styles.borderBottom || ''};
            border-left: ${styles && styles.borderLeft || ''};
            border-radius: ${styles && styles.borderRadius || '4px'};

            box-shadow: ${styles && styles.boxShadow || '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'};
            overflow: ${styles && styles.overflow || 'hidden'};

            background-color: ${styles && styles.backgroundColor || '#ffffff'};
        `
    }}
`;
