"use strict";
function jobToRole(job) {
    switch (job.toLowerCase()) {
        case "mrd":
        case "gld":
        case "pld":
        case "war":
        case "drk":
            return "tank";
        case "cnj":
        case "sch":
        case "ast":
        case "whm":
            return "healer";
        case "pgl":
        case "mnk":
        case "lnc":
        case "drg":
        case "rog":
        case "nin":
        case "sam":
        case "arc":
        case "brd":
        case "mch":
        case "thm":
        case "blm":
        case "acn":
        case "rdm":
        case "smn":
            return "dps";
        case "crp":
        case "bsm":
        case "arm":
        case "gsm":
        case "ltw":
        case "wvr":
        case "alc":
        case "cul":
            return "doh";
        case "min":
        case "btn":
        case "fsh":
            return "dol";
        default:
            return "unknown";
    }
}