//blocks when the webpage loads
//see developer docs at:
//https://developer.chrome.com/docs/extensions/reference/webRequest/

chrome.webRequest.onBeforeRequest.addListener
(
    function(details){return {cancel: true};
},
{urls:     
    [
    "*://*.googleads.g.doubleclick.net/pcs/click/*",
    "*://*.3642305.fls.doubleclick.net/*",
    "*://*.3765329.fls.doubleclick.net/*",
    "*://*.4514783.fls.doubleclick.net/*",
    "*://*.4923503.fls.doubleclick.net/*",
    "*://*.4942839.fls.doubleclick.net/*",
    "*://*.5582200.fls.doubleclick.net/*",
    "*://*.8210643.fls.doubleclick.net/*",
    "*://*.8482194.fls.doubleclick.net/*",
    "*://*.8563004.fls.doubleclick.net/*",
    "*://*.pagead.l.doubleclick.net/*",
    "*://*.pagead46.l.doubleclick.net/*",
    "*://*.partnerad.l.doubleclick.net/*",
    "*://*.undefined.fls.doubleclick.net/*",
    "*://*.5362399.fls.doubleclick.net/*",
    "*://*.service.urchin.com/*",
    "*://*.analytics-api-samples.googlecode.com/*",
    "*://*.www.adsensecustomsearchads.com/*",
    "*://*.1435575.fls.doubleclick.net/*",
    "*://*.2542116.fls.doubleclick.net/*",
    "*://*.4053494.fls.doubleclick.net/*",
    "*://*.4236808.fls.doubleclick.net/*",
    "*://*.www3.webhostingtalk.com/*",
    "*://*.analytics.inform.com/*",
    "*://*.track.searchiq.co/*",
    "*://*.adexchangedirect.com/*",
    "*://*.cleardexchange.com/*",
    "*://*.stats.directexpose.com/*",
    "*://*.novelty-media-us-d.openx.net/*",
    "*://*.ox-delivery-prod-1-us-east1.openx.net/*",
    "*://*.star.pulseonclick.com/*",
    "*://*.app.reflectivedata.com/*",
    "*://*.track.special-promotions.online/*",
    "*://*.stats.tiebreaker.com/*",
    "*://*.click.udimg.com/*",
    "*://*.m1.2mdn.net/*",
    "*://*.n339.asp-cc.com/*",
    "*://*.ads.cc-dt.com/*",
    "*://*.clickserve.cc-dt.com/*",
    "*://*.creative.cc-dt.com/*",
    "*://*.clickserve.eu.dartsearch.net/*",
    "*://*.clickserve.uk.dartsearch.net/*",
    "*://*.doubleclick.net/*",
    "*://*.ad.ae.doubleclick.net/*",
    "*://*.ad.ar.doubleclick.net/*",
    "*://*.ad.at.doubleclick.net/*",
    "*://*.ad.au.doubleclick.net/*",
    "*://*.ad.be.doubleclick.net/*",
    "*://*.ad.br.doubleclick.net/*",
    "*://*.ad.ca.doubleclick.net/*",
    "*://*.ad.ch.doubleclick.net/*",
    "*://*.ad.cn.doubleclick.net/*",]
    
    },
	["blocking"]
);


