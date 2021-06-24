import { Component } from "react";
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button";
// import axios from 'axios';

export default class GameAnalysis extends Component
{
    render()
    {
        return(
            <div className="ml-5 mr-5 mt-5 game">
                <Row  className="justify-content-center">
                    
                    <Col xs={8} md={6} className="pt-2 text-center">
                        <div>
                            <Image src="https://cdn.vox-cdn.com/thumbor/HWEHEWc4LgGwRYqqwubqs2bF81M=/0x0:2040x1360/1400x933/filters:focal(857x517:1183x843):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69494838/acastro_190618_1777_cloud_gaming_0003.0.jpg" rounded fluid/>
                            <p></p>
                        </div>
                        <Button className="mb-2 mt-4">Steam Store Link</Button>
                    </Col>

                    <Col xs={10} md={6} className="pt-5">
                        <h2>Hello</h2>
                        <Table bordered variant="dark">
                            <tbody>
                                <tr>
                                    <td>App ID:</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                </Row>
            </div>
        )
    }
}