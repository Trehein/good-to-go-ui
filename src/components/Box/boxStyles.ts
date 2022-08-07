export type BoxCustomStyleObj = {
    width?: string | undefined,
    height?: string | undefined,
    padding?: string | undefined,
    backgroundColor?: string | undefined,
    additionalStyles?: object | undefined
}

export const boxStyles = (customStyleObj?: BoxCustomStyleObj): BoxCustomStyleObj => {
    if (customStyleObj && customStyleObj.additionalStyles !== undefined) {
        return {
            ...customStyleObj.additionalStyles,
            width: customStyleObj?.width ? customStyleObj.width : 'fit-content',
            height: customStyleObj?.height ? customStyleObj.height : 'fit-content',
            backgroundColor: customStyleObj?.backgroundColor ? customStyleObj.backgroundColor : 'white',
            padding: customStyleObj?.padding ? customStyleObj.padding : '2.5%'
        }
    } else if (customStyleObj) {
        return {
            width: customStyleObj?.width ? customStyleObj.width : 'fit-content',
            height: customStyleObj?.height ? customStyleObj.height : 'fit-content',
            backgroundColor: customStyleObj?.backgroundColor ? customStyleObj.backgroundColor : 'white',
            padding: customStyleObj?.padding ? customStyleObj.padding : '2.5%'
        }
    } else {
        return {
            width: 'fit-content',
            height: 'fit-content',
            backgroundColor: 'white',
            padding: '2.5%'
        }
    }
}