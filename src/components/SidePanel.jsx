import React from "react";

export default class SidePanel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const style = this.props.power ? {background : "#0ad82c"} : {background: "#063d0f", boxShadow: "none"};

        return (
            <div className="side-panel">
                <div className="label">JKB Drum</div>
                <div style={this.props.colorStyle} 
                className="display" 
                id="display">
                    {this.props.currentSound}
                </div>
                <div>
                    <p>Power</p>
                    <button style={style}
                        onClick={this.props.togglePower}></button>
                </div>
                <div>
                    <p>Volume</p>
                    <input value={this.props.volumeInput}
                    type="range"  
                    min="1"
                    max="100"
                    onChange={this.props.changeVolume}
                    />
                </div>
                <div className="speakers">
                    {/* make this a hiden menu some day cause looks like over sized hamburger menu button */}
                    {/* Ment to look like a speaker */}
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                </div>
            </div>
        )
    }
}