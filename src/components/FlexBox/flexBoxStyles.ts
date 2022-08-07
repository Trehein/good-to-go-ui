export type FlexBoxCustomStyleObj = {
    width?: string | undefined,
    height?: string | undefined,
    backgroundColor?: string | undefined,
    justifyContent?: string | undefined,
    alignItems?: string | undefined,
    flexDirection?: string | any | undefined, // cannot be specifically cast as just a string or undefined
    padding?: string | undefined,
    additionalStyles?: object | undefined
} 

export const flexBoxStyles = (customStyleObj?: FlexBoxCustomStyleObj): FlexBoxCustomStyleObj | object => {

    if (customStyleObj && customStyleObj.additionalStyles !== undefined) {
        return {
            ...customStyleObj.additionalStyles,
            alignItems: customStyleObj?.alignItems ? customStyleObj.alignItems : 'center',
            display: 'flex',
            justifyContent: customStyleObj?.justifyContent ? customStyleObj.justifyContent : 'space-evenly',
            width: customStyleObj?.width ? customStyleObj.width : '100%',
            height: customStyleObj?.height ? customStyleObj.height : '100%',
            backgroundColor: customStyleObj?.backgroundColor ? customStyleObj.backgroundColor : 'white',
            flexDirection: customStyleObj?.flexDirection ? (customStyleObj.flexDirection === 'row' ? 'row' : 'column' ) : 'row',
            padding: customStyleObj?.padding ? customStyleObj.padding : '0%'
        }
    } else if (customStyleObj) {
        return {
            display: 'flex',
            width: customStyleObj?.width ? customStyleObj.width : '100%',
            height: customStyleObj?.height ? customStyleObj.height : '100%',
            backgroundColor: customStyleObj?.backgroundColor ? customStyleObj.backgroundColor : 'white',
            flexDirection: customStyleObj?.flexDirection ? (customStyleObj.flexDirection === 'row' ? 'row' : 'column' ) : 'row',
            justifyContent: customStyleObj?.justifyContent ? customStyleObj.justifyContent : 'space-evenly',
            alignItems: customStyleObj?.alignItems ? customStyleObj.alignItems : 'center',
            padding: customStyleObj?.padding ? customStyleObj.padding : '0%'
        }
    } else {
        return {
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            padding: '0%',
            alignItems: 'center'
        }
    }
}