import { MERCHANTS } from "./merchants";
import { ORDERS } from "./orders";
import { respuestaConId } from "./respuestasid";
import { respuestaSinId } from "./respuestassinid";

function ordersInf(merchID) {
        // console.log("with ID", merchID);
        let order = ORDERS.filter(order => order.merchant_id==merchID);
        let orderCom = ORDERS.filter(order => order.merchant_id==merchID && order.completed_at!='');
        let orderInc = ORDERS.filter(order => order.merchant_id==merchID && order.completed_at=='');
        return {order,orderCom,orderInc};
};
let idFound='5';
if( idFound != ''){
    // llamdo sin parametro
    // console.log(restmerch);
    // llamado con parametro
    let restorder = ordersInf(idFound).order;
    let restorderCom =ordersInf(idFound).orderCom;
    let restorderInc = ordersInf(idFound).orderInc;
    // console.log("", restorder);
    // console.log("", restorderCom);
    // console.log("", restorderInc);

    restorder.forEach(restorder => {
        restorder.id = parseInt(restorder.id),
        restorder.merchant_id = parseInt(restorder.merchant_id),
        restorder.amount = parseFloat(restorder.amount);
    });
    // console.log("nuevo array: ", restorder);

    // restmerch.forEach(restmerch =>{
    //     restmerch.id=parseInt(restmerch.id);
    // });

    // console.log("nuevo merchant: ", restmerch);
    let countCom=0;
    let countInc=0;
    restorderInc.map(resOrd => {
        countInc++;
    });
    // console.log(countInc);
    let amountT = [];
    restorderCom.map(resOrd => {
        amountT.push(resOrd.amount);
        countCom++;
    });
    // console.log(countCom);
    let sumatoria=0;
    for(let i=0;i<amountT.length;i++){
        sumatoria=sumatoria+amountT[i];
    }
    // console.log("la sumatoria es:",sumatoria.toFixed(2));
    // let temp = respuestaConId.;
    // console.log(respuestaConId.length());
    let idPush=0;
    let por=0;
    if (sumatoria<25000){
        por=sumatoria*.01;
    }
    if (sumatoria>=25000 && sumatoria<=60000){
        por=sumatoria*.0095;
    }
    if (sumatoria>60000){
        por=sumatoria*.0085;
    }

    MERCHANTS.map(resOrd => {
        idPush++;
    });
    let nuevo = {
        id: parseInt(idPush+1),
        merchant_id: parseInt(idFound),
        numero_ventas: countCom,
        faltan_completar: countInc,
        total_ventas: parseFloat((sumatoria+por).toFixed(2)),
        comision: parseFloat(por.toFixed(2)),
        desembolso: parseFloat(sumatoria.toFixed(2))
    };
    respuestaConId.push(nuevo);
    console.log(respuestaConId);
}else{
    let countMerch=0;
    MERCHANTS.map(resMerch => {
        countMerch++;
    });
    // console.log(countMerch);
    for(let i=1;i<=countMerch;i++){
        // console.log(restmerch);
        // llamado con parametro
        let restorder = ordersInf(i).order;
        let restorderCom =ordersInf(i).orderCom;
        let restorderInc = ordersInf(i).orderInc;
        // console.log("", restorder);
        // console.log("", restorderCom);
        // console.log("", restorderInc);

        restorder.forEach(restorder => {
            restorder.id = parseInt(restorder.id),
            restorder.merchant_id = parseInt(restorder.merchant_id),
            restorder.amount = parseFloat(restorder.amount);
        });
        // console.log("nuevo array: ", restorder);

        // restmerch.forEach(restmerch =>{
        //     restmerch.id=parseInt(restmerch.id);
        // });

        // console.log("nuevo merchant: ", restmerch);
        let countCom=0;
        let countInc=0;
        restorderInc.map(resOrd => {
            countInc++;
        });
        // console.log(countInc);
        let amountT = [];
        restorderCom.map(resOrd => {
            amountT.push(resOrd.amount);
            countCom++;
        });
        // console.log(countCom);
        let sumatoria=0;
        for(let i=0;i<amountT.length;i++){
            sumatoria=sumatoria+amountT[i];
        }
        // console.log("la sumatoria es:",sumatoria.toFixed(2));
        // let temp = respuestaSinId.pop || 0;
        // let idPush=0;
        let por=0;
        if (sumatoria<25000){
            por=sumatoria*.01;
        }
        if (sumatoria>=25000 && sumatoria<=60000){
            por=sumatoria*.0095;
        }
        if (sumatoria>60000){
            por=sumatoria*.0085;
        }

        // MERCHANTS.map(resOrd => {
        //     idPush++;
        // });
        let nuevo = {
            id: i,
            merchant_id: i,
            numero_ventas: countCom,
            faltan_completar: countInc,
            total_ventas: parseFloat((sumatoria+por).toFixed(2)),
            comision: parseFloat(por.toFixed(2)),
            desembolso: parseFloat(sumatoria.toFixed(2))
        };
        respuestaSinId.push(nuevo);
        
    }
    console.log(respuestaSinId);
}
// 
// let idFound=3;
// // llamdo sin parametro
// let restmerch = ordersInf();
// console.log(restmerch);
// // llamado con parametro
// let restorder = ordersInf(idFound).order;
// let restorderCom =ordersInf(idFound).orderCom;
// let restorderInc = ordersInf(idFound).orderInc;
// console.log("", restorder);
// console.log("", restorderCom);
// console.log("", restorderInc);

// restorder.forEach(restorder => {
//     restorder.id = parseInt(restorder.id),
//     restorder.merchant_id = parseInt(restorder.merchant_id),
//     restorder.amount = parseFloat(restorder.amount);
// });
// console.log("nuevo array: ", restorder);

// // restmerch.forEach(restmerch =>{
// //     restmerch.id=parseInt(restmerch.id);
// // });

// // console.log("nuevo merchant: ", restmerch);
// let countCom=0;
// let countInc=0;
// restorderInc.map(resOrd => {
//     countInc++;
// });
// console.log(countInc);
// let amountT = [];
// restorderCom.map(resOrd => {
//     amountT.push(resOrd.amount);
//     countCom++;
// });
// console.log(countCom);
// let sumatoria=0;
// for(let i=0;i<amountT.length;i++){
//     sumatoria=sumatoria+amountT[i];
// }
// console.log("la sumatoria es:",sumatoria.toFixed(2));
// const respuestaConId=[];
// let temp = respuestaConId.pop();
// let idPush;
// let por=0;
// if (sumatoria<25000){
//     por=sumatoria*.01;
// }
// if (sumatoria>=25000 && sumatoria<=60000){
//     por=sumatoria*.0095;
// }
// if (sumatoria>60000){
//     por=sumatoria*.0085;
// }

// if(temp== null){
//     idPush=1;
// }else{
//     idPush=temp.id+1;
// }
// let nuevo = {
//     id: idPush,
//     merchant_id: idFound,
//     numero_ventas: countCom,
//     faltan_completar: countInc,
//     total_ventas: parseFloat((sumatoria+por).toFixed(2)),
//     comision: parseFloat(por.toFixed(2)),
//     desembolso: parseFloat(sumatoria.toFixed(2))
// };
// respuestaConId.push(nuevo);
// console.log(respuestaConId);


