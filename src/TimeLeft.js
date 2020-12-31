const constructTimeLeftItem = (itemValue, itemSingularName, itemPlurralName) => {
    if(itemValue){
        if(itemValue === 1){
            return `1 ${itemSingularName}`
        }
        else {
            return `${itemValue} ${itemPlurralName}`
        }
    }
}

export { constructTimeLeftItem }