import React from 'react';

import Content from './Content';

export default function Footer(props) {
    return (
        <footer id={"footer " + props.id} className={props.className + " footer"}>
            <Content>
                <p>&copy; {new Date().getFullYear()} z-sys. All rights reserved.</p>
            </Content>
        </footer>
    );
}
