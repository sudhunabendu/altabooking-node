
const helpers = require('./helpers');

exports.uniqueCode = (length, table, col, available_sets = 'ud') =>{
    const code = helpers.generatePassword(length,available_sets);
    const existRecords = helpers.isExist(table, col, code);
    if (!existRecords) {
        return code;
    } else {
        return uniqueCode(length, table, col, available_sets);
    }
}


exports.generateURL = (table, fieldName, fieldValue, pkValue = '') => {
    fieldValue = slugify(fieldValue, { lower: true, replacement: '-' });
    let existRecords = helpers.isExist(table, fieldName, fieldValue, pkValue);
    if (existRecords) {
      for (let i = 1; i < 100; i++) {
        let link = `${fieldValue}-${i}`;
        existRecords = helpers.isExist(table, fieldName, link, pkValue);
        if (!existRecords) {
          fieldValue = link;
          break;
        }
      }
    }
}


// exports.generateURL = (table, fieldName, fieldValue, pkValue = '') =>{
//     fieldValue = fieldValue.replace(/ /g, '-');
//     let existRecords = helpers.isExist(table, fieldName, fieldValue, pkValue);
//     if (existRecords) {
//         for (let index = 1; index < 100; index++) {
//             let link = fieldValue + "-" + index;  
//             existRecords = helpers.isExist(table, fieldName, link, pkValue);
//             if(!existRecords){
//                 fieldValue = link;
//                 break;
//             }
//         }
//     }

// }