import React from 'react';
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Well from "../../components/Well";
import Accordion from '../../components/Accordion';
import Content from '../../components/Content';
import LinkButton from "../../components/LinkButton";

export default function ComponentsIndex() {
    return (
        <Layout>
            <Hero>
                <h1>Components</h1>
                <p>This page showcases the various components available in the design system.</p>
            </Hero>

            <Content>
                <h3>Colors</h3>
                <p className="subtitle">Color variables for the design system.</p>
                <ul id="txt_color_list" className="list-disc ml-8 text-xl">
                    <li className="txt-white">White</li>
                    <li className="txt-black">Black</li>
                    <li className="txt-grey">Grey</li>
                    <li className="txt-red">Red</li>
                    <li className="txt-blue">Blue</li>
                    <li className="txt-green">Green</li>
                </ul>
            </Content>
            <Content>
                <h3>Wells</h3>
                <p className="subtitle">
                    Well components of various background colors.
                </p>
                <Well className="bg-black mt-4">
                    <p>This is a black well component.</p>
                </Well>
                <Well className="bg-white mt-4">
                    <p>This is a white well component.</p>
                </Well>
                <Well className="bg-grey mt-4">
                    <p>This is a grey well component.</p>
                </Well>
                <Well className="bg-red mt-4">
                    <p>This is a red well component.</p>
                </Well>
                <Well className="bg-blue mt-4">
                    <p>This is a blue well component.</p>
                </Well>
                <Well className="bg-green mt-4">
                    <p>This is a green well component.</p>
                </Well>

            </Content>

           
            <Content>
                <h3>LinkButtons</h3>
                <LinkButton to="/components/button" className="w-full mt-4">Default Button</LinkButton>
                <LinkButton to="/components/link-button" className="w-full mt-4 bg-white">White LinkButton</LinkButton>
                <LinkButton to="/components/link-button" className="w-full mt-4 bg-black">Black LinkButton</LinkButton>
                <LinkButton to="/components/link-button" className="w-full mt-4 bg-grey">Grey LinkButton</LinkButton>
                <LinkButton to="/components/link-button" className="w-full mt-4 bg-red">Red LinkButton</LinkButton>
                <LinkButton to="/components/link-button" className="w-full mt-4 bg-blue">Blue LinkButton</LinkButton>
                <LinkButton to="/components/link-button" className="w-full mt-4 bg-green">Green LinkButton</LinkButton>

            </Content>

             <Content>
                <h3>Accordion</h3>
                <p className="subtitle">Accordion components for collapsible content sections.</p>

                <Accordion title="Accordion Item Title" className="mt-2">
                    <p>This is the content of the accordion.</p>
                </Accordion>
                <Accordion title="Accordion Item Title 2" className="mt-2">
                    <p>This is the content of the accordion 2.</p>
                </Accordion>
                <Accordion title="Accordion Item Title 3" className="mt-2">
                    <p>This is the content of the accordion 3.</p>
                </Accordion>
            </Content>
        </Layout>
    );
}
