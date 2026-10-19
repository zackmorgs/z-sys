import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Content from '../components/Content';



export default function Typography() {
    return (
        <Layout>
            <Hero>
                <h1>Typography Test Page for z-sys</h1>
                <p className="subtitle">
                    A reference for the type styles and semantic text elements used throughout z-sys.
                </p>
                <p>
                    This is a paragraph element to test the typography styles. I will ensure it is properly styled throughout the application.
                </p>
                <p>
                    Another paragraph element to further test the typography styles and ensure consistency across different text elements.
                </p>
            </Hero>
            <section>
                <Content>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Content>
            </section>
            <section>
                <Content>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Content>
            </section>
            <section>
                <Content>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Content>
            </section>
        </Layout>
    );
}
