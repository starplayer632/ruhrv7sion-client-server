const FunnelConfig = require('../model/FunnelConfig');
const User = require('../model/User');
const FunnelDone = require('../model/FunnelDone');
var moment = require('moment-timezone');



const getAllMatches = async (req, res) => {
    const cookies = req.cookies;

    const user = await User.findOne({ refreshToken : cookies.jwt }).exec();
    const companyuser = user.username;
    //Security check is needed
    try {
        const funneldones = await FunnelDone.find({companyuser}).exec();
        res.json(funneldones);
    } catch (err) {
        console.error(err);
    }    
}

const getNewestMatchTotal = async (req, res) => {
    const cookies = req.cookies;

    const user = await User.findOne({ refreshToken : cookies.jwt }).exec();
    const companyuser = user.username;
    //Security check is needed
    try {
        const funneldones = await FunnelDone.find({companyuser}).exec();
        let newest;
        funneldones.map((funnel, index) => {
            if(index===0){
                newest = funnel;
            }else{
                //Compare Date then time Sample: 2022-10-10T21:10:08+02:00
                const newestD= newest.createdat.split("T");
                const funnelD = funnel.createdat.split("T");
                //Date
                const newestdate = newestD[0].split("-");
                const funneldate = funnelD[0].split("-");
                //Hours
                const newest24 = newestD[1].split(":");
                const funnel24 = funnelD[1].split(":");
                if(newestdate[0] < funneldate[0]){
                    //neuer da jahr neuer
                    newest = funnel;
                }else if(newestdate[0] === funneldate[0]){
                    //Jahr ist gleich
                    if(newestdate[1]<funneldate[1]){
                        //neuer da Monat neuer
                        newest = funnel;
                    }else if(newestdate[1] === funneldate[1]){
                        //Monat ist gleich
                        if(newestdate[2]<funneldate[2]){
                            //neuer da Tag neuer
                            newest = funnel; 
                        }else if(newestdate[2] === funneldate[2]){
                            //Tag ist gleich
                            if(newest24[0]<newest24[0]){
                                //neuer da Stunde neuer
                                newest = funnel; 
                            }else if(newest24[0]===funnel24[0]){
                                //Stunde gleich
                                if(newest24[1]<newest24[1]){
                                    //neuer da Minute neuer
                                    newest = funnel;
                                }else if(newest24[1]===funnel24[1]){
                                    //Minute gleich
                                    if(newest24[2]<newest24[2]){
                                        //neuer da Sekunde neuer
                                        newest = funnel;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        res.json(newest);
    } catch (err) {
        console.error(err);
    }    
}



module.exports = {
    getAllMatches,
    getNewestMatchTotal
}