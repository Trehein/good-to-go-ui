export type ButtonCustomStyleObj = {
    width?: string | undefined,
    height?: string | undefined,
    padding?: string | undefined,
    backgroundColor?: string | undefined,
    additionalStyles?: object | undefined,
    cursor?: string | undefined
}

export const buttonStyles = (customStyleObj?: ButtonCustomStyleObj): ButtonCustomStyleObj => {
    if (customStyleObj && customStyleObj.additionalStyles !== undefined) {
        return {
            ...customStyleObj.additionalStyles,
            cursor: customStyleObj?.cursor ? customStyleObj.cursor : 'pointer',
            width: customStyleObj?.width ? customStyleObj.width : 'fit-content',
            height: customStyleObj?.height ? customStyleObj.height : 'fit-content',
            backgroundColor: customStyleObj?.backgroundColor ? customStyleObj.backgroundColor : 'white',
            padding: customStyleObj?.padding ? customStyleObj.padding : '2.5%'
        }
    } else if (customStyleObj) {
        return {
            cursor: customStyleObj?.cursor ? customStyleObj.cursor : 'pointer',
            width: customStyleObj?.width ? customStyleObj.width : 'fit-content',
            height: customStyleObj?.height ? customStyleObj.height : 'fit-content',
            backgroundColor: customStyleObj?.backgroundColor ? customStyleObj.backgroundColor : 'white',
            padding: customStyleObj?.padding ? customStyleObj.padding : '2.5%'
        }
    } else {
        return {
            cursor: 'pointer',
            width: 'fit-content',
            height: 'fit-content',
            backgroundColor: 'white',
            padding: '2.5%'
        }
    }
}