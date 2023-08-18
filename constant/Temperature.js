const TemperatureUnit ={
    FARAHNEIT:'°F',
    CELSIUS:'°C'
}
function convertTemp(temp, unit){

    if(unit === TemperatureUnit.CELSIUS){
        return (temp - 32) / 1.8

    }else if(unit === TemperatureUnit.FARAHNEIT){
        return temp * 1.8 + 32 

    }else{
        throw new Error("Invalid Error")
    }


}
function UnitIcon(unit){
    return unit === TemperatureUnit.CELSIUS ? TemperatureUnit.FARAHNEIT : TemperatureUnit.CELSIUS
}
function WhatTemp(temp, unit){
    if(unit === TemperatureUnit.CELSIUS){
        return temp <= 0;


    }else if(unit === TemperatureUnit.FARAHNEIT){
        return temp <= 32
    }else{
        throw new Error('invalid Vlue')
    }

}
export {TemperatureUnit, convertTemp, UnitIcon, WhatTemp}