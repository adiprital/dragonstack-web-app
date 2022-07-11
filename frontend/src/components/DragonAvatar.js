import React, { Component } from 'react';
import { patchy, plain, skinny, slender, sporty, spotted, stocky, striped } from '../assets';

const propertyMap = {
    backgroundColor: { 
        black: '#0d0e10', 
        white: '#faf6fb', 
        green: '#458125', 
        blue: '#2b86b5' 
    },
    build: { slender, stocky, sporty, skinny },
    pattern: { plain, striped, spotted, patchy },
    size: { small: 100, medium: 140, large: 180, enormous: 220 }
};

class DragonAvater extends Component {

    get DragonImage() {

        const dragonPropertyMap = {};

        this.props.dragon.traits.forEach(trait => {
            const { traitType, traitValue } = trait;

            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];

        });

        const { backgroundColor, build, pattern, size } = dragonPropertyMap;

        const sizing = {width: size, height: size};

        return (
            <div className = 'dragon-avatar-image-wrapper'>
                <div className = 'dragon-avatar-image-background' style ={{ backgroundColor, ...sizing}}></div>
                <img src = {pattern} className = 'dragon-avatar-image-pattern' style = {{...sizing}}/>
                <img src = {build} className = 'dragon-avatar-image' style = {{...sizing}}/>
            </div>
        );
    }

    render() {
        const { generationId, dragonId, traits } = this.props.dragon;

        //if (!generationId) return <div></div>;

        if (!dragonId) return <div></div>;

        return (
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}. </span>
                { traits.map(trait => trait.traitValue).join(', ') }
                { this.DragonImage}
            </div>
        )
    }

}

export default DragonAvater;