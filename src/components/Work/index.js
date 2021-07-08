import React, {Component} from "react"
import { connect } from "react-redux"
import { Row, Col } from 'react-bootstrap'
import { getAllWorkInfo } from '../../actions/work.actions'
import { bindActionCreators } from 'redux'
import Image from 'next/image'

class Work extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getAllWorkInfo()
    }
    render(){
        return(
            <Row className="justify-content-md-center">
                {
                    this.props.workInfo.map( (item, index) => (
                        <Col lg={4} md={6} key={index}>
                            <div className="single-element">
                                <Image src={require(`./../../../public/images/icons/${item.img}.png`)} alt="work" />
                                <h4 className="entry-title"><a href="#">{item.label}</a></h4>
                                <p>{item.text}</p>
                            </div>
                        </Col>
                    ))
                }
                <Col md={12} className="text-center">
                    <a className="btn btn-white-shadow" href="#">learn more</a>
                </Col>
            </Row>
        )
    }
}


const mapStateToProps = state => ({
    workInfo: state.workInfo
});

const mapDispatchToProps = dispatch => {
    return {
        getAllWorkInfo: bindActionCreators(getAllWorkInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Work);