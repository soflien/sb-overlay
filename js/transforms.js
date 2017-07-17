"use strict";
var HeliosTransforms = {
    "StringToUppercase": (str) => {
        return str.toUpperCase();
    },
    "StringToLowercase": (str) => {
        return str.toLowerCase();
    },
    "StringExtractSkillName": (str) => {
        return str.substring(0, str.indexOf("-"));
    },
    "StringExtractSkillDmg": (str) => {
        return str.substring(str.indexOf("-") + 1);
    },
    "StringToNumber": (str) => {
        return parseInt(str);
    }
};