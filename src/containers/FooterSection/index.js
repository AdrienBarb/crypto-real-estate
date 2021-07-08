import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WidgetAbout from '../../components/WidgetAbout'
import WidgetSubscribe from '../../components/WidgetSubscribe'
import Copyright from '../../components/Copyright'
const FooterSection = () => {
    return(
        <div className="footer-section">
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={4} md={6}>
                        <WidgetAbout />
                    </Col>
                    <Col lg={4} md={12}>
                        <WidgetSubscribe 
                            title="Newsletter" 
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                        />
                    </Col>
                </Row>
            </Container>
            <Copyright text="Copyright ThemeLayer. All rights reserved 2020" />
        </div>
    )
}
export default FooterSection