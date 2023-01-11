const changeDataType = (dataType) => {
    let changedDataType = '';
    if (dataType === 'txt'){
        changedDataType = 'text/plain';
    }else if(dataType === 'json'){
        changedDataType = 'application/json';
    } else if( typeof dataType === 'obeject'){
        changedDataType = 'text/json';
    }
     else {
        changedDataType = 'text/html'
    }

    return changedDataType;
}

module.exports = changeDataType;