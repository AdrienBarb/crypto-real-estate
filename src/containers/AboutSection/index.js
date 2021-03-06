import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../components/SectionTitle'

const AboutSection = () => {
    return(
        <div id="about" className="about-area">
            <Container>
                <Row>
                    <Col md={12}>
                        <SectionTitle title="About CoinAge" subTitle="Introduce" />
                    </Col>
                    <Col lg={12}>
                        <div className="pd-top-37">
                            <h3 className="entry-title">Everything You Need To Know!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uto labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla par iatur sed do eiusmod tempor incididunt.</p>
                            <a className="btn btn-white-shadow" href="#">learn more</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
export default AboutSection