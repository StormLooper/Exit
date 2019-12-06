import React from 'react';
import {  asset,View,NativeModules} from 'react-360';
import Entity from 'Entity';

class Skull extends React.Component {

    render() {

        return (

            <View>
                <Entity source={{
                obj: asset('Skull.obj'),
                }} style={{
                transform: [
                    { translate: [350, -650, 600] },
                    { rotateY: 210 },
                     { rotateX: -20 },
                    { scaleX: 0.23 },
                    { scaleY: 0.23 },
                    { scaleZ: 0.23},
                ],
                color: 'white',
                }}
                   lit={true}>
                </Entity>
            </View>
        )
    }
}

export default Skull
