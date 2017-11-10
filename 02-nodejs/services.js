var data = require('./data/devfest-2015');

exports.listerTousLesPresentateurs = function(){return data.speakers}
exports.listerTopPresentateurs = function(){return data.speakers.filter(p => p.topspeaker)}
exports.listerToutesLesSessions = function(){return data.sessions}
exports.trouverUneSession = function(idSession){return data.sessions.filter(s => s.id === idSession)}
